import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.waveWrapper}>
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className={styles.wavyLine}
            style={{
              animationDelay: `-${Math.random() * 3}s`, // Random delay for variety
              height: `${15 + Math.random() * 25}px`, // Varying wave heights
              width: `${60 + Math.random() * 80}%`, // Randomized widths
              top: `${i * 2}vh`, // Evenly spaced across 80vh
              opacity: `${0.2 + Math.random() * 0.3}`, // Soft, varying opacity
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;

