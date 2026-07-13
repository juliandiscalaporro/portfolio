import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, projectRef, config } from "@/data/portfolio";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">{children}</h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const ref = projectRef(project);
  const paragraphs = project.content.split("\n\n").filter(Boolean);
  const gallery = project.images ?? [];
  const videos = project.videos ?? [];
  const docs = project.documents ?? [];
  const hasMedia = Boolean(project.image) || gallery.length > 0 || videos.length > 0;

  let sectionNum = 1;

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
          <Link
            href="/#registre"
            className="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-accent"
          >
            ← Retour au registre
          </Link>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
            Dossier {ref}
          </span>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-24 pt-16">
        {/* Cartouche */}
        <header className="border-b-2 border-ink pb-10">
          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <span className="text-accent">{ref}</span>
            <span>{project.type}</span>
            {project.pinned && <span>◆ sélection</span>}
          </div>
          <h1 className="mt-5 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg italic leading-relaxed text-ink-soft">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <p className="mt-5 font-mono text-xs text-ink-faint">{project.tags.join(" · ")}</p>
          )}
          {(project.github || project.demo) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors hover:bg-ink hover:text-paper"
                >
                  Code source ↗
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-accent bg-accent px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-accent-deep hover:bg-accent-deep"
                >
                  Démonstration ↗
                </a>
              )}
            </div>
          )}
        </header>

        {/* Description */}
        <section className="mt-12">
          <SectionHead>{sectionNum++}. Description</SectionHead>
          <div className="mt-6 space-y-5 text-[17px] leading-[1.75]">
            {paragraphs.map((para, i) => (
              <p key={i} className="whitespace-pre-line">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Figures */}
        {hasMedia && (
          <section className="mt-14">
            <SectionHead>{sectionNum++}. Figures</SectionHead>
            <div className="mt-6">
              <Gallery
                images={gallery}
                videos={project.videos}
                cover={project.image}
                title={project.title}
              />
            </div>
          </section>
        )}

        {/* Documents annexes */}
        {docs.length > 0 && (
          <section className="mt-14">
            <SectionHead>{sectionNum++}. Documents annexes</SectionHead>
            <div className="mt-4">
              {docs.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline gap-4 border-b border-line py-4 transition-colors hover:border-ink"
                >
                  <span className="font-mono text-xs text-accent">PDF</span>
                  <span className="flex-1 font-serif text-lg underline-offset-4 decoration-accent group-hover:underline">
                    {doc.name}
                  </span>
                  <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-accent">
                    ouvrir ↗
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Colophon */}
      <footer className="border-t-2 border-ink">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-between gap-4 px-6 py-8 font-mono text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Julian Discala Porro.</p>
          <a href={`mailto:${config.email}`} className="transition-colors hover:text-accent">
            Écrire ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
