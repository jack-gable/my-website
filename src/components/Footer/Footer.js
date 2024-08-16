import React from "react";
import { PORTFOLIO_TITLE } from "@/constants";
import styles from "./Footer.module.css";
import Socials from "../Socials";

function Footer() {
	return (
		<footer className={styles.wrapper}>
			<p className={styles.copyright}>&copy; 2024 {PORTFOLIO_TITLE}</p>
			<div>
				<Socials />
			</div>
		</footer>
	);
}

export default Footer;
