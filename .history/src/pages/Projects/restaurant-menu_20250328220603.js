import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import WaveCanvas from "@/components/WaveCanvas";

export default function Menu() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>

          <div className={styles.bioContainer}>
            <h1 className={styles.h1Style}>Restaurant Menu <br />
              Design</h1>
            <p className={styles.bio}>
              A brunch restaurant menu designed to optimize typography, ensuring clear hierarchy and readability while maintaining visual appeal. Thoughtful use of spacing, font selection, and layout created a functional yet stylish presentation. Additionally, a custom logo was developed to establish Blue Bison’s distinctive brand identity and cohesive aesthetic.
            </p>

          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/bison-sign.jpg"
              alt="Brunch Menu"
              width={660} // Adjust width as needed
              height={500} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <div className={styles.carouselWrapper}>
        
            <Carousel />
          </div>

        </main>
      </div>
      <WaveCanvas/>
      <Footer />
    </>
  );
}
