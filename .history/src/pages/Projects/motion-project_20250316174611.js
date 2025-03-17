import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/MotionProject.module.css";

export default function MotionProject() {
    return (
        <>
            <NavBar />
            <div className={`${styles.page}`}>
                <main className={styles.container}>
                    <h1 className={styles.h1Style}>Motion Graphics Showcase</h1>
                    {/* Video Section */}
                    <div className={styles.videoContainer}>
                        <video controls className={styles.video}>
                            <source src="/videos/video.mp4" type="video/mp4" />
                            Your browser does not support the video.
                        </video>
                    </div>
                    {/* Project Details */}
                    <div className={styles.descriptionContainer}>
                        <h2 className={styles.h2Style}>Project Title</h2>
                        <p className={styles.description}>
                            This motion graphics animation showcases dynamic visual storytelling with smooth transitions, vibrant effects, and compelling motion design techniques.
                        </p>
                    </div>

                    {/* Assets Section */}
                    <div className={styles.assetsContainer}>
                        <h2 className={styles.h2Style}>Project Assets</h2>
                        <div className={styles.assets}>
                            <img src="/images/girl.png" alt="Asset 1" className={styles.assetImage} />
                            <img src="/images/tree.png" alt="Asset 2" className={styles.assetImage} />
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </>
    );
}
