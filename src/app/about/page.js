"use client";
import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

export default function Aboutpage() {
	return (
		<>
			<div className={styles.textZone}>
				<motion.h1
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
					className={styles.title}
				>
					About Me
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						delay: 0.1,
						duration: 0.3,
						ease: "easeInOut",
						scale: {
							type: "spring",
							damping: 10,
							stiffness: 120,
							restDelta: 0.001,
						},
					}}
					className={styles.text}
				>
					I&apos;m a frontend developer based out of the San Francisco Bay Area.
					I love building apps that are accessible and user-friendly. My
					specialities include JavaScript, React JS, Styled Components and
					Tailwind CSS.
				</motion.p>

				<div>
					<motion.h2
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
						className={styles.subtitle}
					>
						Get to know Me!
					</motion.h2>
					<motion.p
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
						className={styles.text}
					>
						My background is in biology and computer science. I have a BSc in
						Biology and a minor in CS from Sonoma State University. When
						I&apos;m not coding, I like to play basketball with my friends or
						I&apos;m weight-lifting.
					</motion.p>
					<Button href="/contact">Contact Me</Button>
				</div>
			</div>
			<div className={styles.stageCubeCont}>
				<div className={styles.cubespinner}>
					<div className={styles.face1}>
						<FontAwesomeIcon icon={faReact} color="#5ed4f4" />
					</div>
					<div className={styles.face2}>
						<FontAwesomeIcon icon={faHtml5} color="#f06529" />
					</div>
					<div className={styles.face3}>
						<FontAwesomeIcon icon={faCss3} color="#28a4d9" />
					</div>
					<div className={styles.face4}>
						<FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
					</div>
					<div className={styles.face5}>
						<FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
					</div>
					<div className={styles.face6}>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#06b6d4"
								d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</>
	);
}
