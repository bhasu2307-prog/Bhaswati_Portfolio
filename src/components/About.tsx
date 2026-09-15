import type { SiteContent } from "@/data/epkData";

export default function About({ content }: { content: SiteContent }) {
  const { about } = content;

  // Split heading to highlight one word
  const words = about.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(about.highlightWord.toLowerCase())
  );

  return (
    <section id="about" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">001</span>
          <span className="rule" />
          <span className="label">About</span>
        </div>

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

        {/* Two images + text grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Image 1 */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden border border-border">
              <img
                src={about.image1}
                alt={about.image1Label}
                loading="lazy"
                className="w-full h-full object-cover img-grayscale"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-primary text-primary-fg font-display font-bold uppercase text-xs px-3 py-1.5 tracking-wider">
              {about.image1Label}
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative md:mt-16">
            <div className="aspect-[3/4] overflow-hidden border border-border">
              <img
                src={about.image2}
                alt={about.image2Label}
                loading="lazy"
                className="w-full h-full object-cover img-grayscale"
              />
            </div>
            <div className="absolute bottom-0 left-0 bg-primary text-primary-fg font-display font-bold uppercase text-xs px-3 py-1.5 tracking-wider">
              {about.image2Label}
            </div>
          </div>
        </div>

        {/* Paragraphs */}
        <div className="space-y-5 mb-12 max-w-2xl">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-secondary text-sm md:text-base font-light leading-relaxed">
              {p}
            </p>
          ))}
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
