import Image from "next/image";
import { CitySection } from "./city-section";
import { LandingMotion } from "./landing-motion";
import { FeatureGrid, RouteShowcase } from "./product-sections";
import { Brand, MapLink, SectionLinks } from "./site-links";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title">
          Найдите место.{" "}
          <span>Постройте маршрут.</span>
        </h1>
        <div className="hero-action">
          <p>Находите места и организации, изучайте город и стройте маршруты.</p>
          <MapLink />
        </div>
      </div>
      <div className="hero-visual">
        <picture className="hero-map">
          <source media="(max-width: 640px)" srcSet="/assets/forHero-compact.webp" width={820} height={449} />
          <Image
            src="/assets/forHero-wide.webp"
            width={1680}
            height={920}
            alt="Карта Астаны в Umap с объёмными зданиями вокруг Ботанического сада"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
        <Image
          className="hero-mark"
          src="/assets/umap-logo-3d.webp"
          width={1440}
          height={1440}
          alt=""
          loading="eager"
        />
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="closing wrap" aria-labelledby="closing-title" data-reveal>
      <h2 id="closing-title">Начните с карты</h2>
      <MapLink />
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        К содержимому
      </a>
      <header className="site-header wrap" id="top">
        <Brand />
        <nav className="site-nav" aria-label="Основная навигация">
          <SectionLinks />
        </nav>
        <MapLink secondary />
      </header>
      <main id="main" tabIndex={-1}>
        <Hero />
        <FeatureGrid />
        <RouteShowcase />
        <CitySection />
        <FinalCallToAction />
      </main>
      <footer className="site-footer wrap">
        <div className="footer-brand">
          <Brand />
          <p>Поиск мест и маршруты в городе.</p>
        </div>
        <nav className="footer-nav" aria-label="Навигация в подвале">
          <SectionLinks />
        </nav>
      </footer>
      <LandingMotion />
    </>
  );
}
