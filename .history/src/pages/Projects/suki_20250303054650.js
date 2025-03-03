import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Suki() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Poster for Suki Waterhouse</h1>
            <p className={styles.bio}>
            A poster inspired by Suki Waterhouse was designed, incorporating soft vintage tones and funky typography. The composition captures her unique aesthetic, creating a visually striking and cohesive tribute to her artistic style.            </p>
          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/suki.png"
              alt="Portrait of Me"
              width={600} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <br/><br/>
          <div className={styles.portrait}>
            <Image
              src="/images/poster-mockup.jpg"
              alt="Poster mockup"
              width={900} // Adjust width as needed
              height={600} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
