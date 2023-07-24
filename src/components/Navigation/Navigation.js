"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFilePdf,
	faFileWord,
	faHome,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";

const LINKS = [
	{
		slug: "home",
		label: "HOME",
		href: "/",
		icon: faHome,
		target: "",
	},
	{
		slug: "about",
		label: "ABOUT",
		href: "/about",
		icon: faUser,
		target: "",
	},
	{
		slug: "projects",
		label: "PROJECTS",
		href: "/projects",
		icon: faLaptopFile,
		target: "",
	},
	{
		slug: "contact",
		label: "CONTACT",
		href: "/contact",
		icon: faEnvelope,
		target: "",
	},
	{
		slug: "resume",
		label: "RESUME",
		href: "/",
		icon: faFilePdf,
		target: "",
	},
];

export default function Navigation() {
	const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

	const id = React.useId();

	return (
		<nav className={styles.nav} onMouseLeave={() => setHoveredNavItem(null)}>
			<ul className={styles.navList}>
				{LINKS.map(({ slug, label, href, icon, target }) => (
					<li
						key={slug}
						className={styles.listItem}
						style={{
							zIndex: hoveredNavItem === slug ? 1 : 2,
						}}
					>
						{hoveredNavItem === slug && (
							<motion.div
								layoutId={id}
								className={styles.hovered}
								initial={{
									borderRadius: 8,
								}}
							/>
						)}

						<Link
							className={styles.link}
							href={href}
							target={target}
							onMouseEnter={() => setHoveredNavItem(slug)}
						>
							<FontAwesomeIcon icon={icon} size="xl" />
							<div>{label}</div>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
