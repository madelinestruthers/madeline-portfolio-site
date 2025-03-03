import styles from "./WavyBanner.module.css";

const WavyBanner = () => {
  return <div className={styles.banner}>
      <div className={styles.waveWrapper}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </div>
    </div>
};

export default WavyBanner;