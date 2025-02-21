import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    { title: "Suki Poster", image: "/images/project-card-suki.jpg", link: "/projects/suki" },
    { title: "Viper Energy", image: "/images/project-card-viper.jpg", link: "/projects/viper-energy" },
    { title: "Photoshop Painting", image: "/images/project-card-opal.jpg", link: "/projects/photoshop-painting" },
    { title: "Mechanical Object", image: "/images/project-card-mechanical.jpg", link: "/projects/mechanical-object" },
    { title: "Civica Mobile App", image: "/images/project-card-civica.jpg", link: "/projects/civica" },
    { title: "Restaurant Menu", image: "/images/project-card-menu.jpg", link: "/projects/restaurant-menu" },

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
