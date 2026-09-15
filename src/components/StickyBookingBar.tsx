import { Mail } from "lucide-react";
import { epkData } from "@/data/epkData";

export default function StickyBookingBar() {
  const { artist } = epkData;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none">
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href={`mailto:${artist.bookingEmail}`}
          className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-gold-dark to-gold text-charcoal-dark font-semibold py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:from-gold hover:to-gold-light active:scale-95 min-h-[48px] backdrop-blur-sm border border-gold/20"
        >
          <Mail className="w-5 h-5" />
          <span className="text-sm tracking-wide">Book Bhaswati</span>
        </a>
      </div>
    </div>
  );
}
