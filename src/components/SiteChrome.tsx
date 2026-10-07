import Link from "next/link";
import { config, type Lang } from "@/data/portfolio";
import { ui } from "@/lib/ui";

export function Header({ lang, altHref }: { lang: Lang; altHref: string }) {
  const t = ui(lang);
  const home = t.home;
  const links = [
    { label: t.navExperience, href: `${home}#experience` },
    { label: t.navProjects, href: `${home}#projets` },
    { label: t.navPath, href: `${home}#parcours` },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-night/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-4 sm:px-8">
        <Link href={home} className="font-serif text-[1.15rem] font-medium text-paper hover:text-star">
          {config.name}
        </Link>
        <nav className="flex items-center gap-5 text-[0.92rem]">
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-muted transition-colors hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={altHref}
            hrefLang={lang === "fr" ? "en" : "fr"}
            aria-label={t.switchAria}
            className="rounded-full border border-line px-3 py-1 text-[0.85rem] text-paper transition-colors hover:border-star hover:text-star"
          >
            {t.switchLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const t = ui(lang);
  return (
    <footer className="border-t border-line/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-[0.92rem] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {config.name}, {new Date().getFullYear()}. {t.footerLine}
        </p>
        <ul className="flex flex-wrap gap-5">
          <li><a className="link" href={`mailto:${config.email}`}>{config.email}</a></li>
          <li><a className="link" href={config.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="link" href={config.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
      </div>
    </footer>
  );
}
