import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Bio from "@/components/Bio";
import Music from "@/components/Music";
import Photos from "@/components/Photos";
import VideoStrip from "@/components/VideoStrip";
import Tour from "@/components/Tour";
import Press from "@/components/Press";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-bg overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Bio />
        <Music />
        <Photos />
        <VideoStrip />
        <Tour />
        <Press />
        <Contact />
      </main>
      <Footer />
      <StickyBookingBar />
    </div>
  );
}

export default App;
