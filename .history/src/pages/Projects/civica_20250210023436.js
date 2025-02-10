"use client"

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Civica.module.css";
import Image from "next/image";

export default function Civica() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <main className={styles.container}>

          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.bioContainer}>
              <h1 className={styles.h1Style}>Civica – Legal Aid <br /> Mobile App</h1>
              <h2 className={styles.subHeading}>Role: UX & Graphic Designer</h2>
              <p className={styles.bio}>
                A legal support app designed to empower underprivileged women by providing accessible tools and guidance for navigating legal challenges.
                <br /><br />
                Features include a multilingual chatbot, a document scanner that simplifies legal language, step by step legal process guides, and directories for legal, counseling, and mental health resources. Civica prioritizes clarity, trust, and comprehensive assistance, ensuring users feel supported at every stage of their legal journey.
              </p>
              <h3 className={styles.link}> <a href="https://www.civicalaw.ca/">civicalaw.ca</a></h3>
            </div>
            <div className={styles.portrait}>
              <Image
                src="/images/civica-mockup.png"
                alt="Civica Phone Prototype"
                width={700}
                height={500}
                priority
              />
            </div>
          </section>

          {/* User Research Section */}
          <section className={styles.researchSection}>
            <h2 className={styles.h2}>User Research</h2>
            <h3>Insights from Real Case Studies</h3>
            <p className={styles.lawyerBio}>A lawyer provided seven real case studies of women in vulnerable situations, highlighting key challenges such as workplace exploitation, harassment, legal vulnerabilities, and mental health impacts.</p>
            <div className={styles.researchImages}>
              <Image src="/images/law-image.jpg" alt="Research Image" width={400} height={250} />
              <Image src="/images/placeholder3.png" alt="Survey Graph" width={400} height={250} />
            </div>
            <h3>Key Findings</h3>
            <ul>
                <li>
                Workplace Exploitation – <br/>Blurred boundaries, excessive workload, and power imbalances.
                </li> <br/>
                <li>
                Harassment & Abuse – <br/>Verbal, emotional, and psychological mistreatment.
                </li> <br/>
                <li>
                Legal Vulnerability – Fear of speaking out due to lack of legal awareness.
                </li>
            </ul>
            <h3>User Surveys</h3>
          </section>

          {/* The Design Process */}
          <section className={styles.designProcess}>
            <h2 className={styles.h2}>The Design Process</h2>
            <Image src="/images/placeholder1.png" alt="Design Sketches" width={600} height={400} />
          </section>

          {/* Branding */}
          <section className={styles.brandSection}>
            <div className={styles.colorPalette}>
              <h3>Colour Palette</h3>
              <Image src="/images/placeholder2.png" alt="Color Palette" width={300} height={150} />
            </div>
            <div className={styles.typography}>
              <h3>Typography</h3>
              <p>Font: Jost, Roboto</p>
            </div>
          </section>

          {/* Wireframes & Prototypes */}
          <section className={styles.prototypeSection}>
            <h2>Figma Hifi Wireframes</h2>
            <iframe width="800" height="450" src="https://embed.figma.com/design/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=0-1&embed-host=share" allowFullScreen></iframe>
            <h2>Figma Interactive Prototype</h2>
            <iframe width="800" height="450" src="https://embed.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600&embed-host=share" allowFullScreen></iframe>
          </section>

          {/* Final Logo */}
          <section className={styles.logoSection}>
            <h2>Final Logo</h2>
            <Image src="/images/placeholder3.png" alt="Final Logo" width={250} height={250} />
          </section>

        </main>
      </div>
      <Footer />
    </>
  );
}
