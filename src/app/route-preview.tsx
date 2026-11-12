"use client";

import Image from "next/image";

const routes = [
  { id: "car", asset: "car", label: "Машина", time: "≈ 11 мин", mode: "на машине" },
  { id: "transit", asset: "bus", label: "Автобус", time: "≈ 44 мин", mode: "на автобусе" },
  { id: "walk", asset: "walk", label: "Пешком", time: "≈ 1 ч 16 мин", mode: "пешком" },
] as const;

export type RouteMode = (typeof routes)[number]["id"];

export function RoutePreview({ mode, onChange }: { mode: RouteMode; onChange: (mode: RouteMode) => void }) {
  return (
    <div className="route-scene">
      <div className="route-map" id="route-map">
        {routes.map((option) => (
          <Image
            key={option.id}
            className="route-map-image"
            src={`/assets/umap-route-${option.asset}-scene.webp`}
            width={1200}
            height={900}
            alt={`Маршрут от Хан Шатыра до Mega Silk Way ${option.mode} в Астане`}
            aria-hidden={mode !== option.id}
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
              aria-pressed={mode === option.id}
              aria-controls="route-map"
              onClick={() => onChange(option.id)}
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
