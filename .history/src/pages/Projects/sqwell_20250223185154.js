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
                height={580}
                priority
              />
            </div>
          </section>

          {/* User Research Section */}
          <section className={styles.researchSection}>
    <h2 className={styles.h2}>User Research</h2>
    
    {/* Text + Image Wrapper */}
    <div className={styles.researchContent}>
        <div>
            <h3>Insights from Real Case Studies</h3>
            <p className={styles.lawyerBio}>
                A lawyer provided seven real case studies of women in vulnerable situations, 
                highlighting key challenges such as workplace exploitation, harassment, 
                legal vulnerabilities, and mental health impacts.
            </p> <br/>
            <h3>Key Findings</h3>
    <ul>
        <li>Workplace Exploitation – <br/>Blurred boundaries, excessive workload, and power imbalances.</li> <br/>
        <li>Harassment & Abuse – <br/>Verbal, emotional, and psychological mistreatment.</li> <br/>
        <li>Legal Vulnerability – <br/>Fear of speaking out due to lack of legal awareness.</li> <br/>
        <li>Mental Health Impact – <br/>Stress, anxiety, and hospitalization in severe cases.</li> <br/>
    </ul>
        </div>
        {/* Image moves to right on desktop */}
        
    </div>
    <div className={styles.surveySection}>
    <h3>User Surveys</h3>
    <p className={styles.surveyBio}>Surveys and usability testing were conducted to gather user feedback and identify pain points. Surveys provided insights into user perceptions, while usability testing evaluated how effectively users interacted with the design. Findings informed iterative improvements, ensuring a more intuitive and user centred experience.
    </p>
    <Image src="/images/survey-image.png" alt="Research Image" width={680} height={300} className={styles.surveyImage}/>
    </div>
</section>

          {/* The Design Process */}
          <section className={styles.designProcess}>
            <h2 className={styles.h2}>The Design Process</h2>
            <h3>Color Palette</h3>
            <div className={styles.colorPalette}>
           
      <div className={styles.brandSection} style={{ backgroundColor: "#313889", color: "white" }}>
        <p>PRIMARY<br />Hex #313889<br />RGB 49, 56, 138</p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#8FA0F1", color: "black" }}>
        <p>SECONDARY<br />Hex #8FA0F1<br />RGB 143, 160, 241</p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#66B1DA", color: "black" }}>
        <p>TERTIARY<br />Hex #66B1DA<br />RGB 102, 177, 218</p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#FFFFFD", color: "black" }}>
        <p>BACKGROUND/TEXT<br />Hex #FFFFFD<br />RGB 255, 255, 253</p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#EAF0F6", color: "black" }}>
        <p>LIGHT VARIANT<br />Hex #EAF0F6<br />RGB 234, 240, 246</p>
      </div>
      <div className={styles.brandSection} style={{ backgroundColor: "#0E131F", color: "white" }}>
        <p>BACKGROUND/TEXT<br />Hex #0E131F<br />RGB 14, 19, 31</p>
      </div>
    </div>
            
           
           
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
