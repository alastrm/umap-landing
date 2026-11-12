import Image from "next/image";
import { bentoMetrics, portals } from "./landing-content";
import { ArrowIcon, Brand, getCityMapUrl, MapLink, SectionLinks } from "./site-links";
import styles from "./editorial.module.css";

const formatMetric = new Intl.NumberFormat("ru-RU");

function Metric({ value, label }: { value: number; label: string }) {
  return (
    <div className={styles.metric}>
      <h3>{formatMetric.format(value)}</h3>
      <p>{label}{bentoMetrics.isDemo && <span className={styles.demo}>Демо</span>}</p>
    </div>
  );
}

export function ProductOverview() {
  return (
    <section id="overview" className={`wrap ${styles.overview}`} aria-label="Показатели и возможности Umap">
      <div className={styles.bento}>
        <article className={`${styles.tile} ${styles.fullMap}`}>
          <Image src="/assets/umap-map-wide.webp" width={1680} height={916} alt="Объёмные здания и улицы на карте Umap" />
          <div className={styles.mapCaption}>
            <Metric {...bentoMetrics.users} />
          </div>
        </article>
        <article className={`${styles.tile} ${styles.coverage}`}>
          <p>Города на карте</p>
          <h3>Астана<br />и Алматы</h3>
          <a href="#cities">Выбрать город <ArrowIcon /></a>
        </article>
        <article className={`${styles.tile} ${styles.landmark}`}>
          <Image src="/assets/umap-place-map.webp" width={960} height={798} alt="Организации на карте Umap" />
          <Metric {...bentoMetrics.organizations} />
        </article>
        <article className={`${styles.tile} ${styles.routeMetric}`}>
          <Metric {...bentoMetrics.routes} />
        </article>
        <article className={`${styles.tile} ${styles.garden}`}>
          <div>
            <h3>Город в 3D</h3>
            <p>Улицы и здания с высоты.</p>
          </div>
          <Image src="/assets/umap-botanical-garden.webp" width={920} height={420} alt="Аллеи и водоёмы Ботанического сада на карте Umap" />
        </article>
        <article className={`${styles.tile} ${styles.project}`}>
          <p>О проекте</p>
          <h3>Карта и справочник в одном месте</h3>
        </article>
      </div>
    </section>
  );
}

export function OrganizationSection() {
  return (
    <section id="organizations" className={styles.organizations} aria-labelledby="organizations-title">
      <div className="wrap">
        <div className={styles.organizationHeading}>
          <h2 id="organizations-title" className={styles.heading}>Umap для организаций</h2>
          <p>В оба сервиса можно войти через общий аккаунт Umap.</p>
        </div>
        <div className={styles.portals}>
          {portals.map(({ title, audience, action, href }) => (
            <a key={href} className={styles.portal} href={href}>
              <span className={styles.audience}>{audience}</span>
              <h3>{title}</h3>
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
            <span>Umap · Веб-карта</span>
            <a href="#top" aria-label="Наверх"><span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
