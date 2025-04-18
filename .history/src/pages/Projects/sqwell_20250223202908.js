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
    <p >Sqwell's logo incorporates our mascot, Sqwee, seamlessly into the company name, using a vibrant orange as the primary color to reflect our signature palette. This bold and energetic color enhances brand recognition and ties the design to our playful and approachable identity. The font Nunito, consistent with our body text, reinforces cohesion, while three-dimensional effects created with shadows and highlights add depth. Soft, rounded edges further contribute to the modern and friendly feel of the logo.
    <br/><br/>
    The original Sqwell logo underwent significant revisions after user feedback indicated that the initial color palette was unpleasant and evoked unintended associations. To address this, we refined the design and shifted to a vibrant orange, which better aligned with the brand's energetic and inviting identity. The updated logo was well–received, offering a more visually appealing and positive impression to users.
    </p>
    <h3>Original Logo VS Revised Version</h3>
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
    <p className={styles.surveyBio}>
    Our user testing process involved in person interviews and guided app walkthroughs to gather actionable feedback. These insights guided significant design changes, ensuring the app better met user expectations and provided a more intuitive experience.
    </p>
    <h3>Key Findings</h3>
    <ul>
        <li>Park Library Icon – <br/> Users found the park library icon confusing, with mixed responses about its meaning. The recommendation was to add a label or redesign the icon for better clarity.</li> <br/>
        <li>Logo Color – <br/>The original logo color received negative feedback, as users associated it with unpleasant connotations. Changing the logo color to orange improved its appeal and better aligned with the brand’s identity.</li> <br/>
    </ul>

    <h3>Original Logo VS Revised Version</h3>
        <div className={styles.logoImages}>
        <Image src="/images/old-profile.png" alt=" Logo Draft" width={300} height={150} />
        <Image src="/images/revised-profile.png" alt=" Logo Draft" width={300} height={150} />
        </div>

    <Image src="/images/survey-image.png" alt="Research Image" width={680} height={300} className={styles.surveyImage}/>
    </div>
</section>

          {/* The Design Process */}
          <section className={styles.designProcess}>
            <h2 className={styles.h2}>The Design Process</h2>
          
            
           
           
         </section>

         

          {/* Wireframes & Prototypes */}
          <section className={styles.prototypeSection}>
            <h3>Figma Hifi Wireframes</h3>
            <iframe width="900" height="750" src="https://embed.figma.com/design/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=0-1&embed-host=share" allowFullScreen></iframe>

          </section>

          {/* Final Logo */}
          <section className={styles.logoSection}>
            <h3>Refining Brand Identity – Logo Evolution</h3>
           <div className={styles.researchContent}>
            
            <p className={styles.logoBio}>
            The original Civica logo featured a heart, a feminine silhouette, and a stylized "C." However, survey feedback indicated that the design was often misinterpreted as an "E," causing confusion among users.
<br/> <br/>
In response, new logo concepts were developed to better align with the brand’s identity while ensuring clear and effective visual communication with the target audience.
            </p>
            <div className={styles.researchImages}>
            <Image src="/images/original-logo.png" alt="Original Logo" width={350} height={350} />
         </div>
         </div>
<br/><br/>
         <h3>Logo Ideation Begins Again</h3>
        <div className={styles.logoImages}>
        <Image src="/images/logo-draft-1.png" alt=" Logo Draft" width={250} height={250} />
        <Image src="/images/logo-draft-2.png" alt=" Logo Draft" width={250} height={250} />
        <Image src="/images/logo-draft-3.png" alt=" Logo Draft" width={250} height={250} />
        <Image src="/images/logo-draft-4.png" alt=" Logo Draft" width={250} height={250} />
        </div>
        <br/><br/>
        <h3>Final Logo</h3>
        <div className={styles.researchContent}>
       
        <p className={styles.finalLogoBio}>
        The final logo features two interlocking hearts, representing unity and Civica’s commitment to supporting its audience. This design reflects Civica’s core values while ensuring clarity and strong brand recognition.
        </p>
        <div className={styles.finalLogoContainer}>
        <Image src="/images/final-logo-1.png" alt=" Civica Logo " width={330} height={330} />
   { /* <Image src="/images/final-logo-2.png" alt=" Civica Logo " width={400} height={400} /> */}
        </div>
        </div>
          </section>
          <section>
          <h3>Figma Interactive Prototype</h3>
          <br/><br/>
            <iframe width="900" height="600" src="https://embed.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600&embed-host=share" allowFullScreen></iframe>
          </section>
        </main>
      </div>
      <br/><br/>
      <Footer />
    </>
  );
}
