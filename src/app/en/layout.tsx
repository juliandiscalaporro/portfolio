import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Julian Discala Porro, space engineering student and astronomy enthusiast",
  description: "Internship at the Observatoire de la Côte d'Azur, orbit prediction and reconstruction, space mechanics and astrophysics projects.",
  alternates: { languages: { fr: "/", en: "/en" } },
  openGraph: {
    type: "website",
    url: "/en",
    siteName: "Julian Discala Porro",
    locale: "en_GB",
    title: "Julian Discala Porro, space engineering student and astronomy enthusiast",
    description: "Internship at the Observatoire de la Côte d'Azur, orbit prediction and reconstruction, space mechanics and astrophysics projects.",
    images: [{ url: "/images/og/og-en.jpg", width: 1200, height: 630, alt: "Julian Discala Porro, portfolio" }],
  },
  twitter: { card: "summary_large_image", images: ["/images/og/og-en.jpg"] },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: "document.documentElement.lang='en'" }} />
      {children}
    </>
  );
}
