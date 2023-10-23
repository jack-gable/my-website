import React from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faHtml5,
	faCss3,
	faJsSquare,
	faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

import styles from "./About.module.css";

function About() {
	return (
		<div className={styles.wrapper} id="about">
			<div>
				<h2 className={styles.title}>About Me</h2>
				<p className={styles.desc}>
					I&apos;m a frontend developer based out of the San Francisco Bay Area.
					I love building apps that are accessible and user-friendly.
				</p>
			</div>

			<div className={styles.iconWrapper}>
				<div className={styles.icon} style={{ border: "2px solid #5ed4f4" }}>
					<FontAwesomeIcon icon={faReact} color="#5ed4f4" size="lg" />
					React
				</div>
				<div className={styles.icon} style={{ border: "2px solid #f06529" }}>
					<FontAwesomeIcon icon={faHtml5} color="#f06529" size="lg" />
					HTML5
				</div>
				<div className={styles.icon} style={{ border: "2px solid #28a4d9" }}>
					<FontAwesomeIcon icon={faCss3} color="#28a4d9" size="lg" />
					CSS3
				</div>
				<div className={styles.icon} style={{ border: "2px solid #efd81d" }}>
					<FontAwesomeIcon icon={faJsSquare} color="#efd81d" size="lg" />
					JavaScript
				</div>
				<div className={styles.icon} style={{ border: "2px solid #ec4d28" }}>
					<FontAwesomeIcon icon={faGitAlt} color="#ec4d28" size="lg" />
					Git
				</div>
				<div className={styles.icon} style={{ border: "2px solid #06b6d4" }}>
					<div className={styles.tailwindIcon}>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#06b6d4"
								d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
							/>
						</svg>
					</div>
					Tailwind-CSS
				</div>
				<div className={styles.icon} style={{ border: "2px solid #f0abee" }}>
					💅 Styled-Components
				</div>
			</div>
			<div>
				<h3 className={styles.backgroundTitle}>Get to know Me!</h3>
				<p className={styles.desc}>
					My background is in biology and computer science. I have a Bachelors
					of Science in Biology and a minor in Computer Science from Sonoma
					State University. When I&apos;m not working on side projects or
					learning new technologies, I like to play basketball with my friends
					or workout.
				</p>
			</div>
		</div>
	);
}

export default About;
