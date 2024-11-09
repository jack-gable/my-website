"use client";
import React from "react";
import styles from "./Projects.module.css";
import { projectsCardData } from "@/projectData";
import ProjectsCard from "@/components/ProjectsCard";
import Title from "../Title";

const Projects = () => {
  return (
    <section id="projects" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.projectsContainer}>
          <Title heading="h2" title="Projects" />
          <p className={styles.projectText}>
            I like to stay busy and always have a project in the works. Take a
            look at some of the applications that I&apos;ve dedicated my time
            to.
          </p>
        </div>
        <div className={styles.projects}>
          {projectsCardData.map((project) => (
            <ProjectsCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
