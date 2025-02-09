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
              src="/images/bison-sign.jpg"
              alt="Brunch Menu"
              width={660} // Adjust width as needed
              height={500} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Restaurant Menu & <br/>
          Branding Design</h1>
            <p className={styles.bio}>
            I designed a brunch restaurant menu that enhanced my typography skills by organizing extensive information in a visually appealing and easy-to-read format. Balancing hierarchy, spacing, and font choices, I ensured the menu was both functional and aesthetically pleasing. Additionally, I created a custom logo that reinforced Blue Bison’s unique brand identity and style.             </p>
          </div>
        
        </main>
      </div>
      <Footer />
    </>
  );
}
