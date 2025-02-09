import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    { title: "Suki Poster", image: "/images/suki.png", link: "/projects/suki" },
    { title: "Viper Energy", image: "/images/viper-honeydew.png", link: "/projects/viper-energy" },
    { title: "Mechanical Object", image: "/images/mechanical-drawing.png", link: "/projects/mechanical-object" },
    { title: "Viper Energy", image: "/images/viper-blue-front-export.jpg", link: "/projects/viper-energy" },
  ];

  return (
    <>
      <NavBar />
      <main className="projects-container">
      {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </main>
      <Footer />
    </>
  );
}
