import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import WaveCanvas from "@/components/WaveCanvas";

export default function MechanicalObject() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Mechanical Object Vector</h1>
            <p className={styles.bio}>
            A mechanical object was recreated in Illustrator using precise shapes and gradients to replicate the original image with accuracy. The design emphasizes realistic depth, texture, and detail, showcasing the object's structure through vector based precision.
            </p>
            </div>
            <div className={styles.portrait}>
            <Image
              src="/images/mechanical-drawing.png"
              alt="mechanical object drawing"
              width={650} // Adjust width as needed
              height={450} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
           
        </main>
      </div>
      <WaveCanvas/>
      <Footer />
    </>
  );
}
