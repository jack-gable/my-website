import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBootstrap,
	faCss3,
	faGitAlt,
	faGitSquare,
	faHtml5,
	faJsSquare,
	faPython,
	faReact,
} from "@fortawesome/free-brands-svg-icons";

export default function Aboutpage() {
	return (
		<>
			<div className={styles.textZone}>
				<h1 className={styles.title}>About Me</h1>
				<p className={styles.text}>
					I&apos;m a frontend developer based out of the San Francisco Bay Area.
					I love building apps that are accessible and user-friendly. My
					specialities include JavaScript, React JS, Styled Components and
					Tailwind CSS.
				</p>

				<div>
					<h2 className={styles.subtitle}>Get to know Me!</h2>
					<p className={styles.text}>
						My background is in biology and computer science. I have a BSc in
						Biology and a minor in CS from Sonoma State University. When
						I&apos;m not coding, I like to play basketball with my friends or
						weight-lift.
					</p>
					<Button href="/contact">Contact Me</Button>
				</div>
			</div>
			<div className={styles.stageCubeCont}>
				<div className={styles.cubespinner}>
					<div className={styles.face1}>
						<FontAwesomeIcon icon={faReact} color="#5ed4f4" />
					</div>
					<div className={styles.face2}>
						<FontAwesomeIcon icon={faHtml5} color="#f06529" />
					</div>
					<div className={styles.face3}>
						<FontAwesomeIcon icon={faCss3} color="#28a4d9" />
					</div>
					<div className={styles.face4}>
						<FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
					</div>
					<div className={styles.face5}>
						<FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
					</div>
					<div className={styles.face6}>
						<FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
					</div>
				</div>
			</div>
		</>
	);
}
