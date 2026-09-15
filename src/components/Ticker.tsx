import { epkData } from "@/data/epkData";

export default function Ticker() {
  const { tickerItems } = epkData;
  const items = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="relative z-10 overflow-hidden border-y border-border bg-bg py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 mx-6 shrink-0">
            <span className="text-primary text-[10px]">●</span>
            <span className="font-display font-medium text-white text-sm uppercase tracking-[0.25em]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
