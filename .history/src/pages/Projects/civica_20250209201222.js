import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Civica.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Suki() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Poster for Suki Waterhouse</h1>
            <p className={styles.bio}>
            A poster inspired by Suki Waterhouse was designed, incorporating soft vintage tones and funky typography. The composition captures her unique aesthetic, creating a visually striking and cohesive tribute to her artistic style.   </p>
          
            <div className={styles.portrait}>
            <Image
              src="/images/suki.png"
              alt="Portrait of Me"
              width={600} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          
          </div>
       

          <iframe  width="800" height="450" src="https://embed.figma.com/design/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=0-1&embed-host=share" allowfullscreen></iframe>
          
            <iframe width="800" height="450" src="https://embed.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600&embed-host=share" allowfullscreen></iframe>


        </main>
      </div>
      <Footer />
    </>
  );
}
