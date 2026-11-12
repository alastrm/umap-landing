import Image from "next/image";
import { RoutePreview } from "./route-preview";

export function FeatureGrid() {
  return (
    <section className="features wrap" id="features" aria-labelledby="features-title">
      <h2 id="features-title">Найдите нужное место</h2>
      <div className="feature-grid">
        <article className="feature feature-find">
          <div className="feature-copy">
            <h3>Поиск и категории</h3>
            <p>Введите название места или выберите категорию, чтобы посмотреть, что есть рядом.</p>
          </div>
          <div className="catalogue-visual">
            <Image
              src="/assets/umap-catalogue-focus.webp"
              width={628}
              height={590}
              alt="Строка поиска и категории мест в каталоге Umap"
            />
          </div>
        </article>
        <article className="feature feature-place">
          <div className="feature-copy">
            <h3>Подробности о месте</h3>
            <p>Откройте карточку организации, чтобы узнать её адрес и часы работы.</p>
          </div>
          <Image
            className="place-details"
            src="/assets/umap-place-details.webp"
            width={626}
            height={305}
            alt="Адрес и часы работы в карточке организации Umap"
          />
        </article>
      </div>
    </section>
  );
}

export function RouteShowcase() {
  return (
    <section className="route-showcase" id="about" aria-labelledby="routes-title">
      <div className="route-layout wrap" id="routes">
        <div className="route-heading">
          <p className="section-label">Маршруты</p>
          <h2 id="routes-title">Выберите, как добраться</h2>
          <p className="route-description">
            Задайте точки и сравните время в пути на машине, автобусе или пешком.
          </p>
        </div>
        <RoutePreview />
      </div>
    </section>
  );
}
