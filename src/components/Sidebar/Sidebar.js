import React from "react";
import Link from "next/link";
import styles from "@/components/Sidebar/Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faHome,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Sidebar() {
	return (
		<div className={styles.sidenav}>
			<Link className={styles.logo} href="/">
				<div>JG</div>
			</Link>
			<nav className={styles.nav}>
				<Link className={styles.link} href="/" activeclassname="active">
					<FontAwesomeIcon className={styles.icon} icon={faHome} />
					<div className={styles.navText}>HOME</div>
				</Link>
				<Link className={styles.link} href="/about">
					<FontAwesomeIcon className={styles.icon} icon={faUser} />
					<div className={styles.navText}>ABOUT</div>
				</Link>
				<Link className={styles.link} href="/projects">
					<FontAwesomeIcon className={styles.icon} icon={faLaptopFile} />
					<div className={styles.navText}>PROJECTS</div>
				</Link>
				<Link className={styles.link} href="/contact">
					<FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
					<div className={styles.navText}>CONTACT</div>
				</Link>
			</nav>
			<div>
				<ul className={styles.list}>
					<li>
						<Link
							href="https://www.linkedin.com/in/jack-gable/"
							target="_blank"
							rel="noreferrer"
							className={styles.listItem}
						>
							<FontAwesomeIcon icon={faLinkedin} />
						</Link>
					</li>
					<li>
						<Link
							href="https://github.com/jack-gable"
							target="_blank"
							rel="noreferrer"
							className={styles.listItem}
						>
							<FontAwesomeIcon icon={faGithub} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
