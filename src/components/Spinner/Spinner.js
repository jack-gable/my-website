import React from "react";
import { Loader } from "react-feather";

import styles from "./spinner.module.css";

export default function Spinner() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.loadingSpinner}>
				<Loader />
			</div>
		</div>
	);
}
