import Image from "next/image";
import StarCanvas from "@/components/StarCanvas";
import OrbitRing from "@/components/OrbitRing";
import { config, projects, skills, education } from "@/data/portfolio";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m3.5 11.5 1.41 1.41M7.5 8.5l1.41 1.41M12 4.5c0 0 4-1 8 3s3 8 3 8" />
      <path d="M12 4.5c0 0-1 4-3 8s-8 3-8 3" />
    </svg>
  );
}

function SatelliteIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
      <path d="M13 7 9 3 3 9l4 4" />
      <path d="m13 7 4 4-6 6-4-4" />
      <path d="m14 6 3-3" />
      <path d="m18 10 3-3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M17 14v-1M17 20v1M14 17h-1M20 17h1" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#03060f] text-slate-200 relative">

      {/* Fond étoilé */}
      <StarCanvas />

      {/* Nébuleuses */}
      <div className="nebula-1" />
      <div className="nebula-2" />
      <div className="nebula-3" />

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-sky-900/30 bg-[#03060f]/70 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm text-sky-400 flex items-center gap-1.5">
            <RocketIcon />
            julian<span className="text-slate-500">.</span>space
          </span>
          <div className="flex gap-6">
            {[
              { label: "Projets", href: "#projets" },
              { label: "Compétences", href: "#competences" },
              { label: "Parcours", href: "#parcours" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm text-slate-400 hover:text-sky-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-36 pb-24 space-y-36">

        {/* Hero */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">
          <div className="flex-1 space-y-7">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-800/50 bg-sky-950/40 text-sky-400 text-xs font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              {config.specialty}
            </div>

            <div>
              <h1 className="text-5xl font-bold tracking-tight leading-tight">
                <span className="gradient-text">{config.name}</span>
              </h1>
              <p className="mt-3 text-base text-slate-400 leading-relaxed max-w-md">
                {config.title}
              </p>
            </div>

            <p className="text-slate-300 max-w-md leading-relaxed">
              {config.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={`mailto:${config.email}`}
                className="flex items-center gap-2 px-5 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium rounded-lg transition-all hover:shadow-[0_0_20px_rgba(56,189,248,0.4)]"
              >
                <MailIcon />
                Me contacter
              </a>
              <a
                href={config.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 text-sm font-medium rounded-lg transition-colors border border-slate-700/50 backdrop-blur-sm"
              >
                <GithubIcon />
                GitHub
              </a>
              <a
                href={config.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-slate-800/60 hover:bg-slate-700/60 text-slate-200 text-sm font-medium rounded-lg transition-colors border border-slate-700/50 backdrop-blur-sm"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Photo avec orbite animée */}
          <div className="shrink-0 relative" style={{ width: 240, height: 240 }}>
            <OrbitRing size={240} />
            <div className="absolute inset-5">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-violet-500 to-pink-500 p-[3px] glow-blue">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-[#03060f]">
                    <Image
                      src={config.photo}
                      alt={config.name}
                      fill
                      className="object-cover rounded-full"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projets">
          <SectionTitle label="Projets" icon={<RocketIcon />} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project) => (
              <article
                key={project.title}
                className="card-space flex flex-col rounded-xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-44 bg-[#060d20]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-90"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500/30 to-violet-500/30 flex items-center justify-center border border-sky-800/30">
                        <SatelliteIcon />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d20] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-sky-950/80 text-sky-400 border border-sky-800/50">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <h3 className="font-semibold text-slate-100">{project.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-mono px-2 py-0.5 rounded tag-space">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-300 transition-colors"
                      >
                        <GithubIcon /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-sky-300 transition-colors"
                      >
                        <ExternalLinkIcon /> Démo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="competences">
          <SectionTitle label="Compétences" icon={<SatelliteIcon />} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skills.map((skill) => (
              <div key={skill.category} className="card-space p-5 rounded-xl">
                <p className="text-xs font-mono uppercase tracking-widest text-sky-500 mb-4">
                  {skill.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="text-sm px-3 py-1 rounded-full tag-space font-mono">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="parcours">
          <SectionTitle label="Parcours" icon={<RocketIcon />} />
          <div className="relative pl-6 space-y-10">
            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-sky-500/60 via-violet-500/40 to-transparent" />
            {education.map((edu) => (
              <div key={edu.school} className="relative">
                <div className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-[#03060f] shadow-[0_0_12px_rgba(56,189,248,0.6)]" />
                <p className="font-mono text-xs text-sky-400 mb-1 tracking-wide">{edu.period}</p>
                <p className="font-semibold text-slate-100">{edu.school}</p>
                <p className="text-sm text-slate-400">{edu.degree}</p>
                {edu.description && (
                  <p className="text-sm text-slate-500 mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-sky-900/30 bg-[#03060f]/60 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-mono">
            © {new Date().getFullYear()} · {config.name}
          </p>
          <div className="flex items-center gap-5">
            <a href={`mailto:${config.email}`} className="text-slate-500 hover:text-sky-300 transition-colors">
              <MailIcon />
            </a>
            <a href={config.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-100 transition-colors">
              <GithubIcon />
            </a>
            <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-400 transition-colors">
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-10">
      <span className="text-sky-500">{icon}</span>
      <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500">{label}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-sky-900/60 to-transparent" />
    </div>
  );
}
