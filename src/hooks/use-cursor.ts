import { useRef, useCallback } from "react";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  
  const addEventListeners = useCallback(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;
    
    if (!cursor || !cursorFollower) return;
    
    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      setTimeout(() => {
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
      }, 100);
    };
    
    const onMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorFollower.style.opacity = "0.5";
    };
    
    const onMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorFollower.style.opacity = "0";
    };
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    
    // Add hover effect to interactive elements
    const addHoverToElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, .skill-badge, [role="button"], [class*="cursor-pointer"]');
      
      interactiveElements.forEach(element => {
        element.addEventListener("mouseenter", () => {
          cursor.classList.add("scale-150");
          cursorFollower.classList.add("scale-75");
        });
        
        element.addEventListener("mouseleave", () => {
          cursor.classList.remove("scale-150");
          cursorFollower.classList.remove("scale-75");
        });
      });
    };
    
    // Wait for DOM to be fully loaded
    setTimeout(addHoverToElements, 500);
    
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);
  
  return { cursorRef, cursorFollowerRef, addEventListeners };
}
