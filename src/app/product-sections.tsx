import Image from "next/image";
import { ArrowIcon } from "./site-links";

export function FeatureGrid() {
  return (
    <section className="features wrap" id="features" aria-labelledby="features-title">
      <div className="features-heading">
        <h2 id="features-title">
          Всё нужное <br />
          на одной карте
        </h2>
        <p>От поиска места до выбора маршрута в одном интерфейсе.</p>
      </div>
      <div className="feature-grid">
        <article className="feature feature-find">
          <div className="feature-copy">
            <h3>Ищите места</h3>
            <p>Находите организации через поиск или выбирайте нужную категорию.</p>
          </div>
          <div className="catalogue-visual">
            <Image
              className="catalogue-panel"
              src="/assets/umap-catalogue.png"
              width={628}
              height={1393}
              alt="Каталог Umap со строкой поиска и категориями мест"
            />
          </div>
        </article>
        <article className="feature feature-place">
          <div className="feature-copy">
            <h3>Изучайте подробности</h3>
            <p>Открывайте карточки мест и организаций прямо на карте.</p>
          </div>
          <Image
            className="place-preview"
            src="/assets/umap-place-preview.webp"
            width={628}
            height={515}
            alt="Верхняя часть карточки организации с фотографией в Umap"
          />
        </article>
        <article className="feature feature-explore">
          <Image
            className="explore-map"
            src="/assets/umap-map-compact.webp"
            width={820}
            height={447}
            alt=""
          />
          <div className="feature-copy">
            <h3>Исследуйте город</h3>
            <p>Перемещайтесь по карте и находите то, что рядом.</p>
          </div>
        </article>
        <article className="feature feature-route">
          <div>
            <h3>Стройте маршруты</h3>
            <p>Выбирайте маршрут до нужного места.</p>
          </div>
          <a className="detail-link" href="#routes">
            Посмотреть пример маршрута <ArrowIcon direction="down" />
          </a>
        </article>
      </div>
    </section>
  );
}

function RouteScreenshot({ mode }: { mode: "car" | "bus" }) {
  const byCar = mode === "car";

  return (
    <picture className="route-screenshot">
      <source
        media="(max-width: 640px)"
        srcSet={`/assets/umap-route-${mode}-compact.webp`}
        width={900}
        height={byCar ? 744 : 914}
      />
      <Image
        src={`/assets/umap-route-${mode}.webp`}
        width={1800}
        height={byCar ? 981 : 984}
        alt={`Построенный в Umap маршрут от Хан Шатыра до Mega Silk Way ${byCar ? "на машине" : "на автобусе"}`}
      />
    </picture>
  );
}

export function ProductStories() {
  return (
    <section className="stories wrap" id="about" aria-label="О сервисе Umap">
      <article className="story story-search" aria-labelledby="search-title">
        <div className="story-visual search-visual">
          <Image
            src="/assets/umap-search-context.webp"
            width={1440}
            height={881}
            alt="Результаты поиска и карточка выбранной организации рядом с картой Umap"
          />
        </div>
        <div className="story-copy">
          <p className="section-label">Поиск и категории</p>
          <h2 id="search-title">Нужное место за&nbsp;пару действий</h2>
          <p>
            Если знаете название организации, введите его в поиск. Если ещё
            выбираете, начните с категории и посмотрите, что есть рядом.
          </p>
        </div>
      </article>
      <article className="story story-route" id="routes" aria-labelledby="routes-title">
        <div className="story-copy">
          <p className="section-label">Маршруты</p>
          <h2 id="routes-title">От карточки к&nbsp;маршруту</h2>
          <p>
            Откройте карточку организации, чтобы посмотреть адрес и подробности.
            Постройте путь и посмотрите варианты на карте.
          </p>
        </div>
        <figure className="route-figure">
          <RouteScreenshot mode="car" />
          <figcaption>Пример поездки на машине от Хан Шатыра до Mega Silk Way в Астане.</figcaption>
        </figure>
        <details className="route-alternative">
          <summary>Этот маршрут на автобусе</summary>
          <RouteScreenshot mode="bus" />
        </details>
      </article>
    </section>
  );
}
