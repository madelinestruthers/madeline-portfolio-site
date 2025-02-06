import Image from "next/image";
import Link from "next/link";


const ProjectCard = ({ title, image, link }) => {
  return (
    <article className="project-card">
      <Link href={link}>
        <div>
          <Image src={image} alt={title} width={300} height={200} />
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
