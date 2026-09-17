import { Play } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function About({ content }: { content: SiteContent }) {
  const { about } = content;

  const words = about.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(about.highlightWord.toLowerCase())
  );

  return (
    <section id="about" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Heading */}
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

        {/* Showreel left, writeup right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Left — Showreel video */}
          <div>
            <a
              href={about.showreelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative w-full overflow-hidden border border-border"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={about.showreelThumbnail}
                  alt={about.showreelTitle}
                  className="w-full h-full object-cover img-grayscale"
                />
                <div className="absolute inset-0 bg-bg/40 group-hover:bg-bg/20 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-6 h-6 text-primary fill-current ml-1" />
                  </div>
                </div>
              </div>
              <div className="border-t border-border p-4 bg-card">
                <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
                  {about.showreelTitle}
                </h3>
                <p className="text-muted text-[10px] mt-1 font-light leading-relaxed">
                  {about.showreelDescription}
                </p>
              </div>
            </a>
          </div>

          {/* Right — Writeup */}
          <div className="space-y-5">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-secondary text-sm md:text-base font-light leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Fact grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
          {about.facts.map((fact, i) => (
            <div key={i} className="bg-bg px-4 py-4">
              <div className="text-muted text-[9px] uppercase tracking-[0.2em] mb-1.5">
                {fact.label}
              </div>
              <div className="text-white text-xs font-light">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
