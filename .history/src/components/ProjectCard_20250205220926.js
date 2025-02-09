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
                        layout="intrinsic"
                        width={300}
                        height={200}
                    />
                </div>
            </Link>
            <h2 className="project-title">{title}</h2>
        </article>
    );
};

export default ProjectCard;