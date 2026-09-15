import { Instagram, Facebook, Youtube, Headphones, Music2 } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Footer() {
  const { artist, socials, streaming } = epkData;

  return (
    <footer className="relative z-10 bg-bg">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top section: logo + socials + streaming */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-border">
          {/* Logo */}
          <div>
            <div className="font-display font-bold text-white text-2xl uppercase tracking-tight leading-none mb-2">
              Bhaswati<span className="text-primary">.</span>
            </div>
            <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
              {artist.subtitle}
            </p>
          </div>

          {/* Socials */}
          <div>
            <p className="text-muted text-[10px] uppercase tracking-[0.25em] mb-3">Follow</p>
            <div className="flex gap-3">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                  className="w-10 h-10 border border-border flex items-center justify-center transition-all hover:border-primary hover:bg-primary/10"
                >
                  {social.icon === "instagram" && <Instagram className="w-4 h-4 text-secondary hover:text-primary" />}
                  {social.icon === "facebook" && <Facebook className="w-4 h-4 text-secondary hover:text-primary" />}
                  {social.icon === "youtube" && <Youtube className="w-4 h-4 text-secondary hover:text-primary" />}
                </a>
              ))}
            </div>
          </div>

          {/* Streaming */}
          <div>
            <p className="text-muted text-[10px] uppercase tracking-[0.25em] mb-3">Stream On</p>
            <div className="flex flex-wrap gap-2">
              {streaming.map((platform, i) => (
                <a
                  key={i}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border px-3 py-2 transition-all hover:border-primary"
                >
                  {platform.icon === "spotify" && <Headphones className="w-3.5 h-3.5 text-secondary" />}
                  {platform.icon === "apple" && <Music2 className="w-3.5 h-3.5 text-secondary" />}
                  {platform.icon === "jiosaavn" && <Music2 className="w-3.5 h-3.5 text-secondary" />}
                  {platform.icon === "wynk" && <Music2 className="w-3.5 h-3.5 text-secondary" />}
                  <span className="text-secondary text-[10px] uppercase tracking-wider">{platform.platform}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {artist.name}. All Rights Reserved.
          </p>
          <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
            {artist.socialHandle}
          </p>
        </div>
      </div>
    </footer>
  );
}
