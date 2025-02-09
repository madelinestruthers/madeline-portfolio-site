import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Viper.module.css";
import Image from "next/image";

export default function ViperEnergy() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <main className={styles.container}>
          {/* Top Section */}
          <div className={styles.topSection}>
            <div className={styles.textContainer}>
              <h1 className={styles.h1Style}>Viper Energy Can Design</h1>
              <p className={styles.bio}>
                Viper Energy is a high intensity energy drink available in three bold flavors. 
                Its striking design features vibrant colors that reflect the drink’s powerful taste 
                and effects. A dynamic snake wraps around the can, creating a sense of motion and 
                energy while reinforcing the brand’s fierce identity.
              </p>
            </div>
            <div className={styles.mainImage}>
              <Image
                src="/images/cans.png"
                alt="Viper Energy Can Display"
                width={1000}
                height={750}
                priority
              />
            </div>
          </div>
        </main>

        {/* 🔥 Can Designs Section (Stacked on Mobile, Side-by-Side on Desktop) */}
        <section className={styles.imageGrid}>
          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-orange.png" 
              alt="Blueberry Venom flavor Viper Energy drink design" 
              width={820} 
              height={550} 
              className={styles.flatImage}
            />
            <Image 
              src="/images/viper-blue-front.png" 
              alt="Blueberry Venom flavor Viper Energy drink can" 
              width={1000} 
              height={800} 
              className={styles.canImage}
            />
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-berry.png" 
              alt="Fangberry Fusion flavor Viper Energy drink design" 
              width={920} 
              height={650} 
              className={styles.flatImage}
            />
            <Image 
              src="/images/viper-berry-front.png" 
              alt="Fangberry Fusion flavor Viper Energy drink can" 
              width={1000} 
              height={800} 
              className={styles.canImage}
            />
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-honeydew.png" 
              alt="Hissin' Honeydew flavor Viper Energy drink design" 
              width={920} 
              height={650} 
              className={styles.flatImage}
            />
            <Image 
              src="/images/viper-honeydew-front.png" 
              alt="Missin' Honeydew flavor Viper Energy drink can" 
              width={1000} 
              height={800} 
              className={styles.canImage}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
