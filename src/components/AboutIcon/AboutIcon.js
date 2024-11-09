"use client";
import React, { useEffect } from "react";
import styles from "./AboutIcon.module.css";
import {
  motion,
  stagger,
  useAnimate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  FaCss3,
  FaFigma,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiJest,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

function AboutIcon() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView) {
      animate(
        "div",
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        },
        {
          duration: 1,
          delay: shouldReduceMotion ? 0 : stagger(0.3, { startDelay: 0.15 }),
        }
      );
    }
  }, [isInView, animate, shouldReduceMotion]);

  return (
    <div ref={scope} className={styles.iconWrapper}>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #f06529`,
          boxShadow: `
				0.5px 0.5px 0.8px #f0652955,
				2px 1.9px 3.1px -0.8px #f0652955,
				5.2px 4.9px 8px -1.7px #f0652955,
				12.8px 12px 19.7px -2.5px #f0652955
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaHtml5 color="#f06529" size="lg" />
        HTML5
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #28a4d9`,
          boxShadow: `
				0.5px 0.5px 0.8px #28a4d955,
				2px 1.9px 3.1px -0.8px #28a4d955,
				5.2px 4.9px 8px -1.7px #28a4d955,
				12.8px 12px 19.7px -2.5px #28a4d955
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaCss3 color="#28a4d9" size="lg" />
        CSS3
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #efd81d`,
          boxShadow: `
				0.5px 0.5px 0.8px #efd81d55,
				2px 1.9px 3.1px -0.8px #efd81d55,
				5.2px 4.9px 8px -1.7px #efd81d55,
				12.8px 12px 19.7px -2.5px #efd81d55
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <IoLogoJavascript color="#efd81d" size="lg" />
        JavaScript
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #5ed4f4`,
          boxShadow: `
				0.5px 0.5px 0.8px #5ed4f455,
				2px 1.9px 3.1px -0.8px #5ed4f455,
				5.2px 4.9px 8px -1.7px #5ed4f455,
				12.8px 12px 19.7px -2.5px #5ed4f455
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaReact color="#5ed4f4" size="lg" />
        React
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #5ed4f4`,
          boxShadow: `
				0.5px 0.5px 0.8px #5ed4f455,
				2px 1.9px 3.1px -0.8px #5ed4f455,
				5.2px 4.9px 8px -1.7px #5ed4f455,
				12.8px 12px 19.7px -2.5px #5ed4f455
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaReact color="#5ed4f4" size="lg" />
        React&nbsp;Native
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #ec4d28`,
          boxShadow: `
				0.5px 0.5px 0.8px #ec4d2855,
				2px 1.9px 3.1px -0.8px #ec4d2855,
				5.2px 4.9px 8px -1.7px #ec4d2855,
				12.8px 12px 19.7px -2.5px #ec4d2855
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaGitAlt color="#ec4d28" size="lg" />
        Git
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #cc6699`,
          boxShadow: `
				0.5px 0.5px 0.8px #cc669955,
				2px 1.9px 3.1px -0.8px #cc669955,
				5.2px 4.9px 8px -1.7px #cc669955,
				12.8px 12px 19.7px -2.5px #cc669955
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaSass color="#cc6699" size="lg" />
        Sass
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #f0abee`,
          boxShadow: `
				0.5px 0.5px 0.8px #f0abee55,
				2px 1.9px 3.1px -0.8px #f0abee55,
				5.2px 4.9px 8px -1.7px #f0abee55,
				12.8px 12px 19.7px -2.5px #f0abee55
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <SiStyledcomponents color="#f0abee" size="lg" />
        Styled&#x2011;Components
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #3c873a`,
          boxShadow: `
				0.5px 0.5px 0.8px #3c873a55,
				2px 1.9px 3.1px -0.8px #3c873a55,
				5.2px 4.9px 8px -1.7px #3c873a55,
				12.8px 12px 19.7px -2.5px #3c873a55
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaNodeJs color="#3c873a" size="lg" />
        Node.js
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #4b8bbe`,
          boxShadow: `
				0.5px 0.5px 0.8px #4b8bbe55,
				2px 1.9px 3.1px -0.8px #4b8bbe55,
				5.2px 4.9px 8px -1.7px #4b8bbe55,
				12.8px 12px 19.7px -2.5px #4b8bbe55
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaPython color="#4b8bbe" size="lg" />
        Python
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #a259ff`,
          boxShadow: `
				0.5px 0.5px 0.8px #a259ff55,
				2px 1.9px 3.1px -0.8px #a259ff55,
				5.2px 4.9px 8px -1.7px #a259ff55,
				12.8px 12px 19.7px -2.5px #a259ff55
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <FaFigma color="#a259ff" size="lg" />
        Figma
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #06b6d4`,
          boxShadow: `
				0.5px 0.5px 0.8px #06b6d455,
				2px 1.9px 3.1px -0.8px #06b6d455,
				5.2px 4.9px 8px -1.7px #06b6d455,
				12.8px 12px 19.7px -2.5px #06b6d455
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <SiTailwindcss color="#06b6d4" size="lg" />
        TailwindCSS
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid var(--color-gray-1000)`,
          boxShadow: `
				0.5px 0.5px 0.8px var(--color-gray-1000),
				2px 1.9px 3.1px -0.8px var(--color-gray-1000),
				5.2px 4.9px 8px -1.7px var(--color-gray-1000),
				12.8px 12px 19.7px -2.5px var(--color-gray-1000)
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <SiNextdotjs color="var(--color-gray-1000)" size="lg" />
        Next.js
      </motion.div>
      <motion.div
        className={styles.icon}
        style={{
          border: `2px solid #C21325`,
          boxShadow: `
				0.5px 0.5px 0.8px #C2132555,
				2px 1.9px 3.1px -0.8px #C2132555,
				5.2px 4.9px 8px -1.7px #C2132555,
				12.8px 12px 19.7px -2.5px #C2132555
				`,
        }}
        initial={{
          opacity: 0,
          scale: 0.3,
          filter: "blur(20px)",
        }}
      >
        <SiJest color="#C21325" size="lg" />
        Jest
      </motion.div>
    </div>
  );
}

export default AboutIcon;
