import { useEffect, useState } from "react";
import { Instagram, Play, Download } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;
  const heading = `${hero.firstName} ${hero.lastName}`;

  const slides =
    hero.sliderImages && hero.sliderImages.length > 0
      ? hero.sliderImages
      : [hero.backgroundImage];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background slider */}
      <div className="absolute inset-0">
        {slides.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === currentSlide ? 1 : 0 }}
          >
            <img
              src={img}
              alt={`${heading} ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      </div>

      {/* Slider dots */}
      {slides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                i === currentSlide ? "w-8 bg-primary" : "w-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-8 pt-24 pb-20">
        {/* Subtitle — elegant tracking */}
        <p
          className="animate-clip-reveal text-primary font-display font-medium uppercase mb-5 md:mb-7"
          style={{ fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)", letterSpacing: "0.4em" }}
        >
          {hero.subtitle}
        </p>

        {/* Name — large display */}
        <h1 className="font-display font-bold uppercase leading-[0.8] tracking-tight text-white">
          <span
            className="animate-clip-reveal-delay-1 block"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            {hero.firstName}
          </span>
          <span
            className="animate-clip-reveal-delay-2 block text-primary"
            style={{ fontSize: "clamp(2.75rem, 11vw, 9rem)" }}
          >
            {hero.lastName}
          </span>
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up-delay text-white/80 font-light mt-5 md:mt-7 max-w-md leading-relaxed"
          style={{ fontSize: "clamp(0.875rem, 2vw, 1.0625rem)" }}
        >
          {hero.description}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay flex flex-wrap items-center gap-3 md:gap-4 mt-8 md:mt-10">
          {/* Book Now — Instagram DM */}
          <a
            href={content.contact.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-xs md:text-sm px-5 md:px-7 py-3.5 md:py-4 tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(200,255,0,0.4)]"
          >
            <Instagram className="w-4 h-4" />
            Book Now
          </a>

          {/* Watch Showreel */}
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-white/30 text-white font-display font-bold uppercase text-xs md:text-sm px-5 md:px-7 py-3.5 md:py-4 tracking-wide backdrop-blur-sm bg-white/5 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-transparent"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </a>

          {/* Tech Details Brochure — PDF download */}
          {hero.techRiderPdfUrl && (
            <a
              href={hero.techRiderPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-white/20 text-white/70 font-display font-bold uppercase text-xs md:text-sm px-5 md:px-7 py-3.5 md:py-4 tracking-wide transition-all duration-300 hover:border-white hover:text-white"
            >
              <Download className="w-4 h-4" />
              Tech Details Brochure
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
