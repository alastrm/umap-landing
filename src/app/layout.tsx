import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "Umap — карта города, поиск мест и маршруты";
const description =
  "Umap помогает искать места и организации, исследовать карту и строить маршруты.";

export const metadata: Metadata = {
  title,
  description,
  icons: { icon: "/assets/umap-logo.svg" },
  openGraph: {
    title,
    description,
    locale: "ru_RU",
    siteName: "Umap",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
