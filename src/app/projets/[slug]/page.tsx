import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import Gallery from "@/components/Gallery";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function ArrowLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="m12 19-7-7 7-7M19 12H5" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
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

  const paragraphs = project.content.split("\n\n").filter(Boolean);
  const gallery = project.images ?? [];
  const docs = project.documents ?? [];

  return (
    <div className="min-h-screen bg-[#03060f] text-slate-200">

      {/* Nébuleuse */}
      <div className="fixed top-0 left-0 w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(88,28,235,0.10)_0%,transparent_65%)] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.08)_0%,transparent_65%)] pointer-events-none" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-sky-900/30 bg-[#03060f]/70 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center">
          <Link
            href="/#projets"
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-sky-300 transition-colors"
          >
            <ArrowLeftIcon />
            Retour aux projets
          </Link>
        </div>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-28 pb-24 space-y-14">

        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-sky-800/50 bg-sky-950/40 text-sky-400">
              {project.type}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950/30 text-sky-400/70 border border-sky-900/40">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight gradient-text">{project.title}</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">{project.description}</p>

          {/* Liens */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 text-sm font-medium rounded-lg border border-slate-700/50 transition-colors"
              >
                <GithubIcon /> Code source
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]"
              >
                <ExternalLinkIcon /> Voir la démo
              </a>
            )}
          </div>
        </header>

        {/* Contenu texte */}
        <section className="space-y-5">
          <SectionTitle>Description</SectionTitle>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Galerie + cover + vidéos */}
        {(project.image || gallery.length > 0 || (project.videos ?? []).length > 0) && (
          <section className="space-y-5">
            <SectionTitle>Galerie</SectionTitle>
            <Gallery
              images={gallery}
              videos={project.videos}
              cover={project.image}
              title={project.title}
            />
          </section>
        )}

        {/* Documents */}
        {docs.length > 0 && (
          <section className="space-y-5">
            <SectionTitle>Documents</SectionTitle>
            <div className="space-y-3">
              {docs.map((doc) => (
                <a
                  key={doc.url}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border border-sky-900/30 bg-[#080f20]/60 hover:border-sky-700/50 hover:bg-[#0a1428]/60 transition-all group"
                >
                  <span className="text-sky-500 group-hover:text-sky-300 transition-colors">
                    <DownloadIcon />
                  </span>
                  <span className="text-sm text-slate-300 group-hover:text-white transition-colors flex-1">
                    {doc.name}
                  </span>
                  <span className="text-xs text-slate-600 group-hover:text-sky-400 transition-colors font-mono">
                    Ouvrir →
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-sky-900/60 to-transparent" />
    </div>
  );
}
