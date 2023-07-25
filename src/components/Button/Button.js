import React from "react";
import Link from "next/link";
import styles from "@/components/Button/Button.module.css";

export default function Button({ href, children, ...delegated }) {
	return (
		<Link href={href} className={styles.btn} {...delegated}>
			{children}
		</Link>
	);
}
