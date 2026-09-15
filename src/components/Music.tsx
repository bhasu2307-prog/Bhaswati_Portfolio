import type { SiteContent, ReleaseItem } from "@/data/epkData";

function ReleaseCard({ release }: { release: ReleaseItem }) {
  return (
    <div className="release-card border border-border bg-card group">
      {/* Cover art */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={release.cover}
          alt={release.title}
          loading="lazy"
          className="w-full h-full object-cover img-grayscale"
        />
        {/* Type tag */}
        <div
          className="absolute top-0 left-0 font-display font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 text-primary-fg"
          style={{ background: release.tagColor || "#c8ff00" }}
        >
          {release.type}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 border-t border-border">
        <h3 className="font-display font-bold text-white text-lg uppercase leading-tight">
          {release.title}
        </h3>
        <p className="text-muted text-[10px] uppercase tracking-wider mt-1">
          {release.year} · {release.streams} streams
        </p>

        {/* Streaming links */}
        <div className="flex gap-2 mt-3">
          {release.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary text-[10px] uppercase tracking-wider border border-border px-2.5 py-1.5 transition-all hover:border-primary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Music({ content }: { content: SiteContent }) {
  const { music } = content;

  // Split heading to highlight one word
  const words = music.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(music.highlightWord.toLowerCase())
  );

  return (
    <section id="music" className="relative z-10 bg-[#0d0d0d] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">002</span>
          <span className="rule" />
          <span className="label">Discography</span>
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

        {/* Release grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
          {music.releases.map((release, i) => (
            <div key={i} className="bg-[#0d0d0d]">
              <ReleaseCard release={release} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
