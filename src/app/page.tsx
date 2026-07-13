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

const CONTAINER = "mx-auto w-full max-w-[90rem] px-6 md:px-12";

/* Vignette de repli pour les dossiers sans image — tracé monoligne façon plan. */
function OrbitGlyph() {
  return (
    <svg viewBox="0 0 200 112" className="w-32 h-auto" aria-hidden="true">
      <ellipse cx="100" cy="56" rx="72" ry="24" fill="none" stroke="#64789a" strokeWidth="1" />
      <g transform="rotate(-28 100 56)">
        <ellipse cx="100" cy="56" rx="30" ry="30" fill="none" stroke="#f2a23c" strokeWidth="1" />
      </g>
      <circle cx="100" cy="56" r="2.5" fill="#9db0c9" />
      <circle cx="172" cy="56" r="2" fill="#f2a23c" />
    </svg>
  );
}

/* Repères de coin façon marques de calage d'un tirage de plan. */
function CornerMarks() {
  const base = "absolute h-3 w-3 border-accent";
  return (
    <>
      <span className={`${base} -left-1.5 -top-1.5 border-l-2 border-t-2`} aria-hidden="true" />
      <span className={`${base} -right-1.5 -top-1.5 border-r-2 border-t-2`} aria-hidden="true" />
      <span className={`${base} -bottom-1.5 -left-1.5 border-b-2 border-l-2`} aria-hidden="true" />
      <span className={`${base} -bottom-1.5 -right-1.5 border-b-2 border-r-2`} aria-hidden="true" />
    </>
  );
}

function SectionTitle({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 border-b-2 border-chalk/60 pb-4 mb-10">
      <span className="font-mono text-2xl font-medium text-accent">{num}</span>
      <h2 className="font-serif text-4xl font-medium tracking-tight">{title}</h2>
      {note && (
        <span className="ml-auto border border-line bg-blueprint-panel px-2 py-1 font-mono text-xs uppercase tracking-widest text-chalk-soft">
          {note}
        </span>
      )}
    </div>
  );
}

