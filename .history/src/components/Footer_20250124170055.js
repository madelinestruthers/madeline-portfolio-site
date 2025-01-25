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
            src="/images/logo-with-watermark.png"
            alt="Logo"
            width={110} // Adjust width as needed
            height={40} // Adjust height as needed to maintain aspect ratio
            priority
          />
        </a>
      </div>

      {/* Right Section: Links */}
      <div className={styles.links}>
        <a
          href="https://linkedin.com/in/madelinestruthers" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a
          href="mailto:maddiestruthersdesigns@gmail.com" // Replace with your email
          className={styles.link}
        >
          <FaEnvelope className={styles.icon} /> Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
