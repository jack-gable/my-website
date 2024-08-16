"use client";
import React, { useEffect } from "react";
import TypewriterEffect from "@/components/Typewriter";
import styles from "./projects.module.css";
import { projectsData } from "@/projectData";
import ProjectsCard from "@/components/ProjectsCard";
import { stagger, useAnimate, useInView } from "framer-motion";

const words = [
	{
		text: "Projects",
	},
];

const Projects = () => {
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope);

	useEffect(() => {
		if (isInView) {
			animate(
				"div",
				{
					opacity: 1,
					scale: 1,
					filter: "blur(0px)",
				},
				{
					duration: 0.6,
					delay: stagger(0.2, { startDelay: 0.15 }),
				}
			);
		}
	}, [isInView, animate]);

	return (
		<div className={styles.wrapper}>
			<TypewriterEffect words={words} />
			<div ref={scope} className={styles.projectsContainer}>
				{projectsData.map(
					({ id, title, icon, github, live, desc, img }) => (
						<ProjectsCard
							key={id}
							title={title}
							icon={icon}
							githubLink={github}
							liveLink={live}
							desc={desc}
							backgroundImage={img}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Projects;
