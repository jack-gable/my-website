import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFilePdf,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navigation.module.css";

function Navigation() {
	return (
		<nav>
			<ul className={styles.navList}>
				<li className={styles.listItem}>
					<Link className={styles.navLink} href="/#about">
						<FontAwesomeIcon icon={faUser} size="lg" />
						<div>ABOUT</div>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link className={styles.navLink} href="/#projects">
						<FontAwesomeIcon icon={faLaptopFile} size="lg" />
						<div>PROJECTS</div>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link className={styles.navLink} href="/contact">
						<FontAwesomeIcon icon={faEnvelope} size="lg" />
						<div>CONTACT</div>
					</Link>
				</li>
				<li className={styles.listItem}>
					<Link
						className={styles.navLink}
						href="https://drive.google.com/file/d/1xTN_QjNX06Xwm0cZ0vhPdVZiEu7rdDrU/view?usp=sharing"
						target="_blank"
						type="application/pdf"
					>
						<FontAwesomeIcon icon={faFilePdf} size="lg" />
						<div>RESUME</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
