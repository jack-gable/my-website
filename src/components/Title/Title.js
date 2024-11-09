"use client";

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./Title.module.css";

const Title = ({ heading = "h1", title }) => {
  const Tag = heading;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <Tag
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "none" : "translateX(-100px)",
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className={styles.title}
    >
      {title}
    </Tag>
  );
};

export default Title;
