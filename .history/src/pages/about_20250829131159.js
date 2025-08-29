import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <>
      <NavBar />
      <div className={`${styles.page}`}>
        <main className={styles.container}>
          <div className={styles.bioContainer}>
            <h1 className={styles.h1Style}>Hello There!</h1>
            <p className={styles.bio}>
            I’m Madeline, a designer, creator, and all-around digital explorer. I’m passionate about crafting visually compelling, user-focused, and functional experiences, and I built this portfolio myself from the ground up.
            <br/><br/>
I graduated with distinction from BCIT’s Digital Design & Development program, where I juggled nine courses at once (time management leveled up). I also completed a design internship at WelTel Health, where I created social media campaigns that boosted Instagram reach by over 1400%, collaborated on a visual style guide to maintain brand consistency, and designed Figma wireframes to improve user experience on the platform. I love bringing ideas to life through graphic design, marketing content, and UX, with skills in Adobe Creative Suite, Figma, and Canva.

When I’m not designing, you’ll probably find me painting, sketching, baking, walking my dog, vibing to music, or exploring fashion trends. I love drawing inspiration from everyday life and bringing a playful, human touch to everything I create.

I’m excited to collaborate, experiment, and make digital experiences that are engaging, inclusive, and just a little fun. Let’s create something awesome together!

             </p>
          </div>
          <div className={styles.portrait}>
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Me"
              width={400} 
              height={670} 
              priority 
            />
          </div>


        </main>
      </div>
      <Footer />
    </>
  );
}
