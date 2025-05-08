
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
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>
                        During my internship at Weltel Health, I created a series of social media graphics to help build the company’s online presence and connect with its audience. The team requested a simple, animated style that aligns with their brand image, which I brought to life using Illustrator and Photoshop. I also used Figma to organize and share progress with supervisors, ensuring easy collaboration and direct access for feedback.<br/><br/> These visuals, which celebrate healthcare-related holidays and recognize medical professionals, support a broader communications strategy to strengthen the brand’s identity online. I’ll soon begin sharing them on LinkedIn to help attract potential clients and increase the company’s visibility.             
                        </p>
                    </div>

                    {/* Video Section (Right Side on Desktop)
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/LDuL9oxN3RY?si=x8TfYwBB4a7iYpOd"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div> */}

                </div>
                <h2 className={styles.h1Style}>Assets</h2>
                <div className={styles.assetContainer}>
                    <div className={styles.assets}>
                        <Image src="/images/Asset1.svg" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/Asset2.svg" alt="Asset 2" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/Asset3.svg" alt="Asset 3" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/Asset4.svg" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/Asset5.svg" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                        <Image src="/images/Asset6.svg" alt="Asset 1" width={150} height={150} className={styles.assetImage} />
                    </div>
                </div>
            </main>
   
            <Footer />
        </div>
    );
}
