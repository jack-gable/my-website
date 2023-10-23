import React from "react";
import { PORTFOLIO_TITLE } from "@/constants";

import styles from "./Footer.module.css";

function Footer() {
	return (
		<footer>
			<div className={styles.wrapper}>&copy; 2023 - {PORTFOLIO_TITLE}</div>
		</footer>
	);
}

export default Footer;
