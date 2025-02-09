import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function ViperEnergy() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <main className={styles.container}>
          {/* Top Image */}
          <div className={styles.portrait}>
            <Image
              src="/images/viper-main.png"
              alt="Viper Energy Drink Can Display"
              layout="intrinsic"
              width={1000}
              height={800}
              priority
            />
          </div>

          {/* Title and Paragraph */}
          <div className={styles.bioContainer}>
            <h1 className={styles.h1Style}>Viper Energy Can Design</h1>
            <p className={styles.bio}>
              Viper Energy is a high-intensity energy drink available in three bold flavors. 
              Its striking design features vibrant colors that reflect the drink’s powerful taste 
              and effects. A dynamic snake wraps around the can, creating a sense of motion and 
              energy while reinforcing the brand’s fierce identity.
            </p>
          </div>
        </main>

        {/* 🔥 Can Designs Section (Stacked on Mobile, Side-by-Side on Desktop) */}
        <section className={styles.imageGrid}>
          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-blueberry-flat.png" 
              alt="Blueberry Venom flavor Viper Energy drink design" 
              width={250} 
              height={250} 
            />
            <Image 
              src="/images/viper-blueberry-can.png" 
              alt="Blueberry Venom flavor Viper Energy drink can" 
              width={100} 
              height={250} 
            />
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-berry-flat.png" 
              alt="Fruity Berry flavor Viper Energy drink design" 
              width={250} 
              height={250} 
            />
            <Image 
              src="/images/viper-berry-can.png" 
              alt="Fruity Berry flavor Viper Energy drink can" 
              width={100} 
              height={250} 
            />
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/viper-honeydew-flat.png" 
              alt="Honeydew Shock flavor Viper Energy drink design" 
              width={250} 
              height={250} 
            />
            <Image 
              src="/images/viper-honeydew-can.png" 
              alt="Honeydew Shock flavor Viper Energy drink can" 
              width={100} 
              height={250} 
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
