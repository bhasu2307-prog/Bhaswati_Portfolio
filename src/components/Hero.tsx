import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Hero() {
  const { artist, heroCta } = epkData;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-24 overflow-hidden">
      {/* Subtle gradient overlay at bottom for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal-dark pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Decorative top line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
        />

        <p className="text-gold-light tracking-[0.3em] text-xs uppercase mb-4 font-sans font-light">
          Bollywood Playback Singer
        </p>

        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-white mb-3 drop-shadow-2xl">
          {artist.name.split(" ")[0]}
          <span className="block text-gold-gradient italic font-medium">
            {artist.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="text-white/70 text-sm sm:text-base font-sans font-light tracking-wide mb-10 max-w-md">
          {artist.subtitle}
        </p>

        {/* Primary CTA — pulsating */}
        <motion.a
          href={heroCta.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="animate-breathe relative inline-flex items-center gap-3 bg-gradient-to-r from-gold-dark to-gold text-charcoal-dark font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-colors hover:from-gold hover:to-gold-light min-h-[48px]"
        >
          <Play className="w-5 h-5 fill-current" />
          {heroCta.label}
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-[10px] tracking-widest uppercase mb-1">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
