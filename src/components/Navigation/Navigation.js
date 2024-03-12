import React from "react";
import {
	faEnvelope,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";
import NavLink from "../NavLink";

function Navigation() {
	return (
		<nav>
			<ul className={styles.navList}>
				<li className={styles.listItem}>
					<NavLink
						className={styles.navLink}
						href="/#about"
						aria_label="about"
						icon={faUser}
					>
						<div>ABOUT</div>
					</NavLink>
				</li>
				<li className={styles.listItem}>
					<NavLink
						className={styles.navLink}
						href="/#projects"
						aria_label="projects"
						icon={faLaptopFile}
					>
						<div>PROJECTS</div>
					</NavLink>
				</li>
				<li className={styles.listItem}>
					<NavLink
						className={styles.navLink}
						href="/contact"
						aria_label="contact"
						icon={faEnvelope}
					>
						<div>CONTACT</div>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
