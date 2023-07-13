"use client";
import React from "react";
import Link from "next/link";
import styles from "@/components/Header/Header.module.css";
import Sidebar from "../Sidebar";

export default function Header() {
	const [width, setWidth] = React.useState("0%");

	function closeNav() {
		setWidth("0%");
	}

	return (
		<header>
			<div className={styles.wrapper}>
				<div className={styles.logo}>JG</div>
				<button onClick={() => setWidth("100%")} className={styles.menu}>
					Menu
				</button>
				<nav className={styles.nav}>
					<ul className={styles.nav_list}>
						<li>
							<Link className={styles.link} href="/">
								Home
							</Link>
						</li>
						<li>
							<Link className={styles.link} href="/about">
								About
							</Link>
						</li>
						<li>
							<Link className={styles.link} href="/projects">
								Projects
							</Link>
						</li>
						<li>
							<Link className={styles.link} href="/contact">
								Contact
							</Link>
						</li>
						<li>
							<Link className={styles.link} href="/">
								Resume
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Sidebar width={width} closeNav={closeNav} />
		</header>
	);
}
