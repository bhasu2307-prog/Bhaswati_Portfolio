import { Play, Video } from "lucide-react";
import type { VideoItem } from "@/data/epkData";

interface VideoCarouselProps {
  title: string;
  videos: VideoItem[];
}

function getYouTubeThumb(id: string): string {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function VideoCarousel({ title, videos }: VideoCarouselProps) {
  return (
    <div className="mb-2">
      {/* Carousel */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 px-6 -mx-6 scroll-pl-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="snap-start shrink-0 w-[280px] sm:w-[320px]"
          >
            {video.mock ? (
              // Mock card placeholder
              <div className="glass-card rounded-2xl overflow-hidden">
                <div className="relative aspect-video bg-gradient-to-br from-charcoal-light to-charcoal-dark flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <Video className="w-6 h-6 text-gold/40" />
                  </div>
                  <span className="text-white/30 text-xs uppercase tracking-wider">Coming Soon</span>
                </div>
                <div className="px-4 py-3">
                  <p className="text-white font-sans text-sm font-medium">{video.title}</p>
                  <p className="text-white/40 text-xs mt-0.5">New Release</p>
                </div>
              </div>
            ) : (
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:border-gold/30 active:scale-[0.98]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={getYouTubeThumb(video.id)}
                    alt={video.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold/90 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-5 h-5 text-charcoal-dark fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-white font-sans text-sm font-medium">{video.title}</p>
                  <p className="text-gold/60 text-xs mt-0.5">{title}</p>
                </div>
              </a>
            )}
          </div>
        ))}
        {/* End spacer for clean scroll end */}
        <div className="shrink-0 w-1" />
      </div>
    </div>
  );
}
