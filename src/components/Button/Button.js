import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

function Button({ href, children, ...delegated }) {
	const Tag = typeof href === "string" ? Link : "button";
	return (
		<Tag className={styles.pushable} href={href} {...delegated}>
			<span className={styles.front}>{children}</span>
		</Tag>
	);
}

export default Button;
