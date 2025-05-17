import { useEffect, useState } from "react";
import { useCursor } from "../hooks/use-cursor";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const { cursorRef, cursorFollowerRef, addEventListeners } = useCursor();
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    
    // If not mobile, add cursor event listeners
    if (!isMobile) {
      addEventListeners();
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile, addEventListeners]);
  
  if (isMobile) return null;
  
  return (
    <>
      <div 
        ref={cursorRef} 
        className="cursor hidden md:block w-5 h-5 rounded-full bg-primary fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.2s'
        }}
      ></div>
      <div 
        ref={cursorFollowerRef} 
        className="cursor-follower hidden md:block w-10 h-10 border-2 border-accent rounded-full fixed pointer-events-none z-[9998] opacity-50"
        style={{ 
          transform: 'translate(-50%, -50%)',
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
    </>
  );
}
