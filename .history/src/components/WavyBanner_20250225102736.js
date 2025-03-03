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

              height: `${1 + Math.random() * 2}px`, // Ultra-thin lines
              width: `${80 + Math.random() * 20}%`, // Randomized widths
              top: `${i * 2}vh`, // Spread out over 80vh
              opacity: `${0.1 + Math.random() * 0.3}`, // Soft, varying opacity
              animationDuration: `${8 + Math.random() * 4}s`, // Randomized speeds
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default WavyBanner;
