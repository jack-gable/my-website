"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { useEffect } from "react";
import styles from "./Typewriter.module.css";

const TypewriterEffect = ({ words }) => {
	// split text inside of words into array of characters
	const wordsArray = words.map((word) => {
		return {
			...word,
			text: word.text.split(""),
		};
	});

	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);
	useEffect(() => {
		if (isInView) {
			animate(
				"span",
				{
					display: "inline-block",
					opacity: 1,
					width: "fit-content",
				},
				{
					duration: 0.3,
					delay: stagger(0.1),
					ease: "easeInOut",
				}
			);
		}
	}, [isInView, animate]);

	const renderWords = () => {
		return (
			<motion.div ref={scope} className={styles.inline}>
				{wordsArray.map((word, idx) => {
					return (
						<div key={`word-${idx}`} className={styles.inlineBlock}>
							{word.text.map((char, index) => (
								<motion.span
									initial={{}}
									key={`char-${index}`}
									className={styles.word}
								>
									{char}
								</motion.span>
							))}
							&nbsp;
						</div>
					);
				})}
			</motion.div>
		);
	};
	return (
		<div className={styles.wordWrapper}>
			{renderWords()}
			<motion.span
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.8,
					repeat: Infinity,
					repeatType: "reverse",
				}}
				className={styles.cursor}
			></motion.span>
		</div>
	);
};

export default TypewriterEffect;
