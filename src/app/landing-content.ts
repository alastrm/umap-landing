// Replace the sample values with verified figures before removing the demo note.
export const bentoMetrics = {
  isDemo: true,
  users: { value: 24000, label: "пользователей в месяц" },
  organizations: { value: 7500, label: "организаций на карте" },
  routes: { value: 48000, label: "маршрутов в месяц" },
};

export const portals = [
  {
    title: "Umap Business",
    audience: "Бизнесу",
    action: "Открыть кабинет",
    href: "https://business.umap.kz/business",
  },
  {
    title: "Umap Developers",
    audience: "Разработчикам",
    action: "Открыть портал",
    href: "https://developer.umap.kz/overview",
  },
] as const;
