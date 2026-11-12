import Image from "next/image";
import { CitySection } from "./city-section";
import { FeatureGrid, ProductStories } from "./product-sections";
import { Brand, MapLink, SectionLinks } from "./site-links";

function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="section-label">Карта города</p>
        <h1 id="hero-title">
          Город ближе,{" "}
          <span>чем кажется</span>
        </h1>
        <p className="hero-description">
          Находите места и организации, выбирайте маршруты и исследуйте город на
          одной карте.
        </p>
        <MapLink />
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
          className="hero-search"
          src="/assets/umap-search-results.webp"
          width={626}
          height={783}
          alt="Результаты поиска организаций в Umap"
          loading="eager"
        />
      </div>
    </section>
  );
}

function FinalCallToAction() {
  return (
    <section className="closing wrap" aria-labelledby="closing-title">
      <div className="closing-copy">
        <h2 id="closing-title">Откройте город с&nbsp;Umap</h2>
        <MapLink />
      </div>
      <Image
        className="closing-mark"
        src="/assets/umap-logo-3d.webp"
        width={1440}
        height={1440}
        alt=""
      />
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
        <ProductStories />
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