/* Planche photographique pleine largeur, légendée façon atlas. */
function PlateBand({
  src,
  alt,
  caption,
  position = "center",
}: {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}) {
  return (
    <figure className="relative mt-28 h-[45vh] min-h-[340px] w-full overflow-hidden border-y border-line">
      <Image src={src} alt={alt} fill sizes="100vw" className="object-cover" style={{ objectPosition: position }} />
      <div className="absolute inset-0 bg-blueprint/25" aria-hidden="true" />
      <figcaption className="absolute bottom-4 right-4 max-w-[85%] border border-line bg-blueprint/85 px-3 py-1.5 font-mono text-[11px] tracking-wide text-chalk-soft backdrop-blur-sm">
        {caption}
      </figcaption>
    </figure>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projets/${project.slug}`} className="group block h-full">
      <article className="flex h-full flex-col border border-line bg-blueprint-panel transition-all duration-200 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:border-chalk/70 group-hover:shadow-[6px_6px_0_rgba(242,162,60,0.4)]">
        <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-blueprint">
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
            <span className="uppercase tracking-widest text-chalk-faint">{project.type}</span>
          </div>
          <h3 className="mt-2 font-serif text-xl leading-snug underline-offset-4 decoration-accent group-hover:underline">
            {project.title}
          </h3>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-chalk-soft line-clamp-3">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <p className="mt-3 font-mono text-xs text-chalk-faint">{project.tags.join(" · ")}</p>
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
      <nav className="sticky top-0 z-50 border-b border-line bg-blueprint/95 backdrop-blur-sm">
        <div className="flex h-14 items-center justify-between px-6 md:px-10">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em]">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true" />
            J. Discala Porro
          </span>
          <div className="flex gap-5 font-mono text-xs uppercase tracking-widest text-chalk-soft">
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

      {/* Hero — Saturne à contre-jour */}
      <header className="relative flex min-h-[calc(100vh-3.5rem)] flex-col overflow-hidden">
        <Image
          src="/images/space/saturn.jpg"
          alt="Saturne à contre-jour photographiée par la sonde Cassini"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-blueprint via-blueprint/55 to-blueprint/30"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-blueprint/70 via-blueprint/25 to-transparent"
          aria-hidden="true"
        />

        <div className={`relative z-10 flex flex-1 flex-col justify-center py-16 ${CONTAINER}`}>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="border-y border-line/70 py-2 font-mono text-xs uppercase tracking-widest text-chalk-soft">
                Dossier de travaux — rév. juillet 2026
              </p>
              <h1 className="mt-10 font-serif text-6xl font-medium leading-[1.02] tracking-tight md:text-8xl">
                Julian
                <br />
                <span className="italic text-accent">Discala Porro</span>
              </h1>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-chalk-soft">
                {config.school.split(",")[0]} — {config.specialty}
              </p>
              <p className="mt-5 max-w-xl text-xl italic leading-relaxed text-chalk-soft">
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

            <figure className="w-56 shrink-0 self-center lg:w-64 lg:self-center">
              <div className="relative border border-chalk/30 bg-blueprint-panel p-2 pb-3">
                <CornerMarks />
                <div className="relative aspect-[4/5]">
                  <Image src={config.photo} alt={config.name} fill className="object-cover" priority />
                </div>
                <p className="mt-2 px-1 font-mono text-xs text-chalk-soft">Fig. 1 — L’auteur.</p>
              </div>
            </figure>
          </div>
        </div>

        <div className={`relative z-10 pb-5 ${CONTAINER}`}>
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-wide text-chalk-soft">
            <span>Planche I — Saturne à contre-jour, sonde Cassini · NASA/JPL-Caltech/SSI, 2013.</span>
            <a href="#travaux" className="transition-colors hover:text-accent">
              ↓ dérouler le dossier
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* I. Travaux sélectionnés */}
        <section id="travaux" className={`mt-24 scroll-mt-20 ${CONTAINER}`}>
          <SectionTitle num="I." title="Travaux sélectionnés" note={`${pinned.length} dossiers`} />
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {pinned.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* Planche II — Andromède */}
        <PlateBand
          src="/images/space/andromeda.jpg"
          alt="La galaxie d'Andromède observée en ultraviolet par le télescope GALEX"
          caption="Planche II — M31, la galaxie d'Andromède en ultraviolet · NASA/JPL-Caltech, GALEX."
        />

        {/* II. Registre complet */}
        <section id="registre" className={`mt-24 scroll-mt-20 ${CONTAINER}`}>
          <SectionTitle num="II." title="Registre complet" note={`${projects.length} dossiers`} />
          <div className="grid gap-x-16 lg:grid-cols-2">
            {registre.map(
              ({ label, items }) =>
                items.length > 0 && (
                  <div key={label} className="mb-12">
                    <div className="flex items-baseline justify-between border-b border-line pb-2">
                      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-chalk-soft">
                        {label}
                      </h3>
                      <span className="font-mono text-xs text-chalk-faint">
                        {items.length} {items.length > 1 ? "dossiers" : "dossier"}
                      </span>
                    </div>
                    <ul>
                      {items.map((project) => (
                        <li key={project.slug} className="border-b border-line">
                          <Link
                            href={`/projets/${project.slug}`}
                            className="group grid grid-cols-[3.5rem_1fr] items-baseline gap-3 px-2 py-3.5 transition-colors hover:bg-blueprint-panel sm:grid-cols-[3.5rem_1fr_auto]"
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
                            <span className="hidden font-mono text-xs text-chalk-faint transition-colors group-hover:text-accent sm:inline">
                              consulter →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
            )}
          </div>
          <p className="font-mono text-xs text-chalk-faint">
            <span className="text-accent">◆</span> — figure dans les travaux sélectionnés.
          </p>
        </section>

        {/* Planche III — Jupiter */}
        <PlateBand
          src="/images/space/jupiter.jpg"
          alt="La Grande Tache rouge de Jupiter photographiée par la sonde Juno"
          caption="Planche III — La Grande Tache rouge de Jupiter, sonde Juno · NASA/JPL-Caltech/SwRI/MSSS."
          position="center 35%"
        />

        {/* III. Compétences */}
        <section id="competences" className={`mt-24 scroll-mt-20 ${CONTAINER}`}>
          <SectionTitle num="III." title="Compétences" />
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.category}>
                <p className="border-b border-chalk/60 pb-2 font-mono text-xs uppercase tracking-widest text-chalk-soft">
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
        <section id="parcours" className={`mt-24 scroll-mt-20 ${CONTAINER}`}>
          <SectionTitle num="IV." title="Parcours" />
          <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-start">
            <div>
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="grid gap-2 border-b border-line py-6 last:border-0 md:grid-cols-[10rem_1fr] md:gap-8"
                >
                  <p className="pt-1 font-mono text-xs text-accent">{edu.period}</p>
                  <div>
                    <p className="font-serif text-xl">{edu.school}</p>
                    <p className="mt-1 text-chalk-soft">{edu.degree}</p>
                    {edu.description && (
                      <p className="mt-1 text-[15px] text-chalk-faint">{edu.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <figure className="justify-self-center lg:justify-self-end">
              <div className="relative border border-chalk/30 bg-blueprint-panel p-2 pb-3">
                <CornerMarks />
                <div className="relative aspect-square w-64 lg:w-80">
                  <Image
                    src="/images/space/earthrise.jpg"
                    alt="Lever de Terre photographié depuis l'orbite lunaire par Apollo 8"
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <p className="mt-2 max-w-[19rem] px-1 font-mono text-xs leading-relaxed text-chalk-soft">
                  Planche IV — Lever de Terre, Apollo 8, 24 déc. 1968 · NASA.
                </p>
              </div>
            </figure>
          </div>
        </section>
      </main>

      {/* Cartouche de plan — pied de page */}
      <footer className="mt-28 border-t border-line bg-blueprint-deep">
        <div className={`py-12 ${CONTAINER}`}>
          <div className="border border-chalk/40 font-mono text-xs">
            <div className="grid sm:grid-cols-[2fr_1fr_1fr]">
              <div className="border-b border-chalk/40 p-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Projet</p>
                <p className="mt-1.5 text-chalk">Dossier de travaux — portfolio</p>
              </div>
              <div className="border-b border-chalk/40 p-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Dessiné par</p>
                <p className="mt-1.5 text-chalk">J. Discala Porro</p>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Révision</p>
                <p className="mt-1.5 text-chalk">Juil. 2026</p>
              </div>
            </div>
            <div className="grid border-t border-chalk/40 sm:grid-cols-[2fr_1fr_1fr]">
              <div className="border-b border-chalk/40 p-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Contact</p>
                <a
                  href={`mailto:${config.email}`}
                  className="mt-1.5 inline-block text-chalk underline decoration-chalk/30 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                >
                  {config.email}
                </a>
              </div>
              <div className="border-b border-chalk/40 p-4 sm:border-b-0 sm:border-r">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Échelle</p>
                <p className="mt-1.5 text-chalk">1:1</p>
              </div>
              <div className="p-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-chalk-faint">Feuille</p>
                <p className="mt-1.5 text-chalk">1 / 1</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 font-mono text-xs text-chalk-faint md:flex-row">
            <p>
              © {new Date().getFullYear()} Julian Discala Porro — mis en page à la main, sans
              template. Planches I–IV : NASA, domaine public.
            </p>
            <div className="flex gap-6">
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
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
