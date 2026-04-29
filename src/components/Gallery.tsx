"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

type MediaItem = { kind: "image"; src: string } | { kind: "video"; src: string };

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-7 h-7">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function VideoThumbnail({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <video
      ref={videoRef}
      src={src}
      className="absolute inset-0 w-full h-full object-cover"
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
  const prev = useCallback(() => setActive((i) => (i !== null ? (i - 1 + media.length) % media.length : 0)), [media.length]);
  const next = useCallback(() => setActive((i) => (i !== null ? (i + 1) % media.length : 0)), [media.length]);

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
      {/* Cover cliquable */}
      {cover && (
        <button
          onClick={() => setActive(0)}
          className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden border border-sky-900/30 group focus:outline-none focus:ring-2 focus:ring-sky-500 block"
        >
          <Image src={cover} alt={title} fill className="object-cover group-hover:scale-[1.02] transition-transform duration-500" priority />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-mono bg-black/50 px-3 py-1 rounded-full">
              Plein écran
            </span>
          </div>
        </button>
      )}

      {/* Grille galerie */}
      {galleryItems.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {galleryItems.map((item, i) => {
            const globalIndex = (cover ? 1 : 0) + i;
            return (
              <button
                key={i}
                onClick={() => setActive(globalIndex)}
                className="relative h-56 rounded-xl overflow-hidden border border-sky-900/30 group focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                {item.kind === "image" ? (
                  <Image
                    src={item.src}
                    alt={`${title} — photo ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <>
                    <VideoThumbnail src={item.src} />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 bg-black/50 rounded-full p-2">
                        <PlayIcon />
                      </div>
                    </div>
                  </>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
              </button>
            );
          })}
        </div>
      )}

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          {/* Compteur */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-sm font-mono text-slate-400">
            {active + 1} / {media.length}
          </div>

          {/* Fermer */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <CloseIcon />
          </button>

          {/* Précédent */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Contenu */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-16 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {media[active].kind === "image" ? (
              <Image
                src={media[active].src}
                alt={`${title} — ${active + 1}`}
                width={1400}
                height={900}
                className="object-contain w-full max-h-[85vh] rounded-lg"
                priority
              />
            ) : (
              <video
                src={media[active].src}
                controls
                autoPlay
                className="w-full max-h-[85vh] rounded-lg"
              />
            )}
          </div>

          {/* Suivant */}
          {media.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          )}

          {/* Points de navigation */}
          {media.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {media.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className={`h-2 rounded-full transition-all ${i === active ? "bg-sky-400 w-4" : "bg-slate-600 hover:bg-slate-400 w-2"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
