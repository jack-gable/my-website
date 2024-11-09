"use client";

import React, { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import styles from "./Title.module.css";

const Title = ({ heading = "h1", title }) => {
  const Tag = heading;
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const animations = shouldReduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
      }
    : {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <Tag
      ref={ref}
      {...animations}
      animate={isInView ? "animate" : "initial"}
      style={{
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={styles.title}
    >
      {title}
    </Tag>
  );
};

export default Title;
