import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function Biography() {
  const { biography } = epkData;

  return (
    <section className="relative z-10 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-gold tracking-[0.25em] text-xs uppercase mb-2 font-sans font-light">About</p>
        <h2 className="font-serif text-3xl font-bold text-white mb-6">The Artist</h2>
        <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mb-8" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        className="glass-card rounded-3xl p-7"
      >
        <p className="text-white/80 text-sm leading-relaxed font-sans font-light mb-7">
          {biography.text}
        </p>

        <div className="space-y-3">
          {biography.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center">
                <Check className="w-3 h-3 text-gold" />
              </div>
              <p className="text-white/70 text-sm font-sans font-light leading-relaxed">
                {highlight}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
