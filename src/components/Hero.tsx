import { Instagram, Play } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

const INSTAGRAM_DM_URL = "https://ig.me/m/itsmebsg";

export default function Hero({ content }: { content: SiteContent }) {
  const { hero } = content;
  const heading = `${hero.firstName} ${hero.lastName}`;

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero.backgroundImage}
          alt={heading}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20 pb-16">
        <p className="animate-clip-reveal text-primary font-display font-medium text-xs uppercase tracking-[0.3em] mb-6">
          {hero.subtitle}
        </p>

        <h1 className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white">
          <span
            className="animate-clip-reveal-delay-1 block"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
          >
            {hero.firstName}
          </span>
          <span
            className="animate-clip-reveal-delay-2 block text-primary"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
          >
            {hero.lastName}
          </span>
        </h1>

        <p className="animate-fade-up-delay text-secondary text-base font-light mt-6 max-w-md leading-relaxed">
          {hero.description}
        </p>

        {/* CTAs — Book Now = Instagram DM (primary), Watch Showreel (secondary) */}
        <div className="animate-fade-up-delay flex flex-wrap items-center gap-4 mt-8">
          <a
            href={INSTAGRAM_DM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-colors hover:bg-white"
          >
            <Instagram className="w-4 h-4" />
            Book Now
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-2 border border-border text-white font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-all hover:border-primary hover:text-primary"
          >
            <Play className="w-4 h-4 fill-current" />
            Watch Showreel
          </a>
        </div>
      </div>
    </section>
  );
}
