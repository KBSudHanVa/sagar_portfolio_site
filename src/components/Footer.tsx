import { useEffect, useState } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <footer className="py-10 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img 
              src={import.meta.env.VITE_PROFILE_IMAGE_URL}
              alt="Profile Picture" 
              className="w-10 h-10 rounded-full border-2 border-primary object-cover"
            />
            <div>
              <h2 className="font-display font-bold text-lg tracking-tight">VFX <span className="text-primary">Coordinator</span></h2>
              <p className="text-xs text-light/70">Bringing creative visions to life</p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a onClick={() => scrollToSection("about")} className="text-light/80 hover:text-primary transition-colors cursor-pointer">About</a>
            <a onClick={() => scrollToSection("projects")} className="text-light/80 hover:text-primary transition-colors cursor-pointer">Projects</a>
            <a onClick={() => scrollToSection("skills")} className="text-light/80 hover:text-primary transition-colors cursor-pointer">Skills</a>
            <a onClick={() => scrollToSection("contact")} className="text-light/80 hover:text-primary transition-colors cursor-pointer">Contact</a>
          </div>
          
          <p className="text-light/50 text-sm">
            &copy; {currentYear} VFX Coordinator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
