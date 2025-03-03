import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.waveWrapper}>
        {Array.from({ length: 50 }).map((_, i) => ( // Increased to 50 waves
          <div
            key={i}
            className={styles.wave}
            style={{
              top: `${i * 3}px`, // Reduced spacing for more density
              opacity: `${0.05 + (i / 100)}`, // Gradual opacity for depth effect
              animationDelay: `-${Math.random() * 10}s`, // Ensures smooth flow
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
