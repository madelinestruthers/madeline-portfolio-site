import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <a href="/">
          <Image
            src="/images/ms-logo.png"
            alt="Logo"
            width={80} // Adjust width as needed
            height={25} // Adjust height as needed to maintain aspect ratio
            priority
          />
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul
        className={`${styles["navbar-links"]} ${
          isMenuOpen ? styles["navbar-links-open"] : ""
        }`}
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default NavBar;
