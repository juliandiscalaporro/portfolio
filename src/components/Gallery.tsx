"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

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

export default function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i !== null ? (i - 1 + images.length) % images.length : 0)), [images.length]);
  const next = useCallback(() => setActive((i) => (i !== null ? (i + 1) % images.length : 0)), [images.length]);

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

  return (
    <>
      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="relative h-56 rounded-xl overflow-hidden border border-sky-900/30 group focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <Image
              src={src}
              alt={`${title} — photo ${i + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-mono bg-black/50 px-3 py-1 rounded-full">
                Plein écran
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={close}
        >
          {/* Compteur */}
          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-sm font-mono text-slate-400">
            {active + 1} / {images.length}
          </div>

          {/* Fermer */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
          >
            <CloseIcon />
          </button>

          {/* Précédent */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-5xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={`${title} — photo ${active + 1}`}
              width={1400}
              height={900}
              className="object-contain w-full max-h-[85vh] rounded-lg"
              priority
            />
          </div>

          {/* Suivant */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 text-slate-400 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          )}

          {/* Miniatures */}
          {images.length > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActive(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${i === active ? "bg-sky-400 w-4" : "bg-slate-600 hover:bg-slate-400"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
