import Hero from "@/components/Hero";
import AuthorityMarquee from "@/components/AuthorityMarquee";
import MediaShowcase from "@/components/MediaShowcase";
import Biography from "@/components/Biography";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import { epkData } from "@/data/epkData";

function App() {
  const { artist } = epkData;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Fixed background layer (z-index -1) */}
      <div
        className="fixed-bg"
        style={{
          backgroundImage: `url(${artist.backgroundImage})`,
          backgroundColor: "#0a0a0a",
        }}
      />
      {/* Dark overlay over the fixed background */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 -z-10 bg-black/70"
      />

      {/* Foreground scrolling content */}
      <main className="relative z-10">
        <Hero />
        <AuthorityMarquee />
        <MediaShowcase />
        <Biography />
        <Footer />
      </main>

      {/* Sticky booking bar */}
      <StickyBookingBar />
    </div>
  );
}

export default App;
