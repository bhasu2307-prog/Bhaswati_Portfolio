import { motion } from "framer-motion";
import { Mail, Instagram, Facebook, Youtube, Music2, Headphones } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Footer() {
  const { artist, socials, streaming } = epkData;

  return (
    <footer className="relative z-10 px-6 pt-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10"
      >
        <p className="text-gold tracking-[0.25em] text-xs uppercase mb-2 font-sans font-light">Connect</p>
        <h2 className="font-serif text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mt-4 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        className="glass-card rounded-3xl p-7"
      >
        {/* Streaming Platforms */}
        <div className="mb-7">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-4 text-center font-sans">Stream On</p>
          <div className="grid grid-cols-2 gap-3">
            {streaming.map((platform, index) => (
              <a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 rounded-xl py-3.5 transition-all duration-300 active:scale-95 min-h-[48px]"
              >
                {platform.icon === "spotify" && <Headphones className="w-4 h-4 text-gold" />}
                {platform.icon === "apple" && <Music2 className="w-4 h-4 text-gold" />}
                {platform.icon === "jiosaavn" && <Music2 className="w-4 h-4 text-gold" />}
                {platform.icon === "wynk" && <Music2 className="w-4 h-4 text-gold" />}
                <span className="text-white/80 text-sm font-sans font-light">{platform.platform}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-6" />

        {/* Social Handles */}
        <div className="mb-7">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-4 text-center font-sans">Follow</p>
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.platform}
                className="w-12 h-12 rounded-full bg-white/5 hover:bg-gold/10 border border-white/10 hover:border-gold/30 flex items-center justify-center transition-all duration-300 active:scale-90"
              >
                {social.icon === "instagram" && <Instagram className="w-5 h-5 text-gold" />}
                {social.icon === "facebook" && <Facebook className="w-5 h-5 text-gold" />}
                {social.icon === "youtube" && <Youtube className="w-5 h-5 text-gold" />}
              </a>
            ))}
          </div>
          <p className="text-center text-white/40 text-xs mt-3 font-sans">{artist.socialHandle}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-6" />

        {/* Booking Contact */}
        <a
          href={`mailto:${artist.bookingEmail}`}
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-dark to-gold text-charcoal-dark font-semibold py-4 rounded-xl transition-all duration-300 hover:from-gold hover:to-gold-light active:scale-95 min-h-[48px]"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm">Book Now</span>
        </a>
        <p className="text-center text-white/40 text-xs mt-3 font-sans break-all">
          {artist.bookingEmail}
        </p>
      </motion.div>

      {/* Copyright */}
      <p className="text-center text-white/25 text-[10px] mt-8 font-sans tracking-wider">
        © {new Date().getFullYear()} {artist.name}. All Rights Reserved.
      </p>
    </footer>
  );
}
