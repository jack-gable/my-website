import React from "react";
import Link from "next/link";
import styles from "./Button.module.css";

const Button = ({ title, icon, position, href, ...rest }) => {
	return (
		<Link href={href} className={styles.btn} {...rest}>
			<span className={styles.textWrapper} />
			<span className={styles.text}>
				{position === "left" && icon}
				{title}
				{position === "right" && icon}
			</span>
		</Link>
	);
};

export default Button;
