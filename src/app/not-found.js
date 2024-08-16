import React from "react";
import { PORTFOLIO_TITLE } from "@/constants";
import styles from "./not-found.module.css";
import Button from "@/components/Button";
import { FaHome } from "react-icons/fa";
import whateverPeep from "../../public/assests/img/peep-whatever.svg";
import Image from "next/image";

export const metadata = {
	title: `404 • ${PORTFOLIO_TITLE}`,
};

function notFound() {
	return (
		<div className={styles.wrapper}>
			<h1>404 Not Found</h1>
			<p>This page does not exist. Please check the URL and try again.</p>
			<Button
				title="Return Home"
				icon={<FaHome />}
				position="right"
				href="/"
			/>
			<Image
				src={whateverPeep}
				alt=""
				height={300}
				width={200}
				className={styles.peep}
			/>
		</div>
	);
}

export default notFound;
