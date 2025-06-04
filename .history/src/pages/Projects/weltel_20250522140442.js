import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Weltel.module.css";
import Image from "next/image";

export default function WelTel() {
  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.container}>
        <h1 className={styles.h1Style}>Social Media Design</h1>

        <div className={styles.topSection}>

          <p className={styles.weltelDescription}>
            During my internship at WelTel Health, I developed a cohesive series of social media graphics to enhance the company’s online presence and connect with its audience. I created a consistent visual system—including templates, reusable assets, a defined color palette, and typography guidelines—based on the team’s request for a simple, animated style aligned with their brand.
            <br /><br />
            Using <strong className={styles.bold}>Illustrator, Photoshop, and Figma,</strong> I organized and shared progress to ensure easy collaboration and transparency. I also contributed to communications campaigns such as “Meet the Team” and customer testimonial posts, which highlighted WelTel’s mission and community impact. Scroll down to see how I boosted WelTel’s reach and engagement through strategic, impactful design!
          </p>

          <Image
            src="/images/heart.svg"
            alt="WelTel logo"
            width={400}
            height={400}
            className={styles.logoImage}
          />
        </div>

        <section>
          <h2 className={styles.h1Style}>Graphics</h2>
          <div className={styles.imageGridTwoCol}>
            <Image src="/images/PSW-cover-updated.png" alt="Paramedic Services Day" width={540} height={540} className={styles.flatImage} />
            <Image src="/images/International-nurses-day-cover.png" alt="Nurses Day" width={540} height={540} className={styles.flatImage} />
            <Image src="/images/IPD-portfolio.png" alt="Physicians Day" width={540} height={540} className={styles.flatImage} />
            <Image src="/images/MHW-portfolio.png" alt="Mental Health Week" width={540} height={540} className={styles.flatImage} />
            <Image src="/images/RCD-portfolio.png" alt="Red Cross Day" width={540} height={540} className={styles.flatImage} />
          </div>
        </section>

        <h2 className={styles.h1Style}>Engagement Insights</h2>
        <p className={styles.weltelDescription}>
          My social media posts led to measurable boosts in reach and engagement. Screenshots from WelTel’s analytics reveal significant increases across key metrics following campaign launches—profile visits jumped from 2 to 54, and audience reach surged from 72 to 1,056. These results highlight the impact of consistent, strategic visual content in driving meaningful interactions and expanding WelTel’s online presence.
          Scroll down to see a data comparison!
        </p>

        <h2 className={styles.h2Style}>Data Comparison</h2>
        <div className={styles.insightsGrid}>
          <div className={styles.imageWithCaption}>
            <p className={styles.caption}>New Post – Profile Visits Spike</p>
            <img src="/images/new-post-1.jpg" alt="New post insight 1" />
          </div>
          <div className={styles.imageWithCaption}>
            <p className={styles.caption}>New Post – Reach & Interactions Increase</p>
            <img src="/images/new-post-2.jpg" alt="New post insight 2" />
          </div>
          <div className={styles.imageWithCaption}>
            <p className={styles.caption}>Previous Post – Baseline Metrics</p>
            <img src="/images/old-post-1.jpg" alt="Old post insight 1" />
          </div>
          <div className={styles.imageWithCaption}>
            <p className={styles.caption}>Previous Post – Engagement Comparison</p>
            <img src="/images/old-post-2.jpg" alt="Old post insight 2" />
          </div>
        </div>

        <h2 className={styles.h1Style}>Assets</h2>
        <div className={styles.assetContainer}>
          <div className={styles.weltelAssets}>
            <Image src="/images/head_asset.png" alt="Head Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/hand_asset.png" alt="Hand Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/woman_doctor_asset.png" alt="Doctor Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/arrow_asset.png" alt="Arrow Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/cross_asset.svg" alt="Cross Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/nurse.png" alt="Nurse Asset" width={150} height={150} className={styles.assetImage} />
            <Image src="/images/heart.svg" alt="Nurse Asset" width={150} height={150} className={styles.assetImage} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
