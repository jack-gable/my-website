import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./contactpage.module.css";
import { PORTFOLIO_TITLE } from "@/constants";
import Form from "@/components/Form";

export const metadata = {
	title: `Contact Me • ${PORTFOLIO_TITLE}`,
};

function Contactpage() {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>Contact Me</h1>
			<p>
				Please reach out to me if you have any questions! Shoot me a message if
				you want to find out more about me or the projects I am working on. Find
				me on LinkedIn or view my Github.
			</p>
			<div className={styles.socials}>
				<Link
					className={styles.socialsLink}
					href="https://www.linkedin.com/in/jack-gable/"
					target="_blank"
					rel="noreferrer"
					aria-labelledby="linkedin"
				>
					LinkedIn
					<FontAwesomeIcon icon={faLinkedin} size="xl" />
					<VisuallyHidden>Visit my profile on LinkedIn</VisuallyHidden>
				</Link>
				<Link
					className={styles.socialsLink}
					href="https://github.com/jack-gable"
					target="_blank"
					rel="noreferrer"
					aria-labelledby="github"
				>
					Github
					<FontAwesomeIcon icon={faGithub} size="xl" />
					<VisuallyHidden>Visit my profile on Github</VisuallyHidden>
				</Link>
			</div>

			<Form />
		</div>
	);
}

export default Contactpage;
