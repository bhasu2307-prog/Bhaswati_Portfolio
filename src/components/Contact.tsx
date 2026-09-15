import { Mail } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Contact() {
  const { contacts, artist } = epkData;

  return (
    <section id="contact" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Section kicker */}
        <div className="section-kicker">
          <span className="num">006</span>
          <span className="rule" />
          <span className="label">Contact</span>
        </div>

        {/* Grid: headline left, cards right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-16">
          {/* Left — headline + blurb */}
          <div>
            <h2
              className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-6"
              style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
            >
              Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-secondary text-sm font-light leading-relaxed max-w-sm mb-8">
              For bookings, press inquiries, sync licensing, or general questions — reach out to the relevant contact below.
            </p>
            <a
              href={`mailto:${artist.bookingEmail}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-colors hover:bg-white"
            >
              <Mail className="w-4 h-4" />
              Book Now
            </a>
          </div>

          {/* Right — contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={`mailto:${contact.email}`}
                className="bg-bg p-5 group transition-colors hover:bg-card"
              >
                <div className="text-primary text-[9px] uppercase tracking-[0.25em] mb-2">
                  {contact.label}
                </div>
                <div className="text-white text-sm font-light mb-1">
                  {contact.name}
                </div>
                <div className="text-secondary text-xs font-light break-all group-hover:text-primary transition-colors">
                  {contact.email}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
