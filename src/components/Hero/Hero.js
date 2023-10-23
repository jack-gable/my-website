"use client";
import React from "react";
import Button from "../Button";
import peep from "../../../public/assests/img/peep-46.svg";
import Image from "next/image";

import styles from "./Hero.module.css";

function Hero() {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.flexWrapper}>
					<div>
						<p>Hi, my name&apos;s</p>
						<h1 className={styles.title}>Jack Gable</h1>
						<h2>Web Developer | Front-End Engineer</h2>
					</div>
					<Image className={styles.peep} src={peep} alt="" />
				</div>
				<div className={styles.buttonWrapper}>
					<Button href="/contact">CONTACT ME</Button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
