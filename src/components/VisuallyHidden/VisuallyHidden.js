import React from "react";
import styles from "./VisuallyHidden.module.css";

export default function VisuallyHidden({ children, ...delegated }) {
	return (
		<div className={styles.wrapper} {...delegated}>
			{children}
		</div>
	);
}
