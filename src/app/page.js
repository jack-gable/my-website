import React from "react";
import styles from "./homepage.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";

function Home() {
	return (
		<div className={styles.wrapper}>
			<Hero />
			<About />
			<Divider />
			<Projects />
			<Divider />
			<Contact />
		</div>
	);
}

export default Home;
