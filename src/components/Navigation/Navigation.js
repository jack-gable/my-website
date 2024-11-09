import React from "react";
import styles from "./Navigation.module.css";
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <Link className={styles.navLink} href="/#about" aria_label="about">
            ABOUT
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={styles.navLink}
            href="/#projects"
            aria_label="projects"
          >
            PROJECTS
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link
            className={styles.navLink}
            href="/#contact"
            aria_label="contact"
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
