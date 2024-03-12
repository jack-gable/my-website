import React from "react";
import { PORTFOLIO_TITLE } from "@/constants";
import styles from "./project.module.css";
import Image from "next/image";
import Button from "@/components/Button";
import { getProjectInfo } from "@/projectData";

export async function generateMetadata({ params }) {
	const project = getProjectInfo(params.slug);

	return {
		title: `${project.title} • ${PORTFOLIO_TITLE}`,
	};
}

function Projectpage({ params }) {
	const project = getProjectInfo(params.slug);
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.title}>{project.title}</h1>
			<p className={styles.desc}>{project.desc}</p>
			<h3 className={styles.subtitle}>Tech Stack</h3>
			<div className={styles.container}>
				<div className={styles.techStack}>
					{project.tech.map(({ name, Icon, color }, index) => {
						return (
							<div
								key={index}
								className={styles.icon}
								style={{ border: `2px solid ${color}` }}
							>
								{name === "Styled-components" ? (
									<>💅 </>
								) : (
									<Icon size="24" color={color} />
								)}
								{name}
							</div>
						);
					})}
				</div>
				<Button href={project.href} target="_blank" aria-label="view live site">
					View Live Site
				</Button>
			</div>
			<div className={styles.container}>
				{project.images.map((image, index) => (
					<div key={index} className={styles.imageContainer}>
						<Image
							className={styles.image}
							src={image}
							alt="An image of the project"
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projectpage;
