import { Play } from "lucide-react";
import type { SiteContent, ReleaseItem, VideoItem } from "@/data/epkData";

function ShowcaseVideo({ video }: { video: VideoItem }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="release-card group border border-border bg-card overflow-hidden block"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover img-grayscale"
        />
        <div className="absolute inset-0 bg-bg/30 group-hover:bg-bg/10 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Play className="w-5 h-5 text-primary fill-current ml-0.5" />
          </div>
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
          {video.title}
        </h3>
        <p className="text-muted text-[10px] mt-1 font-light leading-relaxed">
          {video.description}
        </p>
      </div>
    </a>
  );
}

function ReleaseCard({ release }: { release: ReleaseItem }) {
  return (
    <div className="release-card border border-border bg-card group">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={release.cover}
          alt={release.title}
          loading="lazy"
          className="w-full h-full object-cover img-grayscale"
        />
        <div
          className="absolute top-0 left-0 font-display font-bold uppercase text-[10px] tracking-wider px-3 py-1.5 text-primary-fg"
          style={{ background: release.tagColor || "#c8ff00" }}
        >
          {release.type}
        </div>
      </div>
      <div className="p-4 border-t border-border">
        <h3 className="font-display font-bold text-white text-sm uppercase leading-tight">
          {release.title}
        </h3>
        <p className="text-muted text-[10px] uppercase tracking-wider mt-1">
          {release.year} · {release.streams}
        </p>
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
          <span className="label">Music</span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {words.map((word, i) => (
            <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
              {word}{i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>

        {/* Showcase description */}
        <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-10">
          {music.showcaseDescription}
        </p>

        {/* Video showcase grid — three songs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-border mb-20">
          {music.showcaseVideos.map((video, i) => (
            <div key={i} className="bg-[#0d0d0d]">
              <ShowcaseVideo video={video} />
            </div>
          ))}
        </div>

        {/* Releases sub-heading */}
        <h3
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-2"
          style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
        >
          My voice, pressed to <span className="text-primary">record</span>
        </h3>
        <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-10">
          The songs I have lived in — released playback work and an original that is entirely mine. When you book me, you are booking a recording voice, not a karaoke track with a microphone.
        </p>

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
