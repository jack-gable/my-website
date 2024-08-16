import React from "react";
import styles from "./contactpage.module.css";
import { PORTFOLIO_TITLE } from "@/constants";
import TypewriterEffect from "@/components/Typewriter";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import sittingPeep from "../../../public/assests/img/peep-sitting.svg";
import Button from "@/components/Button";

export const metadata = {
	title: `Contact • ${PORTFOLIO_TITLE}`,
};

const words = [
	{
		text: "Contact",
	},
	{
		text: "Me",
	},
];

function Contactpage() {
	return (
		<div className={styles.wrapper}>
			<TypewriterEffect words={words} />
			<p className={styles.contactText}>
				Feel free to reach out to me! Shoot me a email if you want to
				find out more about me or would like to work on something
				together. Find me on LinkedIn and Github too!
			</p>
			<div className={styles.socials}>
				<Button
					title="LinkedIn"
					icon={<FaLinkedin />}
					position="right"
					href="https://www.linkedin.com/in/jack-gable/"
					target="_blank"
					rel="noreferrer"
				/>
				<Button
					title="Github"
					icon={<FaGithub />}
					position="right"
					href="https://github.com/jack-gable"
					target="_blank"
					rel="noreferrer"
				/>
				<Button
					title="Email Me"
					icon={<FiMail />}
					position="right"
					href="mailto:jackgable13@gmail.com"
				/>
			</div>
			<Image
				src={sittingPeep}
				alt=""
				height={300}
				width={200}
				className={styles.peep}
			/>
		</div>
	);
}

export default Contactpage;
