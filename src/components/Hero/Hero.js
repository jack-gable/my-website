"use client";
import React from "react";
import peep from "../../../public/assests/img/peep-46.svg";
import Image from "next/image";
import styles from "./Hero.module.css";
import Button from "../Button";
import { FaMessage } from "react-icons/fa6";

function Hero() {
  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.flexWrapper}>
          <div className={styles.container}>
            <h1 className={styles.title}>Hi, I&apos;m Jack Gable</h1>
            <p style={{ margin: 0 }}>
              I&apos;m a front-end developer based in California.
            </p>
            <div className={`${styles.linksWrapper} ${styles.paddingTop}`}>
              <Button
                title="Contact Me"
                href="#contact"
                position="right"
                icon={<FaMessage />}
              />
            </div>
          </div>
          <Image
            className={styles.peep}
            src={peep}
            alt=""
            height={300}
            width={200}
            priority={true}
            data-testid="hero-peep"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
