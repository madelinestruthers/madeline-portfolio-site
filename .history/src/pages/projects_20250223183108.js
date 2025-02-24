import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  const projects = [
    { title: "Sqwell Web App", image: "/images/sqwell-home-page.jpg", link: "/projects/restaurant-menu" },
    { title: "Civica Mobile App", image: "/images/project-card-civica.jpg", link: "/projects/civica" },
    { title: "Viper Energy Can Design Mockup", image: "/images/project-card-viper.jpg", link: "/projects/viper-energy" },
    { title: "Suki Waterhouse Poster", image: "/images/project-card-suki.jpg", link: "/projects/suki" },
    { title: "Restaurant Menu Design", image: "/images/project-card-menu.jpg", link: "/projects/restaurant-menu" },
    { title: "Photoshop Painting", image: "/images/project-card-opal.jpg", link: "/projects/photoshop-painting" },
    { title: "Mechanical Object", image: "/images/project-card-mechanical.jpg", link: "/projects/mechanical-object" },
    

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
