import Image from "next/image";

const defaultMapUrl = "https://umap.kz/";
const mapUrl = process.env.NEXT_PUBLIC_MAP_URL?.trim() || defaultMapUrl;

function buildMapUrl(parameters: Record<string, string>) {
  const url = new URL(mapUrl, defaultMapUrl);
  for (const parameter of ["bounds", "center", "zoom", "routeFrom", "routeTo", "routeMode"]) {
    url.searchParams.delete(parameter);
  }
  for (const [key, value] of Object.entries(parameters)) url.searchParams.set(key, value);

  return URL.canParse(mapUrl) || mapUrl.startsWith("//")
    ? url.href
    : `${url.pathname}${url.search}${url.hash}`;
}

export function getCityMapUrl(city: string) {
  return buildMapUrl({ city });
}

export function getExampleRouteUrl(mode: "car" | "transit" | "walk") {
  // Coordinates from Umap's share link for Хан Шатыр → Mega Silk Way.
  return buildMapUrl({
    city: "astana",
    routeFrom: "71.40386073470006,51.13250475",
    routeTo: "71.40728592973313,51.08908605",
    routeMode: mode,
  });
}

export function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18 18 6M7 6h11v11" />
    </svg>
  );
}

export function MapLink({ secondary = false, href = mapUrl, label = "Открыть карту" }: { secondary?: boolean; href?: string; label?: string }) {
  return (
    <a className={secondary ? "map-link map-link-secondary" : "map-link"} href={href}>
      {label}
      <ArrowIcon />
    </a>
  );
}

export function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Umap — к началу страницы">
      <Image src="/assets/umap-logo.svg" width={36} height={36} alt="" />
      <span>Umap</span>
    </a>
  );
}

export function SectionLinks() {
  return (
    <>
      <a href="#features">Возможности</a>
      <a href="#routes">Маршруты</a>
      <a href="#cities">Города</a>
      <a href="#organizations">Для организаций</a>
    </>
  );
}
