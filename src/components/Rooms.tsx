import type { SiteContent } from "@/data/epkData";

export default function Rooms({ content }: { content: SiteContent }) {
  const { rooms } = content;

  const words = rooms.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(rooms.highlightWord.toLowerCase())
  );

  return (
    <section id="rooms" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">004</span>
          <span className="rule" />
          <span className="label">Performance Spaces</span>
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

        {/* Rooms grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {rooms.items.map((room, i) => (
            <div key={i} className="bg-bg p-6 md:p-8 group transition-colors hover:bg-card">
              <div className="flex items-start gap-4">
                <span className="font-display font-bold text-primary text-2xl leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-bold text-white text-lg uppercase leading-tight mb-2 group-hover:text-primary transition-colors">
                    {room.title}
                  </h3>
                  <p className="text-secondary text-sm font-light leading-relaxed">
                    {room.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
