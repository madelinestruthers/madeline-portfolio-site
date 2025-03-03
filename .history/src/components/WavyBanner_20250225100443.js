import { useEffect, useState } from "react";
import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
  const [mouseOffset, setMouseOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offset = (e.clientX / window.innerWidth - 0.5) * 15; // Get range from -7.5 to 7.5
      setMouseOffset(offset);
    };

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
              top: `${i * 6}px`, // Stack waves with spacing
              animationDelay: `${i * 0.2}s`,
              transform: `translateX(${mouseOffset}px)`, // Smooth horizontal movement on hover
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
