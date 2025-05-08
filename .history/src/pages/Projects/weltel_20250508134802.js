
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/MotionProject.module.css";
import Image from "next/image";

export default function MotionProject() {
    return (
        <div className={styles.page}> {/* ✅ Add a wrapper div */}
            <NavBar />

            <main className={styles.container}>
                <h1 className={styles.h1Style}>Social Media Graphics for Weltel Health</h1>

                {/* Video & Description Row on Desktop (Video on Right) */}
                <div className={styles.videoDescriptionWrapper}>

                    {/* Project Details (Left Side on Desktop) */}
                 
                        <p className={styles.weltelDescription}>
                        During my internship at Weltel Health, I created a series of social media graphics to help build the company’s online presence and connect with its audience. The team requested a simple, animated style that aligns with their brand image, which I brought to life using <strong className={styles.bold}>Illustrator</strong> and <strong className={styles.bold}>Photoshop</strong>. I also used <strong className={styles.bold}>Figma</strong> to organize and share progress with supervisors, ensuring easy collaboration and direct access for feedback.<br/><br/> These visuals, which celebrate healthcare-related holidays and recognize medical professionals, support a broader communications strategy to strengthen the brand’s identity online. I’ll soon begin sharing them on LinkedIn to help attract potential clients and increase the company’s visibility.             
                        </p>

                </div>

                <section className={styles.imageGrid}>
          <div className={styles.imageRow}>
            <Image 
              src="/images/IPD-portfolio.png" 
              alt="International Physicians Day graphic" 
              width={540} 
              height={540} 
              className={styles.flatImage}
            />
          
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/MHW-portfolio.png" 
              alt="Mental Health Week Graphic with brain covered in squiggles" 
              width={540} 
              height={540} 
              className={styles.flatImage}
            />
          
          </div>

          <div className={styles.imageRow}>
            <Image 
              src="/images/RCD-portfolio.png" 
              alt="Red cross day graphic with the 3 logos that represents the red cross internationally" 
              width={540} 
              height={540} 
              className={styles.flatImage}
            />
    
          </div>
        </section>

                <h2 className={styles.h1Style}>Assets</h2>
                <div className={styles.assetContainer}>
                    <div className={styles.weltelAssets}>

                        <Image src="/images/head_asset.png" alt="Asset 2" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/hand_asset.png" alt="Asset 3" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/woman_doctor_asset.png" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/arrow_asset.png" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/cross_asset.svg" alt="Asset 1" width={150} height={150} className={styles.assetImage} />

                        
                    </div>
                </div>
            </main>
   
            <Footer />
        </div>
    );
}
