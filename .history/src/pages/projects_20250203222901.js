import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

    const projects = [
        { title: "Suki Poster", image: "/images/suki.png", link: "/projects/suki" },
        { title: "Viper Energy", image: "/images/viper-blue-front.png", link: "/projects/viper-energy" },
        { title: "Mechanical Object", image: "/images/mechanical-drawing.png", link: "/projects/mechanical-object" },
      ];
    
    return (
        <>
            <NavBar />
            <div className={`${styles.page}`}>
            <main className="projects-container">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
            </div>
            <Footer />
        </>
    );
}
