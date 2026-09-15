import { motion } from "framer-motion";
import VideoCarousel from "./VideoCarousel";
import { epkData } from "@/data/epkData";

export default function MediaShowcase() {
  const { mediaCategories } = epkData;

  return (
    <section className="relative z-10 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-gold tracking-[0.25em] text-xs uppercase mb-2 font-sans font-light">Showcase</p>
        <h2 className="font-serif text-3xl font-bold text-white">Watch & Listen</h2>
        <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mt-4" />
      </motion.div>

      <div className="space-y-10">
        {mediaCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: catIndex * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4 px-0">
              <h3 className="font-serif text-lg text-white/90 font-medium">
                {category.title}
              </h3>
              <span className="text-white/30 text-xs uppercase tracking-wider">
                Swipe →
              </span>
            </div>
            <VideoCarousel title={category.title} videos={category.videos} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
