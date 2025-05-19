// src/components/DevFooter.tsx
import { useEffect, useState } from "react";

export default function DevFooter() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      if (isBottom) {
        setShowFooter(true);
        setTimeout(() => setShowFooter(false), 4000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-700 ease-in-out ${
        showFooter ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-4 px-6 shadow-xl rounded-t-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm md:text-base">
            <p className="font-semibold">🚀 Need a site like this? Let me build it for you!</p>
            <p className="text-xs mt-1">© KBS (Crazy Design)</p>
            <p className="text-xs">📞 +91 7674817692 | ✉️ sudhanvakonakalla1999@gmail.com</p>
          </div>

          {/* Cat Animation */}
          <div className="w-16 h-16 relative overflow-hidden">
            <img
              src="https://media.giphy.com/media/jpbnoe3UIa8TU8LM13/giphy.gif"
              alt="Cat closing"
              className="absolute bottom-0 right-0 w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
