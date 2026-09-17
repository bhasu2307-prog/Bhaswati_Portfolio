import { useEffect, useState } from "react";
import { Instagram, Facebook, Youtube, Headphones, Music2, Linkedin } from "lucide-react";
import type { SiteContent } from "@/data/epkData";

export default function Nav({ content }: { content: SiteContent }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = content.footer.socials;

  const iconMap: Record<string, React.ReactNode> = {
    instagram: <Instagram className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    youtube: <Youtube className="w-4 h-4" />,
    linkedin: <Linkedin className="w-4 h-4" />,
    spotify: <Headphones className="w-4 h-4" />,
    apple: <Music2 className="w-4 h-4" />,
  };

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Music", href: "#music" },
    { label: "Photos", href: "#photos" },
    { label: "Tech Rider", href: "#tech-rider" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/96 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary text-sm font-light hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-secondary text-[11px] font-light hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
              className="w-9 h-9 border border-border flex items-center justify-center text-secondary transition-all hover:border-primary hover:text-primary"
            >
              {iconMap[social.icon] || <Headphones className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
