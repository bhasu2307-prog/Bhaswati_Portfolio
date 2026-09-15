import { epkData } from "@/data/epkData";

export default function Press() {
  const { press, pressLogos } = epkData;

  return (
    <section id="press" className="relative z-10 bg-[#0d0d0d] border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">005</span>
          <span className="rule" />
          <span className="label">Press</span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-12"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          What They're <span className="text-primary">Saying</span>
        </h2>

        {/* Quote grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border mb-16">
          {press.map((item, i) => (
            <div key={i} className="bg-[#0d0d0d] p-6 md:p-8 flex flex-col">
              {/* Quotation mark */}
              <div className="font-display font-bold text-primary text-5xl leading-none mb-4">
                "
              </div>

              {/* Quote */}
              <p className="text-secondary text-sm font-light leading-relaxed flex-1 mb-6">
                {item.quote}
              </p>

              {/* Outlet + score */}
              <div className="flex items-center justify-between border-t border-border pt-4">
                <span className="font-display font-bold text-white text-sm uppercase tracking-wide">
                  {item.outlet}
                </span>
                <span className="text-primary font-display font-bold text-sm">
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen In logo strip */}
        <div className="border-t border-border pt-10">
          <p className="text-muted text-[10px] uppercase tracking-[0.3em] text-center mb-6">
            As Seen In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {pressLogos.map((logo, i) => (
              <span
                key={i}
                className="font-display font-medium text-muted text-sm md:text-base uppercase tracking-wider transition-colors hover:text-primary cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
