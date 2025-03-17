import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/MotionProject.module.css";

export default function MotionProject() {
    return (
        <>
            <NavBar />

            <main className={styles.container}>
                <h1 className={styles.h1Style}>How to Ground Yourself</h1>

                {/* Project Details */}
                <div className={styles.descriptionContainer}>
                    <h2 className={styles.h2Style}>Motion Graphics Project Description </h2>
                    <p className={styles.description}>
                        This motion graphics piece is a visual exploration of mindfulness and grounding techniques, designed to create a sense of calm and presence. Using Adobe After Effects and Illustrator, I crafted a seamless animation with fluid transitions, soft color palettes, and soothing motion design.

                        The composition is carefully timed to calming music, enhancing the immersive experience.
                    </p>
                </div>

                {/* Video Section */}
                <div className={styles.videoContainer}>
                    <iframe
                        className={styles.video}
                        width="600"
                        height="315"
                        src="https://www.youtube.com/embed/LDuL9oxN3RY?si=x8TfYwBB4a7iYpOd"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>


            </main>

            <Footer />
        </>
    );
}

