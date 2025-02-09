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
              src="/images/cans.png"
              alt="Viper Energy Cans"
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

        {/* 🔥 New Section for Cans (Placed After Main Content) */}
        <section className={styles.imageGrid}>
          <div className={styles.imageRow}>
            <Image src="/images/drink1.png" alt="Drink 1" width={250} height={250} />
            <Image src="/images/can1.png" alt="Can 1" width={100} height={250} />
          </div>

          <div className={styles.imageRow}>
            <Image src="/images/drink2.png" alt="Drink 2" width={250} height={250} />
            <Image src="/images/can2.png" alt="Can 2" width={100} height={250} />
          </div>

          <div className={styles.imageRow}>
            <Image src="/images/drink3.png" alt="Drink 3" width={250} height={250} />
            <Image src="/images/can3.png" alt="Can 3" width={100} height={250} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
