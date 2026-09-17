import { useState } from "react";
import { Mail, Instagram, Send, Check } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function Contact({ content }: { content: SiteContent }) {
  const { contact } = content;
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    date: "",
    city: "",
    eventType: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const words = contact.heading.split(" ");
  const highlightIdx = words.findIndex((w) =>
    w.toLowerCase().includes(contact.highlightWord.toLowerCase())
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Booking Inquiry — ${formState.eventType || "Live Bollywood Music"} — ${formState.date || "TBD"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nEvent Date: ${formState.date}\nCity: ${formState.city}\nEvent Type: ${formState.eventType}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${contact.bookingEmail}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  const inputClass = "w-full bg-card border border-border text-white px-4 py-3 text-sm focus:border-primary outline-none transition-colors placeholder:text-muted";

  return (
    <section id="contact" className="relative z-10 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Heading */}
        <h2
          className="font-display font-bold uppercase leading-[0.85] tracking-tight text-white mb-6"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          {words.map((word, i) => (
            <span key={i} className={i === highlightIdx ? "text-primary" : ""}>
              {word}{i < words.length - 1 ? " " : ""}
            </span>
          ))}
        </h2>
        <p className="text-secondary text-sm font-light leading-relaxed max-w-lg mb-12">
          {contact.blurb}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-16">
          {/* Left — Booking form */}
          <div>
            <h3 className="font-display font-bold text-white text-lg uppercase mb-6">
              Booking <span className="text-primary">Sheet</span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">Your Name</label>
                  <input
                    required
                    className={inputClass}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Full name"
                  />
                </div>
                <div>
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">Email</label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">Event Date</label>
                  <input
                    className={inputClass}
                    value={formState.date}
                    onChange={(e) => setFormState({ ...formState, date: e.target.value })}
                    placeholder="e.g. 15 Dec 2026"
                  />
                </div>
                <div>
                  <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">City</label>
                  <input
                    className={inputClass}
                    value={formState.city}
                    onChange={(e) => setFormState({ ...formState, city: e.target.value })}
                    placeholder="e.g. New York"
                  />
                </div>
              </div>
              <div>
                <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">Event Type</label>
                <input
                  className={inputClass}
                  value={formState.eventType}
                  onChange={(e) => setFormState({ ...formState, eventType: e.target.value })}
                  placeholder="e.g. Wedding, Corporate Gala, Campus Show"
                />
              </div>
              <div>
                <label className="text-muted text-[10px] uppercase tracking-[0.2em] mb-1.5 block">Tell me about your evening</label>
                <textarea
                  required
                  rows={4}
                  className={inputClass}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="The date, the city, the people who will be in the room..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-colors hover:bg-white"
              >
                {sent ? <><Check className="w-4 h-4" /> Opening your email...</> : <><Mail className="w-4 h-4" /> Book Now</>}
              </button>
            </form>
          </div>

          {/* Right — Reach Out + contact cards */}
          <div>
            <h3 className="font-display font-bold text-white text-lg uppercase mb-6">
              Other <span className="text-primary">Ways</span>
            </h3>

            {/* Reach Out — Instagram DM */}
            <a
              href={contact.instagramDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-border p-5 mb-6 group transition-all hover:border-primary hover:bg-card"
            >
              <div className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary transition-colors shrink-0">
                <Instagram className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm uppercase">Reach Out</div>
                <div className="text-muted text-[10px] uppercase tracking-wider mt-0.5">Direct message on Instagram</div>
              </div>
              <Send className="w-4 h-4 text-muted group-hover:text-primary transition-colors ml-auto" />
            </a>

            {/* Contact cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              {contact.contacts.map((c, i) => (
                <a
                  key={i}
                  href={`mailto:${c.email}`}
                  className="bg-bg p-4 group transition-colors hover:bg-card"
                >
                  <div className="text-primary text-[9px] uppercase tracking-[0.25em] mb-2">
                    {c.label}
                  </div>
                  <div className="text-white text-xs font-light mb-1">
                    {c.name}
                  </div>
                  <div className="text-secondary text-[10px] font-light break-all group-hover:text-primary transition-colors">
                    {c.email}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
