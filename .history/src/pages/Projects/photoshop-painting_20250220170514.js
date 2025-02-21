import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Opal() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
         
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Photoshop Cat Painting </h1>
            <p className={styles.bio}>
            A memorial painting of Opal the cat was created in Photoshop, featuring a soft, blended style with a blue–orange complementary color scheme. A gentle halo adds a symbolic touch, capturing the cat’s essence with warmth and care.              </p>
          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/opal-halo.jpg"
              alt="Portrait of Me"
              layout="intrinsic" // Keeps the original dimensions
              width={600} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
