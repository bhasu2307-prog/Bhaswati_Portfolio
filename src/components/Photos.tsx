import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function Photos({ content }: { content: SiteContent }) {
  const { photos } = content;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);
  const nextPhoto = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev + 1) % photos.photos.length));
  }, [photos.photos.length]);
  const prevPhoto = useCallback(() => {
    setLightbox((prev) => (prev === null ? null : (prev - 1 + photos.photos.length) % photos.photos.length));
  }, [photos.photos.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, nextPhoto, prevPhoto]);

  // Split heading to highlight one word
  const words = photos.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(photos.highlightWord.toLowerCase())
  );

  return (
    <section id="photos" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">003</span>
          <span className="rule" />
          <span className="label">Photos</span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-12"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {words.map((word, i) => (
            <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
              {word}{i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {photos.photos.map((photo, i) => (
            <div
              key={i}
              className="photo-card bg-bg cursor-pointer aspect-[4/5]"
              onClick={() => setLightbox(i)}
            >
              <div className="lime-bar" />
              <img
                src={photo.src}
                alt={photo.credit}
                loading="lazy"
                className="w-full h-full object-cover img-grayscale"
              />
              <div className="photo-credit">{photo.credit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-bg/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 md:left-8 text-white text-4xl font-display font-bold hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            src={photos.photos[lightbox].src}
            alt={photos.photos[lightbox].credit}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 md:right-8 text-white text-4xl font-display font-bold hover:text-primary transition-colors"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next"
          >
            ›
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <span className="text-primary text-[10px] uppercase tracking-[0.25em]">
              {photos.photos[lightbox].credit}
            </span>
          </div>
        </div>
      )}
    </section>
  );
}
