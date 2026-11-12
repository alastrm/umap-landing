import Image from "next/image";
import { RoutePreview } from "./route-preview";

export function FeatureGrid() {
  return (
    <section className="features wrap" id="features" aria-labelledby="features-title" data-reveal>
      <h2 id="features-title">От поиска до нужного места</h2>
      <div className="feature-grid">
        <article className="feature feature-find">
          <div className="feature-copy">
            <h3>Поиск по городу</h3>
            <p>Введите название или выберите категорию, например «Кофейни».</p>
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
            <h3>Информация о месте</h3>
            <p>В карточке видны адрес и часы работы, а на карте — где находится организация.</p>
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
      <div className="route-layout wrap" id="routes" data-reveal>
        <div className="route-heading">
          <h2 id="routes-title">Сравните варианты маршрута</h2>
          <p className="route-description">
            Укажите начальную и конечную точки. Посмотрите время в пути на машине, автобусе и пешком.
          </p>
        </div>
        <RoutePreview />
      </div>
    </section>
  );
}
