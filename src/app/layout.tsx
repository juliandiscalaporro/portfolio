import type { Metadata } from "next";
import "@fontsource/spectral/400.css";
import "@fontsource/spectral/500.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "./globals.css";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Julian Discala Porro, élève ingénieur spatial et apprenti astronome",
  description: "Stage à l'Observatoire de la Côte d'Azur, prédiction et reconstruction d'orbites, projets en mécanique spatiale et astrophysique.",
  alternates: { languages: { fr: "/", en: "/en" } },
=======
  title: "Julian Discala Porro — Dossier de travaux",
  description:
    "Portfolio de Julian Discala Porro, étudiant-ingénieur à l'IPSA, spécialité Espace, Lanceurs et Satellites. Projets académiques, personnels et associatifs.",
>>>>>>> 13ca62f1ce2820d4b45d71250d3e238462c60011
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-blueprint text-chalk font-serif">{children}</body>
    </html>
  );
}
