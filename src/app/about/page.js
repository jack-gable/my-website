import React from "react";
import styles from "./aboutpage.module.css";
import TypewriterEffect from "@/components/Typewriter";
import AboutIcon from "@/components/AboutIcon";
import Button from "@/components/Button";
import { FaMessage } from "react-icons/fa6";
import { PORTFOLIO_TITLE } from "@/constants";

export const metadata = {
	title: `About • ${PORTFOLIO_TITLE}`,
};

const words = [
	{
		text: "About",
	},
	{
		text: "Me",
	},
];

const Aboutpage = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<TypewriterEffect words={words} />
				<p className={styles.aboutText}>
					I&apos;m a frontend developer based out of the San Francisco
					Bay Area. I love crafting intuitive user-centric and
					aesthetically pleasing web applications. I&apos;m constantly
					learning new and exciting technologies. Shoot me a message
					to see what I&apos;m currently working on or if you want to
					find out more about me.
				</p>
				<Button
					title="Contact Me"
					href="/contact"
					position="right"
					icon={<FaMessage />}
				/>
			</div>
			<div className={styles.techContainer}>
				<h2 className={styles.subtitle}>My tech stack</h2>
				<AboutIcon />
			</div>
		</div>
	);
};

export default Aboutpage;
