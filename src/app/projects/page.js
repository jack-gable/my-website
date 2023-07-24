"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import notesApp1 from "../../../public/assests/img/notes-app-1.png";
import movieSearch1 from "../../../public/assests/img/movie-search-1.png";
import movieSearch2 from "../../../public/assests/img/movie-search-2.png";
import Image from "next/image";
import { motion } from "framer-motion";

const PROJECTS = [
	{
		image: notesApp1,
		alt: "A notes app clone of Google Keep.",
		title: "Google Keep Clone",
		desc: "A small version of the Google Keep notes app. It's built with functional React components and styled components.",
		link: "https://reliable-malasada-b76007.netlify.app",
		id: 1,
	},
	{
		image: movieSearch1,
		alt: "A movie search app",
		title: "Movie Search App",
		desc: "Movie Search is a simple movie lookup site that allows the user to find his/her favorite movies. It's built with functional React components.",
		link: "https://lively-seahorse-d423ea.netlify.app/",
		id: 2,
	},
	{
		image: movieSearch2,
		alt: "A movie search app",
		title: "Movie Search App",
		desc: "Movie Search is a simple movie lookup site that allows the user to find his/her favorite movies. It's built with functional React components.",
		link: "https://lively-seahorse-d423ea.netlify.app/",
		id: 3,
	},
];

export default function Projectspage() {
	return (
		<>
			<div className={styles.container}>
				<div>
					<motion.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.3,
							ease: "easeInOut",
							scale: {
								type: "spring",
								damping: 10,
								stiffness: 120,
								restDelta: 0.001,
							},
						}}
						className={styles.title}
					>
						My Projects
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 0.1,
							duration: 0.3,
							ease: "easeInOut",
							scale: {
								type: "spring",
								damping: 10,
								stiffness: 120,
								restDelta: 0.001,
							},
						}}
						className={styles.text}
					>
						Below are some projects that I&apos;ve built. Check them out on
						Github or click the links to view the live versions.
					</motion.p>
					<Button href="https://github.com/jack-gable">View on Github</Button>
				</div>
			</div>
			<div className={styles.projects}>
				{PROJECTS.map(({ image, alt, title, desc, link, id }) => (
					<div key={id} className={styles.imageContainer}>
						<Image
							src={image}
							alt={alt}
							width={300}
							height={200}
							loading="lazy"
							style={{ borderRadius: 10 }}
						/>
						<div className={styles.text}>
							<h3>{title}</h3>
							<p className={styles.desc}>{desc}</p>
							<Button href={link}>See live version</Button>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
