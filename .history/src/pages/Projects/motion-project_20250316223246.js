import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/MotionProject.module.css";

export default function MotionProject() {
    return (
        <>
            <NavBar />
            <div className={`${styles.page}`}>
                <main className={styles.container}>
                    <h1 className={styles.h1Style}>Motion Graphics Animation</h1>
                    {/* Video Section */}
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.video}
                            width="600"
                            height="315"
                            src="https://www.youtube.com/embed/LDuL9oxN3RY?si=x8TfYwBB4a7iYpOd"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
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
                            <img src="/images/lungs.png" alt="Asset 2" className={styles.assetImage} />
                            <img src="/images/stressed.png" alt="Asset 2" className={styles.assetImage} />
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </>
    );
}
