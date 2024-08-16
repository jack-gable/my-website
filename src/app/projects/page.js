import React from "react";
import Projects from "@/components/Projects";
import { PORTFOLIO_TITLE } from "@/constants";

export const metadata = {
	title: `Projects • ${PORTFOLIO_TITLE}`,
};

const Projectspage = () => {
	return (
		<>
			<Projects />
		</>
	);
};

export default Projectspage;
