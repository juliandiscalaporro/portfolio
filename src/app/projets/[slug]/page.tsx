import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { projects, tr } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  const title = `${tr(p.title, "fr")}, Julian Discala Porro`;
  const description = tr(p.description, "fr");
  const image = p.image ?? "/images/og/og-fr.jpg";
  return {
    title,
    description,
    openGraph: { type: "article", siteName: "Julian Discala Porro", locale: "fr_FR", title, description, images: [image] },
    twitter: { card: "summary_large_image", images: [image] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage lang="fr" slug={slug} />;
}
