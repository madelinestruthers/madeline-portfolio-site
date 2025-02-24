"use client";

import { useState } from "react";
import styles from "./Carousel.module.css";

const images = [
  "/images/menu-front.png",
  "/images/menu-page-2.png",
  "/images/menu-page-3.png",
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
