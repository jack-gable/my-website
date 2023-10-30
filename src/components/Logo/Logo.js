import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";

function Logo({ mobileAlignment = "left" }) {
	return (
		<Link
			className={styles.wrapper}
			href="/"
			data-mobile-alignment={mobileAlignment}
		>
			JG
		</Link>
	);
}

export default Logo;
