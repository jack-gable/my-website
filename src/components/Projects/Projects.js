import React from "react";
import Button from "../Button";
import todoPic1 from "../../../public/assests/img/todo-project-2.png";
import movieSearch1 from "../../../public/assests/img/movie-app-3.png";
import weatherApp3 from "../../../public/assests/img/weather-app-3.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Projects.module.css";

const PROJECTS = [
	{
		image: todoPic1,
		alt: "A todo app",
		title: "Todo List App 📝",
		description:
			"A lightweight todo list application with key features including light/dark mode.",
		href: "/project/todoApp",
		ariaLabel: "view project - todo app",
	},
	{
		image: movieSearch1,
		alt: "A movie search app",
		title: "Movie Search App 🍿",
		description:
			"A web application for users to favorite the current top rated movies.",
		href: "/project/movieSearch",
		ariaLabel: "view project - movie app",
	},
	{
		image: weatherApp3,
		alt: "A weather app",
		title: "MyWeather App 🌦️",
		description:
			"Developed a web application that shows the user the weather based on the users location input.",
		href: "/project/weatherApp",
		ariaLabel: "view project - weather app",
	},
];

function Projects() {
	return (
		<div className={styles.wrapper} id="projects">
			<div className={styles.headingWrapper}>
				<h2 className={styles.title}>My Projects</h2>
				<p className={styles.desc}>
					Below are some projects that I&apos;ve built. Check them out
					on Github or click the links to view the live versions.
				</p>
				<Button
					href="https://github.com/jack-gable"
					target="_blank"
					aria-label="view my github profile"
				>
					View my Github
				</Button>
			</div>
			<div className={styles.projectsContainer}>
				{PROJECTS.map(
					({ image, alt, title, description, href, ariaLabel }) => (
						<article key={title} className={styles.project}>
							<Image
								className={styles.projectImage}
								src={image}
								alt={alt}
								loading="lazy"
							/>
							<div className={styles.container}>
								<div>
									<h3 className={styles.projectTitle}>
										{title}
									</h3>
									<p>{description}</p>
								</div>
								<Link
									className={styles.projectButton}
									href={href}
									aria-label={ariaLabel}
								>
									VIEW PROJECT{" "}
									<span className={styles.arrow}>
										<FontAwesomeIcon icon={faArrowRight} />
									</span>
								</Link>
							</div>
						</article>
					)
				)}
			</div>
		</div>
	);
}

export default Projects;
