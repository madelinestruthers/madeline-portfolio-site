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
            During my internship at Weltel Health, I created a series of social media graphics to help build the company’s online presence and connect with its audience. The team requested a simple, animated style that aligns with their brand image, which I brought to life using Illustrator and Photoshop. I also used Figma to organize and share progress with supervisors, ensuring easy collaboration and direct access for feedback.<br/><br/> These visuals, which celebrate healthcare-related holidays and recognize medical professionals, support a broader communications strategy to strengthen the brand’s identity online. I’ll soon begin sharing them on LinkedIn to help attract potential clients and increase the company’s visibility.             
              </p>
          </div>
    
          <br/><br/><br/>
       
      
        </main>
      </div>

      <Footer />
    </>
  );
}
