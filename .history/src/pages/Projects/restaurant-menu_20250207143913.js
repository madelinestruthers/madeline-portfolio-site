import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.portrait}>
            <Image
              src="/images/menu-front.png"
              alt="Brunch Menu"
              layout="intrinsic" // Keeps the original dimensions
              width={600} // Adjust width as needed
              height={800} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Restaurant Menu</h1>
            <p className={styles.bio}>
            A poster inspired by Suki Waterhouse was designed, incorporating soft vintage tones and funky typography. The composition captures her unique aesthetic, creating a visually striking and cohesive tribute to her artistic style.            </p>
          </div>
          <div >
            <Image
              src="/images/menu-page-2.png"
              alt="Brunch Menu"
              layout="intrinsic" // Keeps the original dimensions
              width={600} // Adjust width as needed
              height={800} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
