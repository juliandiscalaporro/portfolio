import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Lightbox, { type Media } from "@/components/Lightbox";
import { Header, Footer } from "@/components/SiteChrome";
import { projects, tr, type Lang } from "@/data/portfolio";
import { ui } from "@/lib/ui";

export default function ProjectPage({ lang, slug }: { lang: Lang; slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const t = ui(lang);
  const labels = { close: t.close, prev: t.prev, next: t.next, enlarge: t.enlarge };
  const altHref = lang === "fr" ? `/en/projets/${slug}` : `/projets/${slug}`;

  const media: Media[] = [
    ...(project.images ?? []).map((i) => ({ src: i.src, caption: i.caption ? tr(i.caption, lang) : tr(project.title, lang) })),
    ...(project.videos ?? []).map((src) => ({ src, kind: "video" as const, caption: tr(project.title, lang) })),
  ];
  const withCaptions = (project.images ?? []).some((i) => i.caption);

  return (
    <>
      <Header lang={lang} altHref={altHref} />
      <main className="mx-auto max-w-6xl px-4 pb-24 pt-10 sm:px-8 md:pt-14">
        <Link href={`${t.home}#projets`} className="link text-[0.95rem]">
          {t.back}
        </Link>

        <header className="mt-10 grid gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.95rem] text-muted">
              <span>{tr(project.kind, lang)}</span>
              <span className="text-faint">{tr(project.period, lang)}</span>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-[0.8rem] ${
                  project.status === "ongoing" ? "border-star/60 text-star" : "border-line text-muted"
                }`}
              >
                {project.status === "ongoing" ? t.ongoing : t.done}
              </span>
            </p>
            <h1 className="mt-4 font-serif text-[2.8rem] font-medium leading-[1.02] sm:text-[4rem]">{tr(project.title, lang)}</h1>
            <p className="mt-6 max-w-prose font-serif text-[1.3rem] leading-[1.55] text-paper/90">{tr(project.description, lang)}</p>
            {(project.github || project.demo) && (
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">{t.code}</a>}
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn">{t.demo}</a>}
              </div>
            )}
          </div>

          {project.facts && (
            <aside className="md:col-span-5 md:pt-2">
              <h2 className="font-serif text-[1.2rem] font-medium">{t.keyFacts}</h2>
              <dl className="mt-4 border-t border-line">
                {project.facts.map((f) => (
                  <div key={f.label.fr} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-3 text-[0.97rem]">
                    <dt className="text-muted">{tr(f.label, lang)}</dt>
                    <dd className="text-paper">{tr(f.value, lang)}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          )}
        </header>

        {project.image && (
          <figure className="mt-14">
            <div className={`relative aspect-[16/9] overflow-hidden rounded-[3px] ${project.imageFit === "contain" ? "bg-white" : "bg-raised"}`}>
              <Image src={project.image} alt={tr(project.title, lang)} fill priority sizes="100vw" className={project.imageFit === "contain" ? "object-contain p-4" : "object-cover"} />
            </div>
            {project.imageCredit && (
              <figcaption className="mt-3 text-[0.85rem] text-faint">{tr(project.imageCredit, lang)}</figcaption>
            )}
          </figure>
        )}

        <section className="mt-16 grid gap-10 md:grid-cols-12 md:gap-12">
          <h2 className="font-serif text-[1.5rem] font-medium md:col-span-4">{t.about}</h2>
          <div className="max-w-[38rem] space-y-5 text-paper/85 md:col-span-8">
            {project.content.map((p, i) => (
              <p key={i}>{tr(p, lang)}</p>
            ))}
            <ul className="flex flex-wrap gap-2 pt-3">
              {project.tags.map((tag) => (
                <li key={tag.fr} className="chip">{tr(tag, lang)}</li>
              ))}
            </ul>
          </div>
        </section>

        {media.length > 0 && (
          <section className="mt-16 grid gap-6 md:grid-cols-12 md:gap-12">
            <h2 className="font-serif text-[1.5rem] font-medium md:col-span-4">{t.gallery}</h2>
            <div className="md:col-span-8">
              <Lightbox
                labels={labels}
                items={media}
                showCaptions={withCaptions}
                className="grid grid-cols-2 gap-x-3 gap-y-6"
                aspectClass="aspect-[4/3]"
                sizes="(min-width: 768px) 30vw, 50vw"
              />
            </div>
          </section>
        )}

        {project.documents && project.documents.length > 0 && (
          <section className="mt-16 grid gap-6 md:grid-cols-12 md:gap-12">
            <h2 className="font-serif text-[1.5rem] font-medium md:col-span-4">{t.documents}</h2>
            <ul className="border-t border-line md:col-span-8">
              {project.documents.map((d) => (
                <li key={d.url} className="border-b border-line">
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 text-paper transition-colors hover:text-star"
                  >
                    <span>{tr(d.name, lang)}</span>
                    <span className="text-[0.9rem] text-muted">PDF, {t.open.toLowerCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer lang={lang} />
    </>
  );
}
