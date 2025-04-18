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
          <div className={styles.bioContainer}>
            <h1 className={styles.h1Style}>Hello There</h1>
            <p className={styles.bio}>
              My name is Madeline. I am Passionate about crafting visually compelling, user focused, and functional digital experiences. Outside of the digital realm, I enjoy appreciating nature, feeding my neighborhood crows, and photosynthesizing in the sun. <br/> <br/>After completing the challenging and rewarding Digital Design and Development program, I feel prepared to take on the dynamic and ever evolving digital world! I’m excited about the opportunity to connect and look forward to hearing from you.
            </p>
          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Me"
              width={400} // Adjust width as needed
              height={670} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
