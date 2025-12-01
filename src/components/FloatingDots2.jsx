import { useEffect, useState } from "react";

function FloatingDots2({ count = 15 }) {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const maxSize = isMobile ? 4 : 12;
    const minSize = isMobile ? 2 : 7;

    const generatedDots = Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * maxSize + minSize,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    setDots(generatedDots);
  }, [count]);

  return (
    <div className="floating-dots2">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="dot2"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animationDuration: `${dot.duration}s`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingDots2;
