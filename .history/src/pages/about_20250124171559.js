import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.portrait}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Me"
              layout="intrinsic" // Keeps the original dimensions
              width={300} // Adjust width as needed
              height={515} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <div className={styles.bioContainer}>
            <h1>Hello There! </h1>
            <h2>My name is Madeline</h2>
            <p className={styles.bio}>
              Passionate about crafting visually compelling, user-focused, and functional digital experiences. Outside of the digital realm, I enjoy appreciating nature, feeding my neighborhood crows, and photosynthesizing in the sun.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
