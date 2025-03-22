"use client";

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
          <div className={styles["logo-wrapper"]}>
            <Image
              src="/images/ms-logo.svg"
              alt="Logo"
              width={70}
              height={18}
              priority
            />
          </div>
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