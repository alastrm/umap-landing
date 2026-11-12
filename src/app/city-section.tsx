import { geoConicConformal, geoPath } from "d3-geo";
import type { Feature, MultiLineString, MultiPolygon, Position } from "geojson";
import detail from "./data/kazakhstan-detail.json";
import kazakhstan from "./data/kazakhstan.json";
import { ArrowIcon, getCityMapUrl } from "./site-links";

const cities = [
  { id: "astana", name: "Астана", coordinates: [71.426, 51.111] },
  { id: "almaty", name: "Алматы", coordinates: [76.945, 43.238] },
] satisfies { id: string; name: string; coordinates: [number, number] }[];

const width = 1120;
const height = 555;
const country = kazakhstan as Feature<MultiPolygon>;
const projection = geoConicConformal()
  .rotate([-67, 0])
  .parallels([43, 53])
  .fitExtent([[72, 29], [width - 72, height - 40]], country);
const path = geoPath(projection).digits(1);
const outline = path(country) ?? undefined;
const context = path(detail.context as MultiLineString) ?? undefined;
const regions = path(detail.regions as MultiLineString) ?? undefined;
const water = path(detail.water as MultiPolygon) ?? undefined;

const mapLabels: { name: string; coordinates: Position; layer: "water" | "context" }[] = [
  { name: "Россия", coordinates: [62.6, 55.15], layer: "context" },
  { name: "Китай", coordinates: [88.1, 44.4], layer: "context" },
  { name: "Узбекистан", coordinates: [62, 40.7], layer: "context" },
  { name: "Каспийское море", coordinates: [49.1, 43.2], layer: "water" },
  { name: "Балхаш", coordinates: [74.1, 46.4], layer: "water" },
];

const geographicLabels = [
  ...detail.regionLabels.map((label) => ({ ...label, layer: "region" })),
  ...mapLabels,
];

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
            aria-label="Карта Казахстана с границами областей и крупными водоёмами"
          >
            <defs>
              <path id="kazakhstan-boundary" d={outline} />
              <clipPath id="kazakhstan-clip">
                <use href="#kazakhstan-boundary" />
              </clipPath>
            </defs>
            <path className="map-context" d={context} vectorEffect="non-scaling-stroke" />
            <use className="map-land" href="#kazakhstan-boundary" />
            <path className="map-regions" d={regions} clipPath="url(#kazakhstan-clip)" vectorEffect="non-scaling-stroke" />
            <path className="map-water" d={water} vectorEffect="non-scaling-stroke" />
            <use className="map-border" href="#kazakhstan-boundary" vectorEffect="non-scaling-stroke" />
            <g className="map-labels" aria-hidden="true">
              {geographicLabels.map(({ name, coordinates, layer }) => {
                const position = projection([coordinates[0], coordinates[1]]);
                if (!position) return null;
                const [x, y] = position;

                return <text key={name} className={`map-label-${layer}`} x={x} y={y}>{name}</text>;
              })}
            </g>
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
                <span className="city-marker-name">{name}<ArrowIcon /></span>
              </a>
            );
          })}
        </div>
        <small className="country-map-credit">
          Геоданные · <a href="https://data.humdata.org/dataset/cod-ab-kaz">UNHCR / HDX</a>
          {" · "}
          <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>
          {" · "}
          <a href="https://www.naturalearthdata.com/">Natural Earth</a>
        </small>
      </div>
    </section>
  );
}
