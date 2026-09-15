import { Star } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function AuthorityMarquee() {
  const { marqueeCredits } = epkData;
  const items = [...marqueeCredits, ...marqueeCredits, ...marqueeCredits];

  return (
    <div className="relative z-10 overflow-hidden border-y border-white/10 bg-charcoal-dark/60 backdrop-blur-sm py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((credit, index) => (
          <div key={index} className="flex items-center gap-4 mx-6 shrink-0">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="text-white/80 text-xs tracking-[0.2em] uppercase font-sans font-light">
              {credit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
