import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import styles from "@/styles/About.module.css";
import Image from "next/image";

export default function Projects() {
    return (
        <>
            <NavBar />
            <div className={`${styles.page}`}>
                <main>
                    <h1>Projects</h1>

                    <article>
                        <a href="/suki">
                            <img src="suki.png" />
                            <h2>Suki Poster</h2>
                        </a>
                    </article>
                </main>
            </div>
            <Footer />
        </>
    );
}
