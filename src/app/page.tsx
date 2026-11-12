import Image from "next/image";
import { CitySection } from "./city-section";
import { FeatureGrid, RouteShowcase } from "./product-sections";
import { Brand, MapLink, SectionLinks } from "./site-links";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div>
          <p className="section-label">Карта города</p>
          <h1 id="hero-title">
            Город ближе,{" "}
            <span>чем кажется</span>
          </h1>
        </div>
        <div className="hero-action">
          <p>Находите места и организации, изучайте город и стройте маршруты.</p>
          <MapLink />
        </div>
      </div>
      <div className="hero-visual">
        <picture className="hero-map">
          <source media="(max-width: 640px)" srcSet="/assets/umap-map-compact.webp" />
          <Image
            src="/assets/umap-map-wide.webp"
            width={1680}
            height={916}
            alt="Карта Umap с улицами и объёмными зданиями, строкой поиска и отметками мест"
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
    <section className="closing wrap" aria-labelledby="closing-title">
      <h2 id="closing-title">Откройте город с&nbsp;Umap</h2>
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
        <MapLink compact />
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
          <p>Карта и поиск мест в городе.</p>
        </div>
        <nav className="footer-nav" aria-label="Навигация в подвале">
          <SectionLinks />
        </nav>
      </footer>
    </>
  );
}
