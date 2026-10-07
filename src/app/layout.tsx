import type { Metadata } from "next";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Discala Porro, élève ingénieur spatial et apprenti astronome",
  description: "Stage à l'Observatoire de la Côte d'Azur, prédiction et reconstruction d'orbites, projets en mécanique spatiale et astrophysique.",
  alternates: { languages: { fr: "/", en: "/en" } },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
