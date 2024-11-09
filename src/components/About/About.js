import React from "react";
import styles from "./About.module.css";
import AboutIcon from "@/components/AboutIcon";
import Title from "../Title";

const About = () => {
  return (
    <section id="about" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.aboutContainer}>
          <Title heading="h2" title="About Me" />
          <p className={styles.aboutText}>
            I&apos;m a frontend developer based out of the San Francisco Bay
            Area. I love crafting intuitive user-centric and aesthetically
            pleasing web applications. I&apos;m constantly learning new and
            exciting technologies. Shoot me a message to see what I&apos;m
            currently working on or if you want to find out more about me.
          </p>
          <div className={styles.techContainer}>
            <h2 className={styles.subtitle}>My tech stack</h2>
            <AboutIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
