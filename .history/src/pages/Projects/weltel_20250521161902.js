
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
            During my internship at WelTel Health, I developed a cohesive series of social media graphics to enhance the company’s online presence and connect with its audience. I created a consistent visual system—including templates, reusable assets, a defined color palette, and typography guidelines—based on the team’s request for a simple, animated style aligned with their brand.
            <br /><br />
            Using <strong className={styles.bold}> Illustrator, Photoshop, and Figma, </strong>I organized and shared progress to ensure easy collaboration and transparency. I also contributed to communications campaigns such as “Meet the Team” and customer testimonial posts, which highlighted WelTel’s mission and community impact.
          </p>
<h2 className={styles.h2Style}>Engagement Insights</h2>
<p className={styles.weltelDescription}>
My social media posts led to measurable boosts in reach and engagement. Screenshots from WelTel’s analytics show significant increases in profile visits, post interactions, and audience reach following campaign launches—demonstrating the value of consistent, strategic visual content.
</p>

        </div>

        <section className={styles.imageGrid}>
          <h2 className={styles.h1Style}>Graphics</h2>
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
