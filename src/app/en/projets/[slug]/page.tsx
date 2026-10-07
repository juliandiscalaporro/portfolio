import type { Metadata } from "next";
import ProjectPage from "@/components/ProjectPage";
import { projects, tr } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${tr(p.title, "en")}, Julian Discala Porro`, description: tr(p.description, "en") } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage lang="en" slug={slug} />;
}
