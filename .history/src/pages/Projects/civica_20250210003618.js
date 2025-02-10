import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/Civica.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Suki() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
         <h1 className={styles.h1Style}>Civica – Legal Aid <br/>Mobile App</h1>
         <h2>UX & Graphic Designer</h2>
            <p className={styles.bio}>
            A legal support app designed to empower underprivileged women by providing accessible tools and guidance for navigating legal challenges.
<br/><br/>
Features include a multilingual chatbot, a document scanner that simplifies legal language, step by step legal process guides, and directories for legal, counseling, and mental health resources. Civica prioritizes clarity, trust, and comprehensive assistance, ensuring users feel supported at every stage of their legal journey.             </p>
          <br/>
             <div className={styles.portrait}>
            <Image
              src="/images/civica.png"
              alt="Portrait of Me"
              width={600} // Adjust width as needed
              height={770} // Scaled height based on aspect ratio
              priority // Preloads the image for better performance
            />
          </div>
          
          </div>
       
            <h3>Figma Hifi Wireframes</h3>
          <iframe  width="800" height="450" src="https://embed.figma.com/design/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=0-1&embed-host=share" allowfullscreen></iframe>
          <h3>Figma interactive Prototype</h3>
            <iframe width="800" height="450" src="https://embed.figma.com/proto/0NxjFtht1BziwLShVjdx5B/Civica-2.0?node-id=30-1676&starting-point-node-id=30%3A1600&embed-host=share" allowfullscreen></iframe>


        </main>
      </div>
      <Footer />
    </>
  );
}
