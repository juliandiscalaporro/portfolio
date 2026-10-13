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
  metadataBase: new URL("https://juliandiscalaporro.vercel.app"),
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Julian Discala Porro",
    locale: "fr_FR",
    title: "Julian Discala Porro, élève ingénieur spatial et apprenti astronome",
    description: "Stage à l'Observatoire de la Côte d'Azur, prédiction et reconstruction d'orbites, projets en mécanique spatiale et astrophysique.",
    images: [{ url: "/images/og/og-fr.jpg", width: 1200, height: 630, alt: "Julian Discala Porro, portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-fr.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
