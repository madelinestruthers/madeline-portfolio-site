import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import WaveCanvas from "@/components/WaveCanvas";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { title: "Sqwell Web App", image: "/images/sqwell-home-page.jpg", link: "/projects/sqwell", category: "UX/UI Design" },
    { title: "Civica Mobile App", image: "/images/project-card-civica.jpg", link: "/projects/civica", category: "UX/UI Design"  },
    { title: "Viper Energy Can Design Mockup", image: "/images/project-card-viper.jpg", link: "/projects/viper-energy", category: "Graphic Design" },
    { title: "Suki Waterhouse Poster", image: "/images/project-card-suki.jpg", link: "/projects/suki", category: "Graphic Design" },
    { title: "How to Ground Yourself Motion Graphics Video", image: "/images/project-card-video.jpg", link: "/projects/motion-project", category: "Motion/Video" },
    { title: "Photoshop Painting", image: "/images/project-card-opal.jpg", link: "/projects/photoshop-painting", category: "Technical Assignments" },
    { title: "Mechanical Object Vector", image: "/images/project-card-mechanical.jpg", link: "/projects/mechanical-object", category: "Technical Assignments" },
    { title: "Restaurant Menu Design", image: "/images/project-card-menu.jpg", link: "/projects/restaurant-menu", category: "Graphic Design" },
  ];

  const categories = ["All", "Graphic Design", "UX/UI Design", "Motion/Video", "Technical Assignments"];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

    return (
      <>
        <NavBar />
        <main className="projects-page">
          {/* Title and Filter Section */}
          <div className="projects-header">
            <h1>Projects</h1>
            <div className="filter-container">
              <label htmlFor="category-filter">Filter by:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
  
          {/* Projects Grid */}
          <div className="projects-container">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))
            ) : (
              <p className="no-projects">No projects found for this category.</p>
            )}
          </div>
        </main>
        <WaveCanvas/>
        <Footer />
      </>
    );
  }
  