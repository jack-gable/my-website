import React from "react";
import Link from "next/link";
import styles from "./Logo.module.css";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });

function Logo({ mobileAlignment = "left" }) {
	return (
		<Link
			className={styles.wrapper}
			href="/"
			data-mobile-alignment={mobileAlignment}
		>
			<div className={`${pacifico.className} ${styles.logo}`}>JG</div>
		</Link>
	);
}

export default Logo;
