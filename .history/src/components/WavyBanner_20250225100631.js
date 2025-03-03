import { useEffect, useState } from "react";
import styles from "../styles/WavyBanner.module.css";

const WavyBanner = () => {
  const [mouseOffset, setMouseOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offset = (e.clientX / window.innerWidth - 0.5) * 15; // Subtle effect range (-7.5 to 7.5)
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
              top: `${i * 6}px`, // Space waves evenly
              animationDelay: `-${Math.random() * 8}s`, // Ensures no sync/reset effect
              transform: `translateX(${mouseOffset}px)`, // Mouse interaction effect
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
