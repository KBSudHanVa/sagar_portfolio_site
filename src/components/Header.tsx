import { useState, useEffect } from "react";
import { useMobileMenu } from "../hooks/use-mobile-menu";
// import { Menu, X } from "lucide-react";

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-md border-b border-primary/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo & Title */}
        <a
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <img
            src={import.meta.env.VITE_PROFILE_IMAGE_URL}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-primary object-cover transition-all duration-300 group-hover:border-secondary"
            onClick={() => scrollToSection("contact")}
          />
          <div>
            <h1 className="font-display font-bold text-xl tracking-tight text-light">
              VFX <span className="text-primary">Coordinator</span>
            </h1>
            <p className="text-xs text-light/70">Senior Project Coordinator</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["about", "projects", "skills"].map((section) => (
            <a
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-light/80 hover:text-primary transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-light px-4 py-2 rounded-full hover:bg-primary/80 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <div
            className={`w-6 h-0.5 bg-white mb-1 transform transition duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-white transition duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
        style={{
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <nav className="flex flex-col p-4 font-medium rounded-lg">
          {["about", "projects", "skills"].map((section) => (
            <a
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-light/80 hover:text-primary transition-colors py-2 cursor-pointer text-center"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <a
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-light px-4 py-2 mt-2 rounded-full hover:bg-primary/80 transition-colors text-center cursor-pointer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
