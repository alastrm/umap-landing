import Image from "next/image";
import { BentoVideo } from "./bento-video";
import { bentoMetrics, portals } from "./landing-content";
import { ArrowIcon, Brand, getCityMapUrl, MapLink, SectionLinks } from "./site-links";
import styles from "./editorial.module.css";

const formatMetric = new Intl.NumberFormat("ru-RU");

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.metric}>
      <h3>{formatMetric.format(value)}</h3>
      <p>{label}</p>
    </div>
  );
}

export function ProductOverview() {
  return (
    <section id="overview" className={`wrap ${styles.overview}`} aria-label="Показатели и возможности Umap">
      <div className={styles.bento}>
        <article className={`${styles.tile} ${styles.visualTile}`}>
          <Image
            className={styles.bentoImage}
            src="/assets/umap-map-wide.webp"
            width={1680}
            height={916}
            alt="Здания и улицы Астаны на 3D-карте Umap"
          />
          <Metric {...bentoMetrics.users} />
        </article>
        <article className={`${styles.tile} ${styles.textTile} ${styles.coverage}`}>
          <p>Города на карте</p>
          <h3>Астана<br />и Алматы</h3>
          <a href="#cities">Выбрать город <span aria-hidden="true">↓</span></a>
        </article>
        <article className={`${styles.tile} ${styles.visualTile}`}>
          <div className={styles.listingPhoto}>
            <Image
              src="/assets/umap-place-preview.webp"
              width={628}
              height={515}
              alt="Фотография интерьера из карточки организации в Umap"
            />
          </div>
          <Metric {...bentoMetrics.organizations} />
        </article>
        <article className={`${styles.tile} ${styles.textTile} ${styles.routeMetric}`}>
          <Metric {...bentoMetrics.routes} />
          <a href="#routes">Сравнить маршруты <span aria-hidden="true">↑</span></a>
        </article>
        <div className={styles.tile}>
          <BentoVideo />
        </div>
        <article className={`${styles.tile} ${styles.textTile}`}>
          <h3>Карта и справочник в одном месте</h3>
          <p>От адреса и часов работы до маршрута к нужному месту.</p>
        </article>
      </div>
    </section>
  );
}

export function OrganizationSection() {
  return (
    <section id="organizations" className={styles.organizations} aria-labelledby="organizations-title">
      <div className="wrap">
        <h2 id="organizations-title" className="section-title">Umap для организаций</h2>
        <div className={styles.portals}>
          {portals.map(({ title, audience, description, action, href }) => (
            <a key={href} className={styles.portal} href={href}>
              <div>
                <p className={styles.audience}>{audience}</p>
                <h3>{title}</h3>
                <p className={styles.portalDescription}>{description}</p>
              </div>
              <span className={styles.portalAction}>{action} <ArrowIcon /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footerIntro}`}>
        <h2>Город ближе с Umap</h2>
        <MapLink />
      </div>
      <div className={styles.footerBody}>
        <div className="wrap">
          <div className={styles.footerGrid}>
            <div className={styles.footerBrand}>
              <Brand />
              <p>Веб-карта Астаны и Алматы.</p>
            </div>
            <nav aria-label="Разделы лендинга" className={styles.footerLinks}>
              <h2>Разделы</h2>
              <SectionLinks />
            </nav>
            <nav aria-label="Открыть карту города" className={styles.footerLinks}>
              <h2>Карты городов</h2>
              <a href={getCityMapUrl("astana")}>Астана <ArrowIcon /></a>
              <a href={getCityMapUrl("almaty")}>Алматы <ArrowIcon /></a>
            </nav>
            <nav aria-label="Сервисы Umap" className={styles.footerLinks}>
              <h2>Сервисы</h2>
              {portals.map(({ title, href }) => <a key={href} href={href}>{title} <ArrowIcon /></a>)}
            </nav>
          </div>
          <div className={styles.footerEnd}>
            <a href="#top">Наверх <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
