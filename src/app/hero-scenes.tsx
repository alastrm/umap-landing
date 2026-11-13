"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { RoutePreview, type RouteMode } from "./route-preview";
import { getExampleRouteUrl, MapLink } from "./site-links";
import styles from "./hero-scenes.module.css";

const scenes = [
  { id: "map", label: "Карта города" },
  { id: "routes", label: "Маршруты" },
  { id: "places", label: "Для организаций" },
] as const;

export function HeroScenes() {
  const [active, setActive] = useState(0);
  const [routeMode, setRouteMode] = useState<RouteMode>("car");
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const preference = window.matchMedia("(min-width: 641px) and (prefers-reduced-motion: no-preference)");
    const syncAutoplay = () => setCanAutoplay(preference.matches && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.intersectionRatio >= 0.35), { threshold: 0.35 });
    if (heroRef.current) observer.observe(heroRef.current);
    syncAutoplay();
    preference.addEventListener("change", syncAutoplay);
    document.addEventListener("visibilitychange", syncAutoplay);

    function openRoutes() {
      setActive(1);
    }

    const syncHash = () => { if (window.location.hash === "#routes") openRoutes(); };
    function onRouteLink(event: MouseEvent) {
      if (event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (event.target instanceof Element && event.target.closest('a[href="#routes"]')) openRoutes();
    }

    syncHash();
    window.addEventListener("hashchange", syncHash);
    document.addEventListener("click", onRouteLink);

    return () => {
      observer.disconnect();
      preference.removeEventListener("change", syncAutoplay);
      document.removeEventListener("visibilitychange", syncAutoplay);
      window.removeEventListener("hashchange", syncHash);
      document.removeEventListener("click", onRouteLink);
    };
  }, []);

  const playing = canAutoplay && visible && !hovered && !focused;

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next: number;
    switch (event.key) {
      case "ArrowLeft": next = (index + scenes.length - 1) % scenes.length; break;
      case "ArrowRight": next = (index + 1) % scenes.length; break;
      case "Home": next = 0; break;
      case "End": next = scenes.length - 1; break;
      default: return;
    }
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  return (
    <section
      id="routes"
      className={`hero ${styles.hero}`}
      aria-label="Возможности Umap"
      data-autoplay={canAutoplay}
      data-playing={playing}
      ref={heroRef}
      onPointerEnter={(event) => { if (event.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => setFocused(event.target.matches(":focus-visible"))}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className={styles.controls}>
        <div className={styles.tabs} role="tablist" aria-label="Сцены Umap">
          {scenes.map(({ id, label }, index) => (
            <button
              key={id}
              ref={(element) => { tabRefs.current[index] = element; }}
              type="button"
              id={`hero-tab-${id}`}
              role="tab"
              aria-selected={active === index}
              aria-controls={`hero-scene-${id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
            >
              {label}
              {active === index && (
                <span
                  aria-hidden="true"
                  className={styles.progress}
                  onAnimationEnd={() => {
                    setActive((current) => current === index ? (current + 1) % scenes.length : current);
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.stage}>
        <div id="hero-scene-map" role="tabpanel" aria-labelledby="hero-tab-map" inert={active !== 0} data-active={active === 0} className={styles.scene}>
          <div className="hero-copy">
            <h1>Найдите место.{" "}<span>Постройте маршрут.</span></h1>
            <div className="hero-action">
              <p>Находите места и организации, изучайте город и стройте маршруты.</p>
              <MapLink />
            </div>
          </div>
          <div className="hero-visual">
            <picture className="hero-map">
              <source media="(max-width: 640px)" srcSet="/assets/forHero-compact.webp" width={820} height={449} />
              <Image src="/assets/forHero-wide.webp" width={1680} height={920} alt="Объёмная карта Астаны вокруг Ботанического сада" loading="eager" fetchPriority="high" />
            </picture>
            <Image className="hero-mark" src="/assets/umap-logo-3d.webp" width={1440} height={1440} alt="" loading="eager" />
          </div>
        </div>

        <div id="hero-scene-routes" role="tabpanel" aria-labelledby="hero-tab-routes" inert={active !== 1} data-active={active === 1} className={`${styles.scene} ${styles.split}`}>
          <div className={styles.copy}>
            <h2>Выберите, как добраться</h2>
            <p>Сравните время в пути на машине, автобусе и пешком.</p>
            <MapLink href={getExampleRouteUrl(routeMode)} label="Открыть маршрут в Umap" />
          </div>
          <RoutePreview mode={routeMode} onChange={setRouteMode} />
        </div>

        <div id="hero-scene-places" role="tabpanel" aria-labelledby="hero-tab-places" inert={active !== 2} data-active={active === 2} className={`${styles.scene} ${styles.split}`}>
          <div className={styles.copy}>
            <h2>Umap для организаций</h2>
            <p>Кабинет Umap Business и портал Umap Developers.</p>
            <MapLink href="#organizations" label="Перейти к сервисам" />
          </div>
          <div className={styles.portalScene}>
            <Image src="/assets/umap-route-entry.webp" width={1268} height={885} alt="Карточка организации рядом с её расположением на карте Umap" />
          </div>
        </div>
      </div>
    </section>
  );
}
