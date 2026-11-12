import { CitySection } from "./city-section";
import { OrganizationSection, ProductOverview, SiteFooter } from "./editorial-sections";
import { HeroScenes } from "./hero-scenes";
import { FeatureGrid } from "./product-sections";
import { Brand, MapLink, SectionLinks } from "./site-links";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">К содержимому</a>
      <header className="site-header wrap" id="top">
        <Brand />
        <nav className="site-nav" aria-label="Основная навигация">
          <SectionLinks />
        </nav>
        <MapLink secondary />
      </header>
      <main id="main" tabIndex={-1}>
        <HeroScenes />
        <ProductOverview />
        <FeatureGrid />
        <CitySection />
        <OrganizationSection />
      </main>
      <SiteFooter />
    </>
  );
}
