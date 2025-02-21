import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, image, link }) => {
    return (
        <article className={styles.projectCard}>
            <Link href={link} className={styles.cardLink}>
                <div className={styles.imageContainer}>
                    <Image
                        src={image}
                        alt={title}
                        layout="responsive"
                        width={300}
                        height={200}
                        className={styles.projectImage}
                    />
                    <div className={styles.overlay}>
                        <h3 className={styles.projectTitle}>{title}</h3>
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default ProjectCard;
