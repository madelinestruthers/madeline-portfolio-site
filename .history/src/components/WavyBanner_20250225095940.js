import styles from "./WavyBanner.module.css";
import { useEffect, useState } from "react";

const WavyBanner = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  // Handle mouse movement
  const handleMouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.banner}>
      <div className={styles.waveWrapper}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className={styles.wave}
            style={{
              animationDelay: `${i * 0.2}s`,
              top: `${i * 5}px`, // Adjust vertical spacing
              transform: `translateX(${(mouseX / window.innerWidth) * 20 - 10}px) 
                          translateY(${(mouseY / window.innerHeight) * 5 - 2}px)`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
