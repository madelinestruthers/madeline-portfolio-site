import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    { title: "Suki Poster", image: "/images/suki.png", link: "/projects/suki" },
    { title: "Restaurant Menu", image: "/images/menu-card.png", link: "/projects/restaurant-menu" },
    { title: "Photoshop Painting", image: "/images/opal-halo.jpg", link: "/projects/photoshop-painting" },
    { title: "Viper Energy", image: "/images/project-card-viper.jpg", link: "/projects/viper-energy" },
    { title: "Mechanical Object", image: "/images/project-card-mechanical.png", link: "/projects/mechanical-object" },


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
