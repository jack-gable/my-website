import React from "react";
import Button from "../Button";
import notesApp1 from "../../../public/assests/img/notes-app-1.png";
import movieSearch1 from "../../../public/assests/img/movie-search-1.png";
import weatherApp1 from "../../../public/assests/img/weather-app-1.png";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import styles from "./Projects.module.css";

function Projects() {
	return (
		<div className={styles.wrapper} id="projects">
			<div className={styles.headingWrapper}>
				<h2 className={styles.title}>My Projects</h2>
				<p className={styles.desc}>
					Below are some projects that I&apos;ve built. Check them out on Github
					or click the links to view the live versions.
				</p>
				<Button href="https://github.com/jack-gable" target="_blank">
					View my Github
				</Button>
			</div>
			<div className={styles.projectsContainer}>
				<article className={styles.project}>
					<Image
						className={styles.projectImage}
						src={notesApp1}
						alt="A notes app clone of Google Keep."
						loading="lazy"
					/>
					<div className={styles.container}>
						<div>
							<h3 className={styles.projectTitle}>Google Keep Clone</h3>
							<p>
								A small version of the Google Keep notes app. It&apos;s a simple
								and minimalistic approach to the very popular note taking app.
							</p>
						</div>
						<Link
							className={styles.projectButton}
							// href="https://reliable-malasada-b76007.netlify.app"
							// target="_blank"
							href="/projects/google-keep-project"
						>
							VIEW PROJECT{" "}
							<span className={styles.arrow}>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Link>
					</div>
				</article>
				<article className={styles.project}>
					<div className={styles.container}>
						<div>
							<h3 className={styles.projectTitle}>Movie Search App</h3>
							<p>
								A web application for users to browse their favorite movies
								based on movie title search.
							</p>
						</div>
						<Link
							className={styles.projectButton}
							href="https://lively-seahorse-d423ea.netlify.app/"
							target="_blank"
						>
							VIEW PROJECT{" "}
							<span className={styles.arrow}>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Link>
					</div>
					<Image
						className={styles.projectImage}
						src={movieSearch1}
						alt="A movie search app"
						loading="lazy"
					/>
				</article>
				<article className={styles.project}>
					<Image
						className={styles.projectImage}
						src={weatherApp1}
						alt="A weather app"
						loading="lazy"
					/>
					<div className={styles.container}>
						<div>
							<h3 className={styles.projectTitle}>MyWeather App</h3>
							<p>
								Developed a web application that shows the user the weather
								based on a user location input.
							</p>
						</div>
						<Link
							className={styles.projectButton}
							href="https://tourmaline-sherbet-89e3c3.netlify.app/"
							target="_blank"
						>
							VIEW PROJECT{" "}
							<span className={styles.arrow}>
								<FontAwesomeIcon icon={faArrowRight} />
							</span>
						</Link>
					</div>
				</article>
			</div>
		</div>
	);
}

export default Projects;
