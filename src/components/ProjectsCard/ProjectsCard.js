"use client";

import React from "react";
import styles from "./ProjectsCard.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function ProjectsCard({
	title,
	icon,
	githubLink,
	liveLink,
	desc,
	backgroundImage,
}) {
	return (
		<motion.div
			className={styles.wrapper}
			initial={{
				opacity: 0,
				scale: 0.3,
				filter: "blur(20px)",
			}}
		>
			<Image
				src={backgroundImage}
				alt=""
				width={1000}
				height={1000}
				className={styles.image}
			/>
			<div className={styles.content}>
				<div className={styles.container}>
					<h4 className={styles.title}>
						<span>{icon}</span>
						{title}
					</h4>
					<p className={styles.description}>{desc}</p>
				</div>
				<div className={styles.linkContainer}>
					<Link href={githubLink} className={styles.link}>
						Code
					</Link>
					{liveLink && (
						<Link href={liveLink} className={styles.link}>
							Live
						</Link>
					)}
				</div>
			</div>
		</motion.div>
	);
}

export default ProjectsCard;
