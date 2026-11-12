import Image from "next/image";

const defaultMapUrl = "https://umap.kz/";
const mapUrl = process.env.NEXT_PUBLIC_MAP_URL?.trim() || defaultMapUrl;

export function getCityMapUrl(city: string) {
  const url = new URL(mapUrl, defaultMapUrl);
  for (const parameter of ["bounds", "center", "zoom"]) {
    url.searchParams.delete(parameter);
  }
  url.searchParams.set("city", city);

  return URL.canParse(mapUrl) || mapUrl.startsWith("//")
    ? url.href
    : `${url.pathname}${url.search}${url.hash}`;
}

export function ArrowIcon({ direction = "external" }: { direction?: "external" | "down" }) {
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
      <path d={direction === "down" ? "M12 5v14m-5-5 5 5 5-5" : "M6 18 18 6M7 6h11v11"} />
    </svg>
  );
}

export function MapLink({ compact = false }: { compact?: boolean }) {
  return (
    <a className={compact ? "map-link map-link-compact" : "map-link"} href={mapUrl}>
      Открыть карту
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
      <a href="#about">О сервисе</a>
      <a href="#cities">Города</a>
    </>
  );
}
