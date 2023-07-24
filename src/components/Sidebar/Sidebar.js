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
import Navigation from "../Navigation";

export default function Sidebar() {
	return (
		<div className={styles.sidenav}>
			<Link className={styles.logo} href="/">
				<div>JG</div>
			</Link>
			<Navigation />
			<div>
				<ul className={styles.list}>
					<li>
						<Link
							href="https://www.linkedin.com/in/jack-gable/"
							target="_blank"
							rel="noreferrer"
							className={styles.listItem}
						>
							<FontAwesomeIcon icon={faLinkedin} size="xl" />
						</Link>
					</li>
					<li>
						<Link
							href="https://github.com/jack-gable"
							target="_blank"
							rel="noreferrer"
							className={styles.listItem}
						>
							<FontAwesomeIcon icon={faGithub} size="xl" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
