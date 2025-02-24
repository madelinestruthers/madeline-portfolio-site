"use client"

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Civica.module.css";
import Image from "next/image";

export default function Sqwell() {
  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <main className={styles.container}>

          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.bioContainer}>
              <h1 className={styles.h1Style}>Sqwell Web App</h1>
              <h2 className={styles.subHeading}>Role: UX/UI & Graphic Designer</h2>
              <p className={styles.bio}>
              Sqwell is an interactive web app designed to promote outdoor exploration through gamified features and user–friendly design. Collaborating with two teammates, I contributed to the design, development, and conceptualization of the platform. Key features include park search and filtering, detailed amenity information, and a personalized profile page to track user activity and engagement.
              </p>
              <h3 className={styles.link}> <a href="https://sqwell.vercel.app/">sqwell.vercel.app</a></h3>
            </div>
            <div className={styles.portrait}>
              <Image
                src="/images/sqwell-screens.png"
                alt="Sqwell Phone Prototype"
                width={700}
                height={540}
                priority
              />
            </div>
          </section>

          {/* User Research Section */}
          <section className={styles.researchSection}>
    <h2 className={styles.h2}>Style Guide</h2>
    
    {/* Text + Image Wrapper */}
    <div className={styles.researchContent}>
        <div>
        <h3 className={styles.link}> <a href="https://sqwell-styleguide.vercel.app/">Click to view!</a></h3>
            <p className={styles.lawyerBio}>
            The style guide for Sqwell was created to ensure consistency across the app’s design. It includes key elements such as the logo design, color palette, typography, layout guidelines, and iconography. This comprehensive guide helped maintain a cohesive visual identity, making the app more user-friendly and aesthetically appealing.
            </p> <br/>

            <h3>Color Palette</h3>
            <div className={styles.colorPalette}>
           
      <div className={styles.brandSection} style={{ backgroundColor: "#D4B1CF", color: "black" }}>
        <p>Purple<br />Hex #D4B1CF<br /></p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#F7802B", color: "black" }}>
        <p>Orange<br />Hex #F7802B<br /></p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#3E655D", color: "white" }}>
        <p>Dark Green<br />Hex #3E655D<br /></p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#1A1D1A", color: "white" }}>
        <p>Black<br />Hex #1A1D1A<br /></p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#ECE2D0", color: "black" }}>
        <p>Bone<br />Hex #ECE2D0<br /></p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#74B4C6", color: "black" }}>
        <p>Blue<br />Hex #74B4C6<br /></p>
      </div>
    </div>

<div >
    <h3>Logo Design</h3>
    <p className={styles.logoParagraph} >Sqwell's logo incorporates our mascot, Sqwee, seamlessly into the company name, using a vibrant orange as the primary color to reflect our signature palette. This bold and energetic color enhances brand recognition and ties the design to our playful and approachable identity. The font Nunito, consistent with our body text, reinforces cohesion, while three-dimensional effects created with shadows and highlights add depth. Soft, rounded edges further contribute to the modern and friendly feel of the logo.
    <br/><br/>
    The original Sqwell logo underwent significant revisions after user feedback indicated that the initial color palette was unpleasant and evoked unintended associations. To address this, we refined the design and shifted to a vibrant orange, which better aligned with the brand's energetic and inviting identity. The updated logo was well–received, offering a more visually appealing and positive impression to users.
    </p>
    <h3>Original Logo vs Revised Version</h3>
        <div className={styles.logoImages}>
        <Image src="/images/sqwell-logo-original.png" alt=" Logo Draft" width={400} height={150} />
        <Image src="/images/sqwell-orange-logo.png" alt=" Logo Draft" width={400} height={150} />
        </div>

</div>

        </div>
        {/* Image moves to right on desktop */}
        
    </div>
    <div className={styles.surveySection}>
    <h2 className={styles.h2}>User Testing</h2>
    <p className={styles.keyFindings}>
    Our user testing process involved in person interviews and guided app walkthroughs to gather actionable feedback. These insights guided significant design changes, ensuring the app better met user expectations and provided a more intuitive experience.
    </p>
    <div className={styles.keyFindings}>
    <h3>Key Findings</h3>
    <ul>
        <li>Badge Library Icon – <br/> Users found the park library icon confusing, with mixed responses about its meaning. The recommendation was to add a label or redesign the icon for better clarity.</li> <br/>
        <li>Logo Color – <br/>The original logo color received negative feedback, as users associated it with unpleasant connotations. Changing the logo color to orange improved its appeal and better aligned with the brand’s identity.</li> <br/>
    </ul>
</div>

    <h3>Original Badge Library Icon vs Revised Version</h3>
        <div className={styles.logoImages}>
        <Image src="/images/old-profile.png" alt=" Logo Draft" width={300} height={360} />
        <Image src="/images/revised-profile.png" alt=" Logo Draft" width={300} height={360} />
        </div>
    </div>
</section>


          <section>
          <h1 className={styles.h1}>Figma Interactive Prototype</h1>
          <br/><br/>
          <iframe  width="400" height="650" src="https://embed.figma.com/proto/t5tkBHdTWOAe2WK3hbr7mE/MDIA-2106---Sqwell---Set-F?node-id=1135-3445&p=f&scaling=scale-down&content-scaling=fixed&page-id=424%3A1416&starting-point-node-id=1135%3A3445&show-proto-sidebar=1&embed-host=share" allowfullscreen></iframe>
           
          </section>

          <h3 > <a href="https://sqwell.vercel.app/">Click Here to Open Web App</a></h3>
        </main>
      </div>
      <br/><br/>
      <Footer />
    </>
  );
}
