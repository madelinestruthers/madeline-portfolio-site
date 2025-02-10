import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ title, image, link }) => {
    return (
        <article className="project-card">
            <Link href={link}>
                <div>
                    <Image
                        src={image}
                        alt={title}
                        layout="responsive"
                        width={300}
                        height={200}
                    />

                </div>
            </Link>
        </article>
    );
};

export default ProjectCard;