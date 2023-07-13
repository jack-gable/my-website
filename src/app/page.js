import styles from "./page.module.css";
import Button from "@/components/Button";

export default function Home() {
	return (
		<main>
			<div className={styles.wrapper}>
				<div className={styles.info}>
					<p className={styles.text}>
						Hi, my name&apos;s <h1 className={styles.name}>Jack Gable</h1> I am
						a passionate frontend developer based in the San Francisco Bay Area.
						My specialities are <strong>React JS</strong> and{" "}
						<strong>Styled Components</strong>, and I love building responsive
						user-friendly apps.
					</p>
				</div>
				<div className={styles.cta}>
					<Button href="/">See My Projects</Button>
					<Button href="/">Learn More About Me</Button>
				</div>
			</div>
		</main>
	);
}
