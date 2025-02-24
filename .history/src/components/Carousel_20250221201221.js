import { useState } from "react";
import styles from "@/styles/Carousel.module.css";

const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className={styles.carousel}>
      <div className={styles.imageWrapper} key={index}>
        <img src={images[index]} alt={`Slide ${index + 1}`} className={styles.image} />
      </div>
      <button onClick={prevSlide} className={styles.prev}>‹</button>
      <button onClick={nextSlide} className={styles.next}>›</button>
    </div>
  );
}
