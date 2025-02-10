import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function MechanicalObject() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Mechanical Object Vector</h1>
            <p className={styles.bio}>
            A mechanical object was recreated in Illustrator using precise shapes and gradients to replicate the original image with accuracy. The design emphasizes realistic depth, texture, and detail, showcasing the object's structure through vector-based precision.
            </p>
            </div>
            <div className={styles.portrait}>
            <Image
              src="/images/mechanical-drawing.png"
              alt="Portrait of Me"
              width={600} // Adjust width as needed
              height={60} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
            <div className={styles.bioContainer}>
            <h1 className={styles.h1Style}>Original Image</h1>
            <p className={styles.bio}>
            The original image featured a detailed mechanical object with intricate components, depth, and metallic textures.            </p>
            <div className={styles.portrait}>
            <Image
              src="/images/mechanical-drawing.png"
              alt="Portrait of Me"
              width={600} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        
            </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
