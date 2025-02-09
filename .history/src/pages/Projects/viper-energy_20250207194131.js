import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Viper.module.css";
import Image from "next/image";

export default function ViperEnergy() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.portrait}>
            <Image
              src="/images/cans.png"
              alt="Portrait of Me"
              layout="intrinsic" // Keeps the original dimensions
              width={1000} // Adjust width as needed
              height={800} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Viper Energy
Can Design</h1>
            <p className={styles.bio}>
            Viper Energy is a high intensity energy drink available in three bold flavours. Its striking design features vibrant colours that reflect the drink’s powerful taste and effects. A dynamic snake wraps around the can, creating a sense of motion and energy while reinforcing the brand’s fierce identity.   </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
