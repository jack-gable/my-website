import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

import { PORTFOLIO_TITLE } from "@/constants";

function Logo({ mobileAlignment = "left" }) {
	return (
		<Link
			className={styles.wrapper}
			href="/"
			data-mobile-alignment={mobileAlignment}
		>
			{PORTFOLIO_TITLE}
		</Link>
	);
}

export default Logo;
