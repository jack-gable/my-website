import React from "react";
import Link from "next/link";
import styles from "@/components/Sidebar/Sidebar.module.css";

export default function Sidebar({ width, closeNav }) {
	return (
		<nav className={styles.sidenav} style={{ width: width }}>
			<button className={styles.closebtn} onClick={closeNav}>
				&times;
			</button>
			<Link className={styles.link} href="/">
				Home
			</Link>

			<Link className={styles.link} href="/">
				About
			</Link>

			<Link className={styles.link} href="/">
				Projects
			</Link>

			<Link className={styles.link} href="/">
				Contact
			</Link>

			<Link className={styles.link} href="/">
				Resume
			</Link>
		</nav>
	);
}
