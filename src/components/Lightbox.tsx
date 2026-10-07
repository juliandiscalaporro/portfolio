"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type Media = {
  src: string;
  caption?: string;
  kind?: "image" | "video";
};

type Labels = { close: string; prev: string; next: string; enlarge: string };

export default function Lightbox({
  items,
  labels,
  className,
  thumbClassName,
  aspectClass,
  sizes = "(min-width: 1024px) 33vw, 50vw",
  showCaptions = false,
}: {
  items: Media[];
  labels: Labels;
  className?: string;
  thumbClassName?: string | string[];
  aspectClass?: string;
  sizes?: string;
  showCaptions?: boolean;
}) {
  const [active, setActive] = useState<number | null>(null);
  const n = items.length;

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(() => setActive((i) => (i === null ? 0 : (i - 1 + n) % n)), [n]);
  const next = useCallback(() => setActive((i) => (i === null ? 0 : (i + 1) % n)), [n]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  const current = active !== null ? items[active] : null;

  return (
    <>
      <div className={className}>
        {items.map((item, i) => (
          <figure key={item.src} className={Array.isArray(thumbClassName) ? thumbClassName[i] : thumbClassName ?? ""}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${labels.enlarge}${item.caption ? ` : ${item.caption}` : ""}`}
              className={`group relative block w-full overflow-hidden rounded-[3px] bg-raised ${aspectClass ?? "h-full"}`}
            >
              {item.kind === "video" ? (
                <>
                  <video src={item.src} muted playsInline preload="metadata" className="h-full w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-night/70 text-paper">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                    </span>
                  </span>
                </>
              ) : (
                <Image
                  src={item.src}
                  alt={item.caption ?? ""}
                  fill
                  sizes={sizes}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              )}
            </button>
            {showCaptions && item.caption && (
              <figcaption className="mt-2 text-[0.85rem] leading-snug text-muted">{item.caption}</figcaption>
            )}
          </figure>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[100] flex flex-col bg-[#060a13]/95"
          onClick={close}
        >
          <div className="flex items-center justify-between px-5 py-4 text-sm text-muted">
            <span>
              {active! + 1} / {n}
            </span>
            <button type="button" onClick={close} className="rounded-full p-2 text-paper hover:text-star" aria-label={labels.close}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 sm:px-16" onClick={(e) => e.stopPropagation()}>
            {current.kind === "video" ? (
              <video key={current.src} src={current.src} controls autoPlay playsInline className="max-h-[78vh] max-w-full rounded-[3px]" />
            ) : (
              <div className="relative h-[78vh] w-full">
                <Image key={current.src} src={current.src} alt={current.caption ?? ""} fill sizes="100vw" className="object-contain" />
              </div>
            )}
            {n > 1 && (
              <>
                <button type="button" onClick={prev} aria-label={labels.prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2.5 text-paper hover:text-star sm:left-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
                </button>
                <button type="button" onClick={next} aria-label={labels.next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-night/70 p-2.5 text-paper hover:text-star sm:right-4">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
                </button>
              </>
            )}
          </div>

          <p className="mx-auto max-w-2xl px-6 py-5 text-center text-[0.95rem] text-muted" onClick={(e) => e.stopPropagation()}>
            {current.caption}
          </p>
        </div>
      )}
    </>
  );
}
