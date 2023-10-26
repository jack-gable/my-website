import React from "react";
import { PORTFOLIO_TITLE } from "@/constants";

import styles from "./not-found.module.css";
import Button from "@/components/Button";

export const metadata = {
	title: `404 Not Found • ${PORTFOLIO_TITLE}`,
};

function notFound() {
	return (
		<div className={styles.wrapper}>
			<h1>404 Not Found</h1>
			<p>This page does not exist. Please check the URL and try again.</p>
			<Button href="/">Return Home</Button>
		</div>
	);
}

export default notFound;
