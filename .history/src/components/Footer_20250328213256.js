// src/components/Footer.js
import React from "react";
import styles from "./Footer.module.css";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Left Section: Logo */}
      <div className={styles.logo}>
        <a href="/">
        <Image
            src="/images/ms-logo.png"
            alt="Logo"
            width={30} 
            height={48} 
          />
        </a>
      </div>

      {/* Right Section: Links */}
      <div className={styles.links}>
        <p className={styles.link}>Madeline Struthers © 2025</p>
        <a
          href="https://linkedin.com/in/madelinestruthers" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a
          href="mailto:maddiestruthersdesigns@gmail.com"
          className={styles.link}
        >
          <FaEnvelope className={styles.icon} /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
