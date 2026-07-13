import Image from "next/image";
import Link from "next/link";
import {
  config,
  projects,
  skills,
  education,
  projectGroup,
  projectRef,
  type Project,
} from "@/data/portfolio";

/* Vignette de repli pour les dossiers sans image. */
function OrbitGlyph() {
  return (
    <svg viewBox="0 0 200 112" className="w-32 h-auto" aria-hidden="true">
      <ellipse cx="100" cy="56" rx="72" ry="24" fill="none" stroke="#a39d8f" strokeWidth="1" />
      <g transform="rotate(-28 100 56)">
        <ellipse cx="100" cy="56" rx="30" ry="30" fill="none" stroke="#c14d17" strokeWidth="1" />
      </g>
      <circle cx="100" cy="56" r="2.5" fill="#6f6a5f" />
      <circle cx="172" cy="56" r="2" fill="#c14d17" />
    </svg>
  );
}

function SectionTitle({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 border-b-2 border-ink pb-4 mb-10">
      <span className="font-mono text-2xl font-medium text-accent">{num}</span>
      <h2 className="font-serif text-4xl font-medium tracking-tight">{title}</h2>
      {note && (
        <span className="ml-auto border border-line bg-card px-2 py-1 font-mono text-xs uppercase tracking-widest text-ink-soft">
          {note}
        </span>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projets/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col border border-ink/25 bg-card transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-ink group-hover:shadow-[6px_6px_0_#c14d17]">
        <div className="relative aspect-[16/9] border-b border-line bg-paper overflow-hidden">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <OrbitGlyph />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-baseline justify-between font-mono text-xs">
            <span className="text-accent">{projectRef(project)}</span>
            <span className="uppercase tracking-widest text-ink-soft">{project.type}</span>
          </div>
          <h3 className="mt-2 font-serif text-xl leading-snug underline-offset-4 decoration-accent group-hover:underline">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft line-clamp-3">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <p className="mt-3 font-mono text-xs text-ink-faint">{project.tags.join(" · ")}</p>
          )}
        </div>
      </article>
    </Link>
  );
}

export default function Home() {
  const pinned = projects.filter((p) => p.pinned);

  const registre: { label: string; items: Project[] }[] = [
    { label: "Deuxième année — cycle ingénieur", items: projects.filter((p) => projectGroup(p) === "2A") },
    { label: "Première année — cycle ingénieur", items: projects.filter((p) => projectGroup(p) === "1A") },
    { label: "Projets personnels", items: projects.filter((p) => projectGroup(p) === "P") },
    { label: "Associatif — fusée expérimentale", items: projects.filter((p) => projectGroup(p) === "A") },
  ];

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
            J. Discala Porro
          </span>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-widest text-ink-soft">
            {[
              { label: "Travaux", href: "#travaux" },
              { label: "Registre", href: "#registre" },
              { label: "Compétences", href: "#competences" },
              { label: "Parcours", href: "#parcours" },
            ].map(({ label, href }) => (
              <a key={href} href={href} className="transition-colors hover:text-accent">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6">
        {/* Cartouche d'en-tête */}
        <header className="pt-14">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border-y border-line py-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
            <span>Dossier de travaux — rév. juillet 2026</span>
            <span>Ivry-sur-Seine · 48.81° N, 2.39° E</span>
          </div>

          <div className="mt-14 flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
            <div className="flex-1">
              <h1 className="font-serif text-6xl font-medium leading-[1.02] tracking-tight md:text-7xl">
                Julian
                <br />
                <span className="italic text-accent">Discala Porro</span>
              </h1>
              <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {config.school.split(",")[0]} — {config.specialty}
              </p>
              <p className="mt-5 max-w-xl text-xl italic leading-relaxed text-ink-soft">
                {config.title}.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-relaxed">{config.tagline}</p>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm">
                <a
                  href={`mailto:${config.email}`}
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {config.email}
                </a>
                <a
                  href={config.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  GitHub ↗
                </a>
                <a
                  href={config.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <figure className="w-56 shrink-0 self-center md:self-start md:mt-2">
              <div className="rotate-2 border border-ink/25 bg-card p-2 pb-3 shadow-[5px_6px_0_rgba(34,31,26,0.12)] transition-transform duration-300 hover:rotate-0">
                <div className="relative aspect-[4/5]">
                  <Image src={config.photo} alt={config.name} fill className="object-cover" priority />
                </div>
                <p className="mt-2 px-1 font-mono text-xs text-ink-soft">Fig. 1 — L’auteur.</p>
              </div>
            </figure>
          </div>

        </header>

        {/* I. Travaux sélectionnés */}
        <section id="travaux" className="mt-24 scroll-mt-20">
          <SectionTitle num="I." title="Travaux sélectionnés" note={`${pinned.length} dossiers`} />
          <div className="grid gap-6 sm:grid-cols-2">
            {pinned.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* II. Registre complet */}
        <section id="registre" className="mt-24 scroll-mt-20">
          <SectionTitle num="II." title="Registre complet" note={`${projects.length} dossiers`} />
          {registre.map(
            ({ label, items }) =>
              items.length > 0 && (
                <div key={label} className="mb-12">
                  <div className="flex items-baseline justify-between border-b border-line pb-2">
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                      {label}
                    </h3>
                    <span className="font-mono text-xs text-ink-faint">
                      {items.length} {items.length > 1 ? "dossiers" : "dossier"}
                    </span>
                  </div>
                  <ul>
                    {items.map((project) => (
                      <li key={project.slug} className="border-b border-line">
                        <Link
                          href={`/projets/${project.slug}`}
                          className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-3 px-2 py-3.5 transition-colors hover:bg-card sm:grid-cols-[3.5rem_1fr_auto]"
                        >
                          <span className="font-mono text-xs text-accent">
                            {projectRef(project)}
                          </span>
                          <span>
                            <span className="font-serif text-lg leading-snug underline-offset-4 decoration-accent group-hover:underline">
                              {project.title}
                            </span>
                            {project.pinned && (
                              <span className="ml-2 text-sm text-accent" title="Travaux sélectionnés">
                                ◆
                              </span>
                            )}
                          </span>
                          <span className="hidden font-mono text-xs text-ink-faint transition-colors group-hover:text-accent sm:inline">
                            consulter →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
          <p className="font-mono text-xs text-ink-faint">
            <span className="text-accent">◆</span> — figure dans les travaux sélectionnés.
          </p>
        </section>

        {/* III. Compétences */}
        <section id="competences" className="mt-24 scroll-mt-20">
          <SectionTitle num="III." title="Compétences" />
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="border-b border-ink pb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
                  {skill.category}
                </p>
                <ul className="mt-1">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-dotted border-line py-2 text-[15px] last:border-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* IV. Parcours */}
        <section id="parcours" className="mt-24 scroll-mt-20">
          <SectionTitle num="IV." title="Parcours" />
          <div>
            {education.map((edu) => (
              <div
                key={edu.school}
                className="grid gap-2 border-b border-line py-6 last:border-0 md:grid-cols-[10rem_1fr] md:gap-8"
              >
                <p className="pt-1 font-mono text-xs text-accent">{edu.period}</p>
                <div>
                  <p className="font-serif text-xl">{edu.school}</p>
                  <p className="mt-1 text-ink-soft">{edu.degree}</p>
                  {edu.description && (
                    <p className="mt-1 text-[15px] text-ink-faint">{edu.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Colophon */}
      <footer className="mt-28 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-6 py-12">
          <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
            Fin du dossier — merci de votre lecture.
          </p>
          <div className="mt-10 flex flex-col justify-between gap-6 border-t border-paper/20 pt-6 font-mono text-xs text-paper/60 md:flex-row">
            <div>
              <p>© {new Date().getFullYear()} Julian Discala Porro — Ivry-sur-Seine.</p>
              <p className="mt-1 text-paper/40">
                Mis en page à la main, sans template. Composé en Newsreader &amp; IBM Plex Mono.
              </p>
            </div>
            <div className="flex gap-6">
              <a
                href={`mailto:${config.email}`}
                className="text-paper/80 transition-colors hover:text-[#ff7a45]"
              >
                Écrire ↗
              </a>
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 transition-colors hover:text-[#ff7a45]"
              >
                GitHub ↗
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 transition-colors hover:text-[#ff7a45]"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
