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
              </p>
              <h2 className={styles.link}> <a href="https://www.civicalaw.ca/" target="_blank" rel="noopener noreferrer">Civica Website</a></h2>
              <h2 className={styles.link}> <a href="https://www.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?content-scaling=fixed&kind=proto&node-id=30-1676&scaling=scale-down&starting-point-node-id=30%3A1600&t=g9MmfxrmwiapgGrs-1" target="_blank" rel="noopener noreferrer">
                Figma Prototype</a></h2>
              <div className={styles.problemSolution}>
                <div className={styles.problemBox}>
                  <h3>Problem</h3>
                  <p>
                    Many underprivileged women lack access to legal information, face financial barriers, and fear legal proceedings, making it difficult to understand their rights.                  </p>
                </div>
                <div className={styles.solutionBox}>
                  <h3>Solution</h3>
                  <p>
                    Civica provides a user-friendly legal aid app with multilingual chatbot support, simplified legal documents, and access to legal, mental health, and counseling resources.                   </p>
                </div>
              </div>

            </div>
            <div className={styles.portrait}>
              <Image
                src="/images/civica-mockup.png"
                alt="Civica Phone Prototype"
                width={800}
                height={660}
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
                </p> <br />

                <h3>Key Findings</h3>
                <ul>
                  <li>Workplace Exploitation – <br />Blurred boundaries, excessive workload, and power imbalances.</li> <br />
                  <li>Harassment & Abuse – <br />Verbal, emotional, and psychological mistreatment.</li> <br />
                  <li>Legal Vulnerability – <br />Fear of speaking out due to lack of legal awareness.</li> <br />
                  <li>Mental Health Impact – <br />Stress, anxiety, and hospitalization in severe cases.</li> <br />
                </ul>
              </div>
              {/* Image moves to right on desktop */}
              <Image src="/images/research.png" alt="Research Image" width={700} height={400} className={styles.researchImages} />
            </div>
            <div className={styles.surveySection}>
              <h3>User Surveys</h3>
              <p className={styles.personaBio}>Surveys and usability testing were conducted to gather user feedback and identify pain points. Surveys provided insights into user perceptions, while usability testing evaluated how effectively users interacted with the design. Findings informed iterative improvements, ensuring a more intuitive and user centred experience.
              </p>
              <Image src="/images/survey-image.png" alt="Research Image" width={680} height={300} className={styles.surveyImage} />
            </div>
          </section>

          <div className={styles.surveySection}>
            <h3>User Personas</h3>
            <p className={styles.personaBio}>
              The Civica team developed a user persona to accurately represent middle-aged women in vulnerable situations, focusing on their legal, financial, and emotional challenges. Through research and case studies, we identified their needs and barriers, shaping our design and marketing strategies to ensure Civica is accessible, supportive, and empowering for our target audience.              </p>
            <div className={styles.personaContainer}>
              <Image src="/images/persona-2.png" alt="Research Image" width={500} height={900} className={styles.personaImage} />
              <Image src="/images/persona-1.png" alt="Research Image" width={500} height={900} className={styles.personaImage} />
            </div>
          </div>



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

          {/* Final Logo */}
          <section className={styles.logoSection}>
            <h3>Refining Brand Identity – Logo Evolution</h3>
            <div className={styles.researchContent}>

              <p className={styles.logoBio}>
                The original Civica logo featured a heart, a feminine silhouette, and a stylized "C." However, survey feedback indicated that the design was often misinterpreted as an "E," causing confusion among users.
               
                In response, new logo concepts were developed to better align with the brand’s identity while ensuring clear and effective visual communication with the target audience.
              </p>
              <div className={styles.finalLogoContainer}>
                <Image src="/images/original-logo.png" alt="Original Logo" width={300} height={310} className={styles.logoDraft} />
              </div>
            </div>
            <br /><br />
            <h3>Logo Ideation Begins Again</h3>
            <div className={styles.logoImages}>
              <Image src="/images/logo-draft-1.png" alt=" Logo Draft" width={250} height={250} className={styles.logoDraft} />
              <Image src="/images/logo-draft-2.png" alt=" Logo Draft" width={250} height={250} className={styles.logoDraft} />
              <Image src="/images/logo-draft-3.png" alt=" Logo Draft" width={250} height={250} className={styles.logoDraft} />
              <Image src="/images/logo-draft-4.png" alt=" Logo Draft" width={250} height={250} className={styles.logoDraft} />
            </div>
           
            <h3>Final Logo</h3>

            <p className={styles.finalLogoBio}>
              The final logo features two interlocking hearts, representing unity and Civica’s commitment to supporting its audience. This design reflects Civica’s core values while ensuring clarity and strong brand recognition.
            </p>
            <div className={styles.finalLogoContainer}>
              <Image src="/images/final-logo-1.png" alt=" Civica Logo " width={330} height={320} />
            </div>
            <br />
            <div className={styles.wireframes}>
              <h2 className={styles.h2}>Figma Wireframes</h2>
              <h3>Original Design</h3>
              <div className={styles.finalLogoContainer}>
                <Image src="/images/original-wireframes.png" alt=" Civica Logo " width={900} height={350} className={styles.wireframes} />
              </div>

              <h3>Final Design</h3>
              <div className={styles.finalLogoContainer}>
                <Image src="/images/final-version.png" alt=" Civica Logo " width={900} height={350} className={styles.wireframes} />
              </div>
            </div>
  
            <h3>Figma Interactive Prototype</h3>
            
            <iframe width="900" height="600" src="https://embed.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600&embed-host=share" allowFullScreen></iframe>
      
          </section>
          
          <section>
            <div>
              <h2 className={styles.h2}>Marketing Materials</h2>
              <div className={styles.blogContainer}>
                <h3>Civica Blog</h3>
                <h2 className={styles.link}> <a href="https://www.civicalaw.ca/blog">View Blog</a></h2>
                <p className={styles.textContainer}>The blog made with Next.js for Civica featured weekly updates on the project's progress and challenges, highlighting achievements and sharing insights into the development process.</p>
                <Image src="/images/blog.png" alt=" Civica Blog " width={600} height={350} className={styles.wireframes} />

              </div>
              

              <h3>Social Media</h3>
              <h2 className={styles.link}> <a href="https://www.instagram.com/civicalaw_/">View Instagram</a></h2>
              <p className={styles.textContainer}>
                Our app's Instagram page was used to promote features, engage with our audience, and expand our reach. We shared fun and informative content, posted updates, and built a community around our app.
              </p>
              <Image src="/images/instagram.png" alt=" Civica Blog " width={600} height={500} className={styles.wireframes} />


              <h3>Brochure Design</h3>
            
              <Image src="/images/brochure.png" alt=" Civica Blog " width={650} height={500} className={styles.wireframes} />
            
              <h3>Business Card</h3>
              <br />
              <Image src="/images/card-front.png" alt=" Civica Blog " width={250} height={400} className={styles.wireframes} />
              <Image src="/images/business-card.png" alt=" Civica Blog " width={250} height={400} className={styles.wireframes} />
            </div>

          </section>




        </main>
      </div>

      <Footer />
    </>
  );
}
