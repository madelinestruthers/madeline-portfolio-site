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
              top: `${i * 5}px`, // Slightly closer stacking
              opacity: `${0.05 + (i / 40)}`, // Gradual opacity for depth
              animationDelay: `-${Math.random() * 10}s`, // Avoids sync/reset issues
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
