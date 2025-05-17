import { useState, useEffect } from "react";

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  // Close menu on window resize (when switching to desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
}
