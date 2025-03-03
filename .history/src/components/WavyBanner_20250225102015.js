import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.waveWrapper}>
        {Array.from({ length: 35 }).map((_, i) => (
          <div
            key={i}
            className={`${styles.wavyLine}`}
            style={{
              animationDelay: `-${Math.random() * 2}s`, // Random delay for a natural effect
              height: `${20 + Math.random() * 20}px`, // Varying wave heights
              width: `${80 + Math.random() * 100}%`, // Randomized widths
              opacity: `${0.3 + Math.random() * 0.4}`, // Subtle opacity changes
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
