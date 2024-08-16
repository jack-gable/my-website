import React from "react";
import styles from "./homepage.module.css";
import Hero from "@/components/Hero";

function Home() {
	return (
		<div className={styles.wrapper}>
			<Hero />
		</div>
	);
}

export default Home;
