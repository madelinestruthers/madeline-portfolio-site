import { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    { title: "Sqwell Web App", image: "/images/sqwell-home-page.jpg", link: "/projects/sqwell", category: "UX/UI Design" },
    { title: "Civica Mobile App", image: "/images/project-card-civica.jpg", link: "/projects/civica", category: "UX/UI Design" },
    { title: "Social Media Graphics", image: "/images/project-card-social-media.jpg", link: "/projects/weltel", category: "Social Media Marketing" },
    { title: "Viper Energy Can Design Mockup", image: "/images/can-mockup-project.jpg", link: "/projects/viper-energy", category: "Graphic Design" },
    { title: "Suki Waterhouse Poster", image: "/images/project-card-suki.jpg", link: "/projects/suki", category: "Graphic Design" },
    { title: "How to Ground Yourself Motion Graphics Video", image: "/images/project-card-video.jpg", link: "/projects/motion-project", category: "Motion/Video" },
    { title: "Photoshop Painting", image: "/images/project-card-opal.jpg", link: "/projects/photoshop-painting", category: "Technical Assignments" },
    { title: "Mechanical Object Vector", image: "/images/project-card-mechanical.jpg", link: "/projects/mechanical-object", category: "Technical Assignments" },
   /* { title: "Restaurant Menu Design", image: "/images/project-card-menu.jpg", link: "/projects/restaurant-menu", category: "Graphic Design" },*/
  ];

  const categories = ["All", "Graphic Design", "UX/UI Design", "Social Media Marketing", "Motion/Video", "Technical Assignments"];

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  return (
    <>
      <NavBar />
      <main className="projects-page">
        {/* Title and Filter Section */}
        <div className="projects-header">
          <h1>Projects</h1>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {selectedCategory}
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {isOpen && (
              <ul className="dropdown-menu">
                {categories.map((category) => (
                  <li
                    key={category}
                    onClick={() => selectCategory(category)}
                    className={category === selectedCategory ? "active" : ""}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            )}
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
      <Footer />
    </>
  );
}
