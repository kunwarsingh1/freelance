import { useEffect, useState } from "react";

export const FadeInView: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState<HTMLDivElement | null>(null);
  
    useEffect(() => {
      if (!ref) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        { threshold: 0.1 }
      );
  
      observer.observe(ref);
      return () => observer.disconnect();
    }, [ref]);
  
    return (
      <div
        ref={setRef}
        className={`transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    );
  };