import { useEffect, useState } from "react";
import styles from "../styles/WavyBanner.module.css";

const WavyBanner = () => {
  const [mouseOffset, setMouseOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const offset = (e.clientX / window.innerWidth - 0.5) * 20; // Get range from -10 to 10
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
              animationDelay: `${i * 0.2}s`,
              top: `${i * 5}px`,
              transform: `translateX(${mouseOffset}px)`, // Subtle wave movement on hover
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
