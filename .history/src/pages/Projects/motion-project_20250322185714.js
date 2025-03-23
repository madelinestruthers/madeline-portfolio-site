import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/MotionProject.module.css";

export default function MotionProject() {
    return (
        <div className={styles.page}> {/* ✅ Add a wrapper div */}
            <NavBar />

            <main className={styles.container}>
                <h1 className={styles.h1Style}>How to Ground Yourself</h1>

                {/* Video & Description Row on Desktop (Video on Right) */}
                <div className={styles.videoDescriptionWrapper}>

                    {/* Project Details (Left Side on Desktop) */}
                    <div className={styles.descriptionContainer}>
                        <p className={styles.description}>
                        Made for kids, this motion graphics piece explores mindfulness and grounding through fluid animation, soft colors, and soothing music. Created with After Effects and Illustrator, it delivers a calm, immersive experience.
                        </p>
                    </div>

                    {/* Video Section (Right Side on Desktop) */}
                    <div className={styles.videoContainer}>
                        <iframe
                            className={styles.video}
                            src="https://www.youtube.com/embed/LDuL9oxN3RY?si=x8TfYwBB4a7iYpOd"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
<h2>Assets</h2>
                </div>

            </main>

            <Footer />
        </div>
    );
}
