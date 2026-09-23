import { useState, useEffect } from "react";
import { useSiteContent } from "@/hooks/useSiteContent";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Photos from "@/components/Photos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyBookingBar from "@/components/StickyBookingBar";
import AdminPanel from "@/components/AdminPanel";

function App() {
  const { content, loading } = useSiteContent();
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#admin") {
      setShowAdmin(true);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="font-display font-bold text-primary text-lg uppercase tracking-[0.3em] animate-pulse">
          Loading
        </div>
      </div>
    );
  }

  if (showAdmin) {
    return <AdminPanel onClose={() => { setShowAdmin(false); window.location.hash = ""; }} />;
  }

  return (
    <div className="relative min-h-screen w-full bg-bg overflow-x-hidden">
      <Nav content={content} />
      <main>
        <Hero content={content} />
        <About content={content} />
        <Music content={content} />
        <Photos content={content} />
        <Contact content={content} />
      </main>
      <Footer content={content} />
      <StickyBookingBar content={content} />
    </div>
  );
}

export default App;
