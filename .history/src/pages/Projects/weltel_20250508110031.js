import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Suki() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Social Media Graphics for Weltel Health</h1>
            <p className={styles.bio}>
            For Weltel Health, I created a series of social media graphics to help build the company’s online presence and connect with its audience. Using Adobe Illustrator and Photoshop, I designed visually engaging assets that celebrate healthcare-related holidays and recognize the work of medical professionals. I also used Figma to organize and share my progress with supervisors, making collaboration easy and ensuring the company had direct access to each stage of development. These graphics are part of a broader initiative to strengthen Weltel Health’s brand identity online, and I’ll soon begin sharing them on LinkedIn to attract potential clients and increase visibility for the company.             </p>
          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/suki.png"
              alt="Portrait of Me"
              width={400} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          <br/><br/><br/>
          <div className={styles.portrait}>
          <br/><br/><br/>
            <Image
              src="/images/poster-mockup.jpg"
              alt="Poster mockup"
              width={900} // Adjust width as needed
              height={600} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
