// Replace the sample values with verified figures before using them as product statistics.
export const bentoMetrics = {
  users: { value: 24000, label: "пользователей в месяц" },
  organizations: { value: 7500, label: "организаций на карте" },
  routes: { value: 48000, label: "маршрутов в месяц" },
};

export const portals = [
  {
    title: "Umap Business",
    audience: "Владельцам и представителям организаций",
    description: "Добавьте организацию на карту и следите за открытиями её карточки.",
    action: "Открыть кабинет",
    href: "https://business.umap.kz/business",
  },
  {
    title: "Umap Developers",
    audience: "Разработчикам",
    description: "Управляйте картами для своих проектов и отслеживайте запросы и лимиты API.",
    action: "Открыть портал",
    href: "https://developer.umap.kz/overview",
  },
] as const;
