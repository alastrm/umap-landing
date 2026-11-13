"use client";

import { LazyMotion, domAnimation, useReducedMotion } from "motion/react";
import * as m from "motion/react-m";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, MapLink } from "./site-links";
import styles from "./feature-cards.module.css";

const features = [
  {
    id: "search", title: "Поиск мест", tilt: -5,
    image: "umap-search-results.webp", width: 626, height: 783,
    description: "Введите название организации и откройте нужный результат на карте.",
    alt: "Результаты поиска по названию в Umap",
  },
  {
    id: "categories", title: "Категории", tilt: 3.5,
    image: "umap-catalogue-focus.webp", width: 628, height: 590,
    description: "Выберите, что хотите найти: кофейни, аптеки, магазины и другие места рядом.",
    alt: "Категории мест в каталоге Umap",
  },
  {
    id: "routes", title: "Маршруты", tilt: -3,
    image: "umap-route-car-scene.webp", width: 1200, height: 900,
  },
  {
    id: "places", title: "Организации", tilt: 4.5,
    image: "umap-place-card.webp", width: 626, height: 824,
    preview: { image: "umap-place-preview.webp", width: 628, height: 515 },
    description: "Откройте карточку места, чтобы посмотреть адрес, часы работы и фотографии.",
    alt: "Карточка организации с фотографией, адресом и часами работы",
  },
  {
    id: "map", title: "3D-карта", tilt: -4,
    image: "umap-map-wide.webp", width: 1680, height: 916,
    description: "Включите режим 3D, чтобы рассмотреть здания и ориентиры с высоты.",
    alt: "Улицы и объёмные здания на карте Umap",
  },
] as const;

type Feature = (typeof features)[number];
type FeatureDetail = Exclude<Feature, { id: "routes" }>;

const spring = { type: "spring", stiffness: 265, damping: 26, mass: 0.9 } as const;

function CardFace({ feature }: { feature: Feature }) {
  const preview = "preview" in feature ? feature.preview : feature;

  return (
    <m.span
      className={styles.face}
      variants={{
        resting: { y: 0, scale: 1, rotate: feature.tilt },
        raised: { y: -24, scale: 1.04, rotate: feature.tilt * 0.22 },
      }}
      transition={spring}
    >
      <span className={styles.label}>
        {feature.title}
        {feature.id === "routes" ? <ArrowIcon /> : (
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M10 5v10M5 10h10" />
          </svg>
        )}
      </span>
      <span className={styles.art}>
        <Image src={`/assets/${preview.image}`} width={preview.width} height={preview.height} alt="" />
      </span>
    </m.span>
  );
}

export function FeatureCards() {
  const reducedMotion = useReducedMotion();
  const [detail, setDetail] = useState<FeatureDetail | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (detail && dialog && !dialog.open) dialog.showModal();
  }, [detail]);

  const gestures = {
    initial: false,
    animate: "resting",
    whileHover: reducedMotion ? undefined : "raised",
    whileFocus: reducedMotion ? undefined : "raised",
  } as const;

  return (
    <LazyMotion features={domAnimation} strict>
      <ul className={styles.grid}>
        {features.map((feature) => (
          <li key={feature.id} className={`${styles.tile} ${styles[feature.id]}`}>
            {feature.id === "routes" ? (
              <m.a className={styles.trigger} href="#routes" {...gestures}>
                <CardFace feature={feature} />
              </m.a>
            ) : (
              <m.button
                type="button"
                className={styles.trigger}
                aria-haspopup="dialog"
                aria-controls="feature-example"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setDetail(feature);
                }}
                {...gestures}
              >
                <CardFace feature={feature} />
              </m.button>
            )}
          </li>
        ))}
      </ul>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        id="feature-example"
        aria-labelledby="feature-example-title"
        data-lenis-prevent=""
        onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}
        onClose={() => {
          setDetail(null);
          triggerRef.current?.focus({ preventScroll: true });
        }}
      >
        {detail && (
          <div className={`${styles.example} ${detail.id === "map" ? styles.wideExample : ""}`}>
            <button type="button" className={styles.close} aria-label="Закрыть" onClick={() => dialogRef.current?.close()}>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                <path d="m5 5 10 10M15 5 5 15" />
              </svg>
            </button>
            <div className={styles.exampleCopy}>
              <h2 id="feature-example-title">{detail.title}</h2>
              <p>{detail.description}</p>
              <MapLink />
            </div>
            <Image className={styles.exampleImage} src={`/assets/${detail.image}`} width={detail.width} height={detail.height} alt={detail.alt} />
          </div>
        )}
      </dialog>
    </LazyMotion>
  );
}
