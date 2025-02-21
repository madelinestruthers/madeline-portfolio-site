"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isVisible ? styles.show : styles.hide}`}>
      <div className={styles["navbar-logo"]}>
        <a href="/">
          <Image
            src="/images/ms-logo.svg"
            alt="Logo"
            width={70}
            height={18}
            priority
          />
        </a>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <ul className={`${styles["navbar-links"]} ${isMenuOpen ? styles["navbar-links-open"] : ""}`}>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/about">About Me</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
