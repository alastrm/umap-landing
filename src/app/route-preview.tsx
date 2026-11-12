"use client";

import Image from "next/image";
import { useState } from "react";

const routes = [
  { id: "car", label: "Машина", time: "≈ 11 мин", mode: "на машине" },
  { id: "bus", label: "Автобус", time: "≈ 44 мин", mode: "на автобусе" },
  { id: "walk", label: "Пешком", time: "≈ 1 ч 16 мин", mode: "пешком" },
] as const;

export function RoutePreview() {
  const [route, setRoute] = useState<(typeof routes)[number]>(routes[0]);

  return (
    <div className="route-scene">
      <div className="route-map" id="route-map">
        {routes.map((option) => (
          <Image
            key={option.id}
            className="route-map-image"
            src={`/assets/umap-route-${option.id}-scene.webp`}
            width={1200}
            height={900}
            alt={`Маршрут от Хан Шатыра до Mega Silk Way ${option.mode} в Астане`}
            aria-hidden={route.id !== option.id}
          />
        ))}
      </div>
      <div className="route-panel">
        <p className="route-example">Пример маршрута · Астана</p>
        <p className="route-panel-title">Хан Шатыр → Mega Silk Way</p>
        <div className="route-modes" role="group" aria-label="Способ передвижения">
          {routes.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={route.id === option.id}
              aria-controls="route-map"
              onClick={() => setRoute(option)}
            >
              <span>{option.label}</span>
              <strong>{option.time}</strong>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
