import { useEffect, useState } from "react";
import { epkData } from "@/data/epkData";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/96 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="font-display font-bold text-white text-xl uppercase tracking-tight leading-none">
          BSG<span className="text-primary">.</span>
        </a>

        {/* Center nav links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Bio", href: "#bio" },
            { label: "Music", href: "#music" },
            { label: "Photos", href: "#photos" },
            { label: "Tour", href: "#tour" },
            { label: "Press", href: "#press" },
            { label: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary text-sm font-light hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Pulsing BOOK button */}
        <a
          href={`mailto:${epkData.artist.bookingEmail}`}
          className="animate-pulse-cta bg-primary text-primary-fg font-display font-bold uppercase text-sm px-5 py-2.5 tracking-wide transition-colors hover:bg-white"
        >
          Book
        </a>
      </div>
    </nav>
  );
}
