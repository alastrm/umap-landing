import { FeatureCards } from "./feature-cards";
import { RoutePreview } from "./route-preview";

export function FeatureGrid() {
  return (
    <section className="features wrap" id="features" aria-labelledby="features-title">
      <h2 id="features-title">От поиска до нужного места</h2>
      <FeatureCards />
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
