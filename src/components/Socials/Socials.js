"use client";

import React from "react";
import styles from "./Socials.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import SocialLink from "../SocialLink";

function Socials({ size }) {
	return (
		<div className={styles.socials}>
			<SocialLink
				icon={<FaLinkedin size={size} />}
				text="LinkedIn"
				className={styles.link}
				href="https://www.linkedin.com/in/jack-gable/"
				target="_blank"
				rel="noreferrer"
			/>
			<SocialLink
				icon={<FaGithub size={size} />}
				text="Github"
				className={styles.link}
				href="https://github.com/jack-gable"
				target="_blank"
				rel="noreferrer"
			/>
		</div>
	);
}

export default Socials;
