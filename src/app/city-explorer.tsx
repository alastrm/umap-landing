"use client";

import Image from "next/image";
import { useState, type CSSProperties, type ReactNode } from "react";
import { MapLink } from "./site-links";
import styles from "./editorial.module.css";

type City = {
  id: string;
  name: string;
  caption: string;
  href: string;
  x: string;
  y: string;
};

export function CityExplorer({ cities, children }: { cities: City[]; children: ReactNode }) {
  const [active, setActive] = useState(cities[0]);
  const cameraOrigins = Object.fromEntries(
    cities.flatMap(({ id, x, y }) => [[`--${id}-x`, x], [`--${id}-y`, y]]),
  ) as CSSProperties;

  return (
    <div className={styles.cityLayout}>
      <div className={`country-map-canvas ${styles.cityMap}`} style={cameraOrigins}>
        <div className="country-map-camera">{children}</div>
        {cities.map((city) => (
          <div key={city.id} className="city-marker-track" style={{ "--city-x": city.x, "--city-y": city.y } as CSSProperties}>
            <button
              type="button"
              className={`city-marker city-marker-${city.id}`}
              aria-pressed={active.id === city.id}
              aria-controls="city-preview"
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(city); }}
              onFocus={() => setActive(city)}
              onClick={() => setActive(city)}
            >
              <span className="city-marker-dot" aria-hidden="true" />
              <span className="city-marker-name">{city.name}</span>
            </button>
          </div>
        ))}
      </div>
      <aside className={styles.cityPanel} id="city-preview" aria-label="Выбранный город">
        <div className={styles.cityPanelHeading} aria-live="polite">
          <h3>{active.name}</h3>
          <p>{active.caption}</p>
        </div>
        <div className={styles.cityPicture}>
          {cities.map((city) => (
            <Image
              key={city.id}
              src={`/assets/umap-city-${city.id}.webp`}
              width={1020}
              height={650}
              alt={`Карта Umap: ${city.caption}`}
              aria-hidden={city.id !== active.id}
              data-active={city.id === active.id}
            />
          ))}
        </div>
        <MapLink href={active.href} label="Открыть город в Umap" secondary />
      </aside>
      <small className={`country-map-credit ${styles.cityCredit}`}>
        Геоданные · <a href="https://data.humdata.org/dataset/cod-ab-kaz">UNHCR / HDX</a>
        {" · "}<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a>
        {" · "}<a href="https://www.naturalearthdata.com/">Natural Earth</a>
      </small>
    </div>
  );
}
