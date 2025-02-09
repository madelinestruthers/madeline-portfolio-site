import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, link }) => {
    return (
        <article className="project-card">
            <Link href={link}>
                <div className="image-container">
                    <Image
                        src={image}
                        alt={title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </Link>
            <h2 className="project-title">{title}</h2>
        </article>
    );
};

export default ProjectCard;