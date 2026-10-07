import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components/SiteChrome";
import {
  config,
  experiences,
  projects,
  archive,
  sky,
  skills,
  languages,
  education,
  engagements,
  tr,
  type Lang,
} from "@/data/portfolio";
import { ui } from "@/lib/ui";

const closing = {
  fr: {
    title: "Vous encadrez un stage de recherche en astrophysique en 2027 ?",
    text: "Je cherche un stage de six mois, de février à août 2027, en mécanique céleste, astrométrie ou dynamique orbitale, avec l'idée de poursuivre en doctorat.",
  },
  en: {
    title: "Supervising an astrophysics research internship in 2027?",
    text: "I am looking for a six-month internship, February to August 2027, in celestial mechanics, astrometry or orbital dynamics, with a PhD in view.",
  },
};

export default function HomePage({ lang }: { lang: Lang }) {
  const t = ui(lang);
  const ongoing = projects.filter((p) => p.status === "ongoing");
  const done = projects.filter((p) => p.status === "done");
  const cvLabel = t.cv + (config.cvIsTranslated[lang] ? "" : t.cvFrOnly);

  return (
    <>
      <Header lang={lang} altHref={lang === "fr" ? "/en" : "/"} />

      <main id="contenu">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="mx-auto grid max-w-[112rem] gap-10 px-4 pb-20 pt-12 sm:px-8 lg:px-16 md:grid-cols-12 md:gap-12 md:pt-20">
          <div className="flex flex-col justify-center md:col-span-7">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src={config.photo}
                alt={config.name}
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-full object-cover object-top ring-1 ring-line"
              />
              <p className="max-w-xs text-[0.95rem] leading-snug text-muted">{tr(config.role, lang)}</p>
            </div>
            <h1 className="font-serif text-[3.2rem] font-medium leading-[0.98] tracking-[-0.01em] text-paper sm:text-[4.5rem] lg:text-[5.4rem]">
              Julian
              <br />
              Discala Porro
            </h1>
            <p className="mt-8 max-w-prose text-[1.12rem] leading-relaxed text-paper/85">{tr(config.intro, lang)}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={`mailto:${config.email}`} className="btn-primary">{t.contact}</a>
              <a href={config.cv[lang]} target="_blank" rel="noopener noreferrer" className="btn">{cvLabel}</a>
              <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            </div>
          </div>
          <figure className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-raised md:aspect-[9/14]">
              <Image
                src={config.heroImage}
                alt={tr(config.heroCaption, lang)}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 100vw"
                className="hero-photo object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.85rem] text-faint">{tr(config.heroCaption, lang)}</figcaption>
          </figure>
        </section>

        {/* ── Expérience ───────────────────────────────────── */}
        <section id="experience" className="border-t border-line/70">
          <div className="mx-auto max-w-[112rem] px-4 py-20 sm:px-8 lg:px-16 md:py-28">
            <h2 className="h2">{t.experienceTitle}</h2>

            {experiences.map((exp) => (
              <article key={exp.role.fr} className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
                <aside className="md:col-span-4 xl:col-span-3">
                  <div className="md:sticky md:top-24">
                    <p className="text-[0.92rem] text-star">{tr(exp.period, lang)}</p>
                    <h3 className="mt-2 font-serif text-[1.6rem] font-medium leading-snug">{tr(exp.role, lang)}</h3>
                    <p className="mt-3 text-paper/85">{tr(exp.org, lang)}</p>
                    <p className="mt-1 text-[0.95rem] text-muted">{tr(exp.place, lang)}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <li key={tag.fr} className="chip">{tr(tag, lang)}</li>
                      ))}
                    </ul>
                    <figure className="mt-10 max-w-sm">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[3px] bg-raised">
                        <Image
                          src={exp.illustration.src}
                          alt={tr(exp.illustration.alt, lang)}
                          fill
                          sizes="30vw"
                          className="object-cover"
                        />
                      </div>
                      <figcaption className="mt-3 text-[0.85rem] text-faint">{tr(exp.illustration.alt, lang)}</figcaption>
                    </figure>
                  </div>
                </aside>

                <div className="md:col-span-8 xl:col-span-9 xl:grid xl:grid-cols-2 xl:gap-16">
                  <div>
                  <p className="max-w-[40rem] font-serif text-[1.35rem] leading-[1.55] text-paper">{tr(exp.summary, lang)}</p>
                  <div className="mt-8 max-w-[38rem] space-y-5 text-paper/80">
                    {exp.paragraphs.map((p, i) => (
                      <p key={i}>{tr(p, lang)}</p>
                    ))}
                  </div>

                  </div>
                  <div>
                  <h4 className="mt-14 font-serif text-[1.25rem] font-medium xl:mt-1">{t.resultsTitle}</h4>
                  <dl className="mt-5 grid border-t border-line sm:grid-cols-2">
                    {exp.results.map((r, i) => (
                      <div
                        key={i}
                        className={`border-b border-line py-5 sm:pr-8 ${i % 2 === 1 ? "sm:border-l sm:pl-8" : ""}`}
                      >
                        <dt className="font-serif text-[2rem] leading-none text-paper">{tr(r.value, lang)}</dt>
                        <dd className="mt-2 text-[0.95rem] leading-snug text-muted">{tr(r.label, lang)}</dd>
                      </div>
                    ))}
                  </dl>

                  {exp.figure && (
                    <figure className="mt-12">
                      <div className="overflow-hidden rounded-[3px] bg-white p-2">
                        <Image
                          src={exp.figure.src}
                          alt={tr(exp.figure.caption, lang)}
                          width={exp.figure.w}
                          height={exp.figure.h}
                          sizes="(min-width: 768px) 60vw, 100vw"
                          className="h-auto w-full"
                        />
                      </div>
                      <figcaption className="mt-3 max-w-[38rem] text-[0.88rem] leading-snug text-muted">
                        {tr(exp.figure.caption, lang)}
                      </figcaption>
                    </figure>
                  )}

                  {exp.video && (
                    <p className="mt-8">
                      <a href={exp.video.url} target="_blank" rel="noopener noreferrer" className="link">
                        {tr(exp.video.label, lang)}
                      </a>
                    </p>
                  )}
                  </div>
                </div>
              </article>
            ))}

          </div>
        </section>

        <Illustration images={pick("m51", "ngc6960")} lang={lang} text={illus.seestar} />

        {/* ── Projets ──────────────────────────────────────── */}
        <section id="projets" className="border-t border-line/70">
          <div className="mx-auto max-w-[112rem] px-4 py-20 sm:px-8 lg:px-16 md:py-28">
            <div className="grid gap-4 md:grid-cols-12">
              <h2 className="h2 md:col-span-5">{t.projectsTitle}</h2>
              <p className="max-w-prose text-muted md:col-span-7 md:pt-3">{t.projectsIntro}</p>
            </div>

            <h3 className="mt-14 font-serif text-[1.3rem] font-medium">{t.ongoingTitle}</h3>
            <ul className="mt-5 divide-y divide-line border-y border-line xl:grid xl:grid-cols-2 xl:gap-x-14 xl:divide-y-0">
              {ongoing.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`${t.projectBase}/${p.slug}`}
                    className="group grid gap-6 py-8 md:grid-cols-12 md:gap-10 md:py-10 xl:grid-cols-1 xl:gap-6"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-raised md:col-span-5 xl:col-span-1">
                      {p.image && (
                        <Image
                          src={p.image}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 40vw, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      )}
                    </div>
                    <div className="flex flex-col md:col-span-7 xl:col-span-1">
                      <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.92rem] text-muted">
                        <span>{tr(p.kind, lang)}</span>
                        <span className="text-faint">{tr(p.period, lang)}</span>
                      </p>
                      <h4 className="mt-3 font-serif text-[2rem] font-medium leading-tight text-paper transition-colors group-hover:text-star">
                        {tr(p.title, lang)}
                      </h4>
                      <p className="mt-3 max-w-prose text-paper/80">{tr(p.description, lang)}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <li key={tag.fr} className="chip">{tr(tag, lang)}</li>
                        ))}
                      </ul>
                      <span className="mt-6 text-[0.95rem] text-paper underline decoration-star/60 underline-offset-4 group-hover:decoration-star">
                        {t.readProject}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-20 font-serif text-[1.3rem] font-medium">{t.doneTitle}</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-14 md:grid-cols-2 2xl:grid-cols-4">
              {done.map((p) => (
                <li key={p.slug}>
                  <Link href={`${t.projectBase}/${p.slug}`} className="group block">
                    <div className={`relative aspect-[16/10] overflow-hidden rounded-[3px] ${p.imageFit === "contain" ? "bg-white" : "bg-raised"}`}>
                      {p.image && (
                        <Image
                          src={p.image}
                          alt=""
                          fill
                          sizes="(min-width: 768px) 45vw, 100vw"
                          className={`${p.imageFit === "contain" ? "object-contain p-3" : "object-cover"} transition-transform duration-500 group-hover:scale-[1.03]`}
                        />
                      )}
                    </div>
                    <p className="mt-5 flex flex-wrap gap-x-3 text-[0.92rem] text-muted">
                      <span>{tr(p.kind, lang)}</span>
                      <span className="text-faint">{tr(p.period, lang)}</span>
                    </p>
                    <h4 className="mt-2 font-serif text-[1.6rem] font-medium leading-snug text-paper transition-colors group-hover:text-star">
                      {tr(p.title, lang)}
                    </h4>
                    <p className="mt-2 text-paper/80">{tr(p.description, lang)}</p>
                    <span className="mt-4 inline-block text-[0.95rem] text-paper underline decoration-star/60 underline-offset-4 group-hover:decoration-star">
                      {t.readProject}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mt-24 font-serif text-[1.3rem] font-medium">{t.archiveTitle}</h3>
            <div className="mt-6 grid gap-10 md:grid-cols-3 xl:gap-16">
              {archive.map((g) => (
                <div key={g.group.fr}>
                  <p className="border-b border-line pb-3 text-[0.95rem] text-star">{tr(g.group, lang)}</p>
                  <ul className="mt-3 space-y-3">
                    {g.items.map((it) => (
                      <li key={it.title.fr} className="leading-snug">
                        <span className="text-paper/90">{tr(it.title, lang)}</span>
                        {it.note && <span className="mt-0.5 block text-[0.9rem] text-muted">{tr(it.note, lang)}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Illustration images={pick("lune", "m16")} lang={lang} text={illus.calern} reverse />

        {/* ── Parcours ─────────────────────────────────────── */}
        <section id="parcours" className="border-t border-line/70">
          <div className="mx-auto max-w-[112rem] px-4 py-20 sm:px-8 lg:px-16 md:py-28">
            <h2 className="h2">{t.pathTitle}</h2>

            <ol className="mt-12 border-t border-line">
              {education.map((e) => (
                <li key={e.school} className="grid gap-1 border-b border-line py-6 md:grid-cols-12 md:gap-10">
                  <p className="text-[0.95rem] tabular-nums text-star md:col-span-3">{e.period}</p>
                  <div className="md:col-span-9">
                    <p className="font-serif text-[1.3rem] font-medium leading-snug">{e.school}</p>
                    <p className="mt-1 text-paper/80">{tr(e.degree, lang)}</p>
                    {e.description && <p className="mt-1 text-[0.95rem] text-muted">{tr(e.description, lang)}</p>}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16 grid gap-12 md:grid-cols-12">
              <div className="md:col-span-7">
                <h3 className="font-serif text-[1.35rem] font-medium">{t.skillsTitle}</h3>
                <dl className="mt-5 space-y-4">
                  {skills.map((s) => (
                    <div key={s.category.fr} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-4">
                      <dt className="text-muted">{tr(s.category, lang)}</dt>
                      <dd className="text-paper/90">{s.items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="space-y-12 md:col-span-5">
                <div>
                  <h3 className="font-serif text-[1.35rem] font-medium">{t.languagesTitle}</h3>
                  <dl className="mt-5 space-y-2">
                    {languages.map((l) => (
                      <div key={l.name.fr} className="flex justify-between gap-4 border-b border-line/60 pb-2">
                        <dt>{tr(l.name, lang)}</dt>
                        <dd className="text-muted">{tr(l.level, lang)}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div>
                  <h3 className="font-serif text-[1.35rem] font-medium">{t.engagementsTitle}</h3>
                  <ul className="mt-5 space-y-2 text-paper/90">
                    {engagements.map((e) => (
                      <li key={e.fr}>{tr(e, lang)}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Illustration images={pick("voie-lactee", "m13")} lang={lang} text={illus.ciel} />

        {/* ── Contact ──────────────────────────────────────── */}
        <section className="border-t border-line/70">
          <div className="mx-auto max-w-[112rem] px-4 py-20 sm:px-8 lg:px-16 md:py-28">
            <h2 className="max-w-3xl font-serif text-[2rem] font-medium leading-tight sm:text-[2.6rem]">{closing[lang].title}</h2>
            <p className="mt-5 max-w-prose text-paper/80">{closing[lang].text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${config.email}`} className="btn-primary">{t.contact}</a>
              <a href={config.cv[lang]} target="_blank" rel="noopener noreferrer" className="btn">{cvLabel}</a>
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}

type SkyImage = (typeof sky)[number];
const pick = (...keys: string[]): SkyImage[] => keys.map((k) => sky.find((x) => x.src.includes(k))!);

const illus = {
  seestar: {
    fr: { title: "Mes premières images du ciel profond", text: "Prises en une nuit au festival Astro'Valberg, avec un Seestar S50 qu'on m'avait prêté." },
    en: { title: "My first deep-sky images", text: "Taken in a single night at the Astro'Valberg festival, with a borrowed Seestar S50." },
  },
  calern: {
    fr: { title: "Avec les données du télescope de Calern", text: "Images brutes du télescope UniversCity, que j'ai traitées moi-même en Python : alignement, empilement, composition des couleurs." },
    en: { title: "From the Calern telescope data", text: "Raw frames from the UniversCity telescope, which I processed myself in Python: alignment, stacking, colour composition." },
  },
  ciel: {
    fr: { title: "Du ciel à l'œil nu au télescope", text: "La Voie lactée depuis la réserve de ciel étoilé de Valberg, et l'amas d'Hercule, M 13, à partir des données du télescope UniversCity." },
    en: { title: "From naked-eye sky to telescope", text: "The Milky Way from the Valberg dark-sky reserve, and the Hercules Cluster, M 13, from UniversCity telescope data." },
  },
};

/* Images d'illustration entre deux sections : affichées en entier, avec leur légende */
function Illustration({
  images,
  lang,
  text,
  reverse = false,
}: {
  images: SkyImage[];
  lang: Lang;
  text: { fr: { title: string; text: string }; en: { title: string; text: string } };
  reverse?: boolean;
}) {
  return (
    <section className="border-t border-line/70 bg-[#070b15]">
      <div className="mx-auto grid max-w-[112rem] items-center gap-10 px-4 py-16 sm:px-8 lg:px-16 md:grid-cols-12 md:py-20">
        <div className={`grid grid-cols-2 gap-3 md:col-span-8 ${reverse ? "md:order-2" : ""}`}>
          {images.map((im) => (
            <figure key={im.src}>
              <div className={`relative overflow-hidden rounded-[3px] bg-black ${im.h > im.w ? "aspect-[3/4]" : "aspect-square"}`}>
                <Image src={im.src} alt={tr(im.title, lang)} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
              </div>
              <figcaption className="mt-2 text-[0.85rem] leading-snug text-muted">{tr(im.title, lang)}</figcaption>
            </figure>
          ))}
        </div>
        <div className={`md:col-span-4 ${reverse ? "md:order-1" : ""}`}>
          <p className="font-serif text-[1.6rem] font-medium leading-snug text-paper">{text[lang].title}</p>
          <p className="mt-3 text-paper/75">{text[lang].text}</p>
        </div>
      </div>
    </section>
  );
}
