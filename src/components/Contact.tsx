import { useState } from "react";
import { Mail, Instagram, Check } from "lucide-react";
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

  function handleSendMail(e: React.FormEvent) {
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
          style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
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

        {/* Booking form — full width */}
        <div className="max-w-2xl">
          <h3 className="font-display font-bold text-white text-lg uppercase mb-6">
            Booking <span className="text-primary">Sheet</span>
          </h3>
          <form onSubmit={handleSendMail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
            {/* Two buttons side by side */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Book Now — Instagram DM */}
              <a
                href={contact.instagramDmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-fg font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-colors hover:bg-white"
              >
                <Instagram className="w-4 h-4" />
                Book Now
              </a>
              {/* Send Mail — opens email client */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 border border-border text-white font-display font-bold uppercase text-sm px-6 py-3.5 tracking-wide transition-all hover:border-primary hover:text-primary"
              >
                {sent ? <><Check className="w-4 h-4" /> Opening...</> : <><Mail className="w-4 h-4" /> Send Mail</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
