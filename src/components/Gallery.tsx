"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type MediaItem = { kind: "image"; src: string } | { kind: "video"; src: string };

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoThumbnail({ src }: { src: string }) {
  return (
    <video
      src={src}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      playsInline
      preload="metadata"
    />
  );
}

export default function Gallery({
  images,
  videos,
  title,
  cover,
}: {
  images: string[];
  videos?: string[];
  title: string;
  cover?: string;
}) {
  const media: MediaItem[] = [
    ...(cover ? [{ kind: "image" as const, src: cover }] : []),
    ...images.map((src) => ({ kind: "image" as const, src })),
    ...(videos ?? []).map((src) => ({ kind: "video" as const, src })),
  ];

  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i !== null ? (i - 1 + media.length) % media.length : 0)),
    [media.length]
  );
  const next = useCallback(
    () => setActive((i) => (i !== null ? (i + 1) % media.length : 0)),
    [media.length]
  );

  useEffect(() => {
    if (active === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const galleryItems = media.slice(cover ? 1 : 0);

  return (
    <>
      {/* Figure principale */}
      {cover && (
        <figure>
          <button
            onClick={() => setActive(0)}
            className="group block w-full border border-line bg-blueprint-panel p-2 transition-colors hover:border-chalk/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <div className="relative h-64 w-full md:h-96">
              <Image src={cover} alt={title} fill className="object-cover" priority />
            </div>
          </button>
          <figcaption className="mt-2 font-mono text-xs text-chalk-soft">
            Fig. 1 — {title}. <span className="text-chalk-faint">Cliquer pour agrandir.</span>
          </figcaption>
        </figure>
      )}

      {/* Figures secondaires */}
      {galleryItems.length > 0 && (
        <div className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${cover ? "mt-8" : ""}`}>
          {galleryItems.map((item, i) => {
            const globalIndex = (cover ? 1 : 0) + i;
            const figNum = globalIndex + 1;
            return (
              <figure key={i}>
                <button
                  onClick={() => setActive(globalIndex)}
                  className="group block w-full border border-line bg-blueprint-panel p-2 transition-colors hover:border-chalk/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <div className="relative h-52 w-full">
                    {item.kind === "image" ? (
                      <Image
                        src={item.src}
                        alt={`${title} — fig. ${figNum}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <>
                        <VideoThumbnail src={item.src} />
                        <div className="absolute inset-0 flex items-center justify-center bg-blueprint/40">
                          <span className="border border-chalk/70 p-2 text-chalk transition-transform group-hover:scale-105">
                            <PlayIcon />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </button>
                <figcaption className="mt-2 font-mono text-xs text-chalk-soft">
                  Fig. {figNum}
                  {item.kind === "video" ? " (vidéo)" : ""} — {title}.
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}

      {/* Visionneuse */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050b16]/95"
          onClick={close}
        >
          <div className="absolute left-1/2 top-5 -translate-x-1/2 font-mono text-xs tracking-widest text-chalk/70">
            FIG. {active + 1} / {media.length}
          </div>

          <button
            onClick={close}
            className="absolute right-5 top-4 p-2 text-chalk/70 transition-colors hover:text-chalk"
            aria-label="Fermer"
          >
            <CloseIcon />
          </button>

          {media.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 p-3 text-chalk/70 transition-colors hover:text-chalk"
              aria-label="Précédent"
            >
              <ChevronLeft />
            </button>
          )}

          <div
            className="relative mx-14 flex max-h-[85vh] w-full max-w-5xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {media[active].kind === "image" ? (
              <Image
                src={media[active].src}
                alt={`${title} — fig. ${active + 1}`}
                width={1400}
                height={900}
                className="max-h-[85vh] w-full object-contain"
                priority
              />
            ) : (
              <video src={media[active].src} controls autoPlay className="max-h-[85vh] w-full" />
            )}
          </div>

          {media.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 p-3 text-chalk/70 transition-colors hover:text-chalk"
              aria-label="Suivant"
            >
              <ChevronRight />
            </button>
          )}

          {media.length > 1 && (
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2.5">
              {media.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(i);
                  }}
                  aria-label={`Figure ${i + 1}`}
                  className={`h-2 w-2 transition-colors ${
                    i === active ? "bg-accent" : "bg-chalk/30 hover:bg-chalk/60"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
