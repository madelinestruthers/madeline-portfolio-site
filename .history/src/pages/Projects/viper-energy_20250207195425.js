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

          {/* 3 Rows of Images */}
          <div className={styles.imageGrid}>
            <div className={styles.imageRow}>
              <Image src="/images/viper-orange.png" alt="blueberry flavour viper energy drink" width={200} height={200} />
              <Image src="/images/viper-blue-front.png" alt="blueberry flavour viper energy drink" width={100} height={200} />
            </div>

            <div className={styles.imageRow}>
              <Image src="/images/viper-berry.png" alt="berry flavour viper energy drink" width={200} height={200} />
              <Image src="/images/viper-berry-front.png" alt="berry flavour viper energy drink" width={100} height={200} />
            </div>

            <div className={styles.imageRow}>
              <Image src="/images/viper-honeydew.png" alt="honeydew flavour viper energy drink" width={200} height={200} />
              <Image src="/images/viper-honeydew-front.png" alt="honeydew flavour viper energy drink" width={100} height={200} />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}