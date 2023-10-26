import React from "react";
import Contact from "@/components/Contact";

import styles from "./projectspage.module.css";
import Divider from "@/components/Divider";

function layout({ children }) {
	return (
		<div className={styles.wrapper}>
			{children}
			<Divider />
			<Contact />
		</div>
	);
}

export default layout;
