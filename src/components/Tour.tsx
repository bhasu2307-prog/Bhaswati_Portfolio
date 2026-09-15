import { epkData } from "@/data/epkData";
import type { TourDate } from "@/data/epkData";

export default function Tour() {
  const { tour } = epkData;

  return (
    <section id="tour" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">004</span>
          <span className="rule" />
          <span className="label">Tour Dates</span>
        </div>

        {/* Headline */}
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-12"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          Live <span className="text-primary">Dates</span>
        </h2>

        {/* Tour rows */}
        <div className="border border-border">
          {tour.map((date, i) => (
            <TourRow key={i} date={date} isLast={i === tour.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TourRow({ date, isLast }: { date: TourDate; isLast: boolean }) {
  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] md:grid-cols-[120px_1fr_1fr_auto] gap-4 md:gap-8 items-center px-4 md:px-6 py-5 ${
        !isLast ? "border-b border-border" : ""
      } transition-colors duration-200 hover:bg-card`}
    >
      {/* Date */}
      <div className="text-center md:text-left">
        <div className="font-display font-bold text-white text-base leading-none">
          {date.date}
        </div>
        <div className="text-muted text-[10px] uppercase tracking-wider mt-1">
          {date.day}
        </div>
      </div>

      {/* Venue */}
      <div>
        <div className="text-white text-sm font-light">{date.venue}</div>
      </div>

      {/* City */}
      <div className="text-secondary text-sm font-light hidden md:block">
        {date.city}
      </div>

      {/* Status / CTA */}
      <div>
        {date.status === "soldout" ? (
          <span className="font-display font-bold uppercase text-[10px] tracking-wider text-accent border border-accent px-3 py-1.5">
            Sold Out
          </span>
        ) : (
          <a
            href={date.ticketUrl || "#"}
            className="font-display font-bold uppercase text-[10px] tracking-wider text-primary-fg bg-primary px-3 py-1.5 transition-colors hover:bg-white"
          >
            Tickets
          </a>
        )}
      </div>
    </div>
  );
}
