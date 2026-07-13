import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julian Discala Porro — Dossier de travaux",
  description:
    "Portfolio de Julian Discala Porro, étudiant-ingénieur à l'IPSA, spécialité Espace, Lanceurs et Satellites. Projets académiques, personnels et associatifs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-paper text-ink font-serif">{children}</body>
    </html>
  );
}
