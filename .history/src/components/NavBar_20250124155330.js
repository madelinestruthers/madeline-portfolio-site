import React, { useState } from "react";
import Image from "next/image";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles["navbar-logo"]}>
        <a href="/">
          <Image
            src="/images/eye-logo.png"
            alt="Logo"
            width={110} // Adjust width as needed
            height={40} // Adjust height as needed to maintain aspect ratio
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
          <a href="/work">Projects</a>
        </li>
        <li>
          <a href="/about">About Me</a>
        </li>
      
      </ul>
    </nav>
  );
};

export default NavBar;
