"use client";
import React from "react";
import peep from "../../../public/assests/img/peep-46.svg";
import Image from "next/image";
import styles from "./Hero.module.css";
import Link from "next/link";
import { FiArrowRight as Arrow } from "react-icons/fi";
import TypewriterEffect from "../Typewriter";

const words = [
	{
		text: "Hi",
	},
	{
		text: "I'm",
	},
	{
		text: "Jack",
	},
	{
		text: "Gable",
	},
];

function Hero() {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.flexWrapper}>
					<div className={styles.container}>
						<TypewriterEffect words={words} />
						<p style={{ margin: 0 }}>
							I&apos;m a developer and tech enthusiast based in
							California.
						</p>
						<div
							className={`${styles.linksWrapper} ${styles.paddingTop}`}
						>
							<Link href="/projects" className={styles.link}>
								view my projects
								<span className={styles.arrow}>
									<Arrow strokeWidth={3} />
								</span>
							</Link>
							<Link href="/contact" className={styles.link}>
								Contact Me
								<span className={styles.arrow}>
									<Arrow strokeWidth={3} />
								</span>
							</Link>
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
