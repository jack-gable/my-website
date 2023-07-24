"use client";
import React from "react";
import Button from "../Button";
import styles from "./Cta.module.css";
import { motion } from "framer-motion";

export default function Cta() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.flex}>
					<div className={styles.text}>
						<motion.p
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								duration: 0.3,
								ease: "easeInOut",
								scale: {
									type: "spring",
									damping: 10,
									stiffness: 120,
									restDelta: 0.001,
								},
							}}
						>
							Hi, my name&apos;s
						</motion.p>
						<motion.h1
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: 0.2,
								duration: 0.3,
								ease: "easeInOut",
								scale: {
									type: "spring",
									damping: 10,
									stiffness: 120,
									restDelta: 0.001,
								},
							}}
							className={styles.title}
						>
							Jack Gable
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{
								delay: 0.3,
								duration: 0.3,
								ease: "easeInOut",
								scale: {
									type: "spring",
									damping: 10,
									stiffness: 120,
									restDelta: 0.001,
								},
							}}
						>
							Frontend developer / React specialist
						</motion.h2>
					</div>
					<div>
						<Button href="/contact">CONTACT ME</Button>
					</div>
				</div>
			</div>
		</>
	);
}
