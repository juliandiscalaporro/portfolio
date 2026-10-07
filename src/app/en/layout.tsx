import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julian Discala Porro, space engineering student and astronomy enthusiast",
  description: "Internship at the Observatoire de la Côte d'Azur, orbit prediction and reconstruction, space mechanics and astrophysics projects.",
  alternates: { languages: { fr: "/", en: "/en" } },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      {children}
    </>
  );
}
