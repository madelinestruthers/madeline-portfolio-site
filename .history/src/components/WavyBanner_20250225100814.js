import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
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
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
