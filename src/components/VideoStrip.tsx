import { Play } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function VideoStrip({ content }: { content: SiteContent }) {
  const { video } = content;

  return (
    <section className="relative z-10 bg-[#0d0d0d] border-b border-border">
      <a
        href={video.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative w-full overflow-hidden"
      >
        {/* Thumbnail */}
        <div className="relative aspect-[21/9] md:aspect-[21/7] overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover img-grayscale"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-bg/50 group-hover:bg-bg/30 transition-colors duration-500" />

          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="w-6 h-6 md:w-8 md:h-8 text-primary fill-current ml-1" />
            </div>
          </div>

          {/* Title bar */}
          <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-bg/80 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
            <div>
              <h3 className="font-display font-bold text-white text-lg md:text-xl uppercase leading-tight">
                {video.title}
              </h3>
              <p className="text-muted text-[10px] uppercase tracking-wider mt-0.5">
                {video.subtitle}
              </p>
            </div>
            <span className="text-primary font-display font-bold uppercase text-xs tracking-wider hidden md:block">
              Watch Now →
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
