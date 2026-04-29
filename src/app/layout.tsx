import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Discala Porro — Ingénieur Aéronautique & Spatial",
  description: "Portfolio de Julian Discala Porro, étudiant en 4e année à l'IPSA, spécialisation Espace, Lanceurs et Satellites.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
