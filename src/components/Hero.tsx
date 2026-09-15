import { Play, ArrowRight } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Hero() {
  const { artist, heroCta, heroStats } = epkData;

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={artist.heroImage}
          alt={artist.name}
          className="w-full h-full object-cover"
        />
        {/* Dual gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/40 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/70 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 pt-20">
        {/* Subtitle */}
        <p className="animate-clip-reveal text-primary font-display font-medium text-xs uppercase tracking-[0.3em] mb-6">
          {artist.subtitle}
        </p>

        {/* Name — two-line clip reveal */}
        <h1 className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white">
          <span
            className="animate-clip-reveal-delay-1 block"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
          >
            {artist.firstName}
          </span>
          <span
            className="animate-clip-reveal-delay-2 block text-primary"
            style={{ fontSize: "clamp(3.5rem, 14vw, 12rem)" }}
          >
            {artist.lastName}
          </span>
        </h1>

        {/* Subhead */}
        <p className="animate-fade-up-delay text-secondary text-base font-light mt-6 max-w-md leading-relaxed">
          Bollywood playback singer and electrifying live performer. Vocals for Sachin-Jigar, collaborator with Benny John, trained by AR Rahman alumna.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-delay flex items-center gap-4 mt-8">
          <a
            href={heroCta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-colors hover:bg-white"
          >
            <Play className="w-4 h-4 fill-current" />
            {heroCta.label}
          </a>
          <a
            href="#music"
            className="group inline-flex items-center gap-2 border border-border text-white font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-all hover:border-primary hover:text-primary"
          >
            Listen
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Stat strip — bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border bg-bg/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className={`py-5 px-2 text-center ${
                i !== 0 ? "md:border-l border-border" : ""
              } ${i === 1 ? "border-l border-border" : ""} ${i === 3 ? "md:border-l border-border" : ""} ${i === 2 ? "border-l border-border md:border-l" : ""}`}
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-white leading-none">
                {stat.value}
              </div>
              <div className="text-muted text-[10px] uppercase tracking-[0.2em] mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
