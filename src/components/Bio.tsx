import { epkData } from "@/data/epkData";

export default function Bio() {
  const { artist, biography } = epkData;

  return (
    <section id="bio" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">001</span>
          <span className="rule" />
          <span className="label">Biography</span>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-16">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border border-border">
              <img
                src={artist.bioImage}
                alt={artist.name}
                className="w-full h-full object-cover img-grayscale"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-primary text-primary-fg font-display font-bold uppercase text-xs px-3 py-1.5 tracking-wider">
              Playback Singer
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col justify-between">
            {/* Headline */}
            <h2
              className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-8"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
            >
              The <span className="text-primary">Artist</span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 mb-10">
              {biography.paragraphs.map((p, i) => (
                <p key={i} className="text-secondary text-sm md:text-base font-light leading-relaxed max-w-lg">
                  {p}
                </p>
              ))}
            </div>

            {/* Fact grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border">
              {biography.facts.map((fact, i) => (
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
        </div>
      </div>
    </section>
  );
}
