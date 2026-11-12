import { geoConicConformal, geoPath } from "d3-geo";
import type { Feature, MultiPolygon } from "geojson";
import kazakhstan from "./data/kazakhstan.json";
import { getCityMapUrl } from "./site-links";

const cities = [
  { id: "astana", name: "Астана", coordinates: [71.426, 51.111] },
  { id: "almaty", name: "Алматы", coordinates: [76.945, 43.238] },
] satisfies { id: string; name: string; coordinates: [number, number] }[];

const width = 1000;
const height = 547;
const country = kazakhstan as Feature<MultiPolygon>;
const projection = geoConicConformal()
  .rotate([-67, 0])
  .parallels([43, 53])
  .fitExtent([[32, 30], [width - 32, height - 30]], country);
const outline = geoPath(projection)(country);

export function CitySection() {
  return (
    <section className="cities wrap" id="cities" aria-labelledby="cities-title">
      <div className="cities-heading">
        <h2 id="cities-title">Города Казахстана</h2>
        <p>Выберите город на карте.</p>
      </div>
      <div className="country-map">
        <div className="country-map-canvas">
          <svg
            className="country-outline"
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="Контур Казахстана"
          >
            <path d={outline ?? undefined} vectorEffect="non-scaling-stroke" />
          </svg>
          {cities.map(({ id, name, coordinates }) => {
            const position = projection(coordinates);
            if (!position) return null;
            const [x, y] = position;

            return (
              <a
                key={id}
                className={`city-marker city-marker-${id}`}
                href={getCityMapUrl(id)}
                aria-label={`${name} — открыть карту`}
                style={{ left: `${x / width * 100}%`, top: `${y / height * 100}%` }}
              >
                <span className="city-marker-dot" aria-hidden="true" />
                <span className="city-marker-name">{name}</span>
              </a>
            );
          })}
        </div>
        <small className="country-map-credit">Контур · Natural Earth</small>
      </div>
    </section>
  );
}
