import React from "react";
import styles from "./projectpage.module.css";
import { PORTFOLIO_TITLE } from "@/constants";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { findProjectData } from "@/lib";
import Icon from "@/components/Icon";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const projectTitle = (await params).slug;
  const data = findProjectData(projectTitle);

  return {
    title: `${PORTFOLIO_TITLE} | ${data.title}`,
  };
}

const projectpage = ({ params }) => {
  const projectTitle = params.slug;

  const data = findProjectData(projectTitle);

  return (
    <article className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.desc}</p>
        </div>
        <div className={styles.subContainer}>
          <div className={styles.techStack}>
            {data.techStack.map((tech) => (
              <div key={tech} className={styles.icon}>
                <Icon id={tech} size={24} />
              </div>
            ))}
          </div>
          <div className={styles.linksContainer}>
            <Link className={styles.link} href={data.links.live}>
              View Live Demo
              <FiArrowUpRight size={18} />
            </Link>
            <Link className={styles.link} href={data.links.code}>
              View Code
              <FaCode size={18} />
            </Link>
          </div>
        </div>
        <Image
          src={data.mainImage}
          alt="project picture showing main page"
          width={500}
          height={350}
          className={styles.image}
        />
        <div>
          <h3 className={styles.subtitle}>Purpose and Goals</h3>
          <p className={styles.desc}>{data.purpose}</p>
        </div>
        <div className={styles.imageContainer}>
          {data.images.map((image) => (
            <Image
              key={image}
              src={image}
              alt="project picture showing different parts of the project"
              width={500}
              height={350}
              className={styles.img}
            />
          ))}
        </div>
        <div>
          <h3 className={styles.subtitle}>Takeaways</h3>
          <p className={styles.desc}>{data.takeAways}</p>
        </div>
        <Image
          src={data.finalImage}
          alt="project picture showing details page"
          width={500}
          height={350}
          className={styles.image}
        />
      </div>
    </article>
  );
};

export default projectpage;
