import React from "react";
import Button from "../Button";

import styles from "./Contact.module.css";

function Contact() {
	return (
		<div className={styles.wrapper}>
			<h2 className={styles.title}>Contact Me</h2>
			<p className={styles.desc}>
				Please feel free to reach out if you&apos;re looking for a developer,
				want to know more about me, or want to connect.
			</p>
			<Button href="/contact">CONTACT ME!</Button>
		</div>
	);
}

export default Contact;
