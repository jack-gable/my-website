import React from "react";
import styles from "./ProjectsCard.module.css";
import { FiArrowRight as Arrow } from "react-icons/fi";
import { useRouter } from "next/navigation";
import Icon from "../Icon";

function ProjectsCard({ title, desc, icon, techStack, link }) {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <h3 className={styles.title}>{title}</h3>
        <Icon id={icon} size={32} color="#333" />
      </div>
      <div className={styles.card__content}>
        <div className={styles.container}>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
            <Icon id={icon} size={32} color="#333" />
          </div>
          <p className={styles.desc}>{desc}</p>
          <div className={styles.icons}>
            {techStack.map((tech) => (
              <Icon key={tech} id={tech} size={18} />
            ))}
          </div>
          <button
            type="button"
            onClick={() => router.push(link)}
            className={styles.btn}
          >
            Learn More{" "}
            <span className={styles.arrow}>
              <Arrow size={20} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
