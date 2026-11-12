import { FeatureCards } from "./feature-cards";

export function FeatureGrid() {
  return (
    <section className="features wrap" id="features" aria-labelledby="features-title">
      <h2 id="features-title">От поиска до нужного места</h2>
      <FeatureCards />
    </section>
  );
}
