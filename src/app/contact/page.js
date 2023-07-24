"use client";
import React from "react";
import styles from "./page.module.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contactpage() {
	const formRef = React.useRef();
	const [status, setStatus] = React.useState("idle");

	const sendEmail = (e) => {
		e.preventDefault();

		setStatus("loading");

		emailjs
			.sendForm(
				"service_ytyznwp",
				"template_k123u8r",
				formRef.current,
				"T-qVPUOqL3MyNlEo0"
			)
			.then(
				(result) => {
					setStatus("success");
				},
				(error) => {
					alert("Failed to send message.");
					console.log(error);
					setStatus("error");
				}
			);

		e.target.reset();
	};

	React.useEffect(() => {
		if (status === "success") {
			window.setTimeout(() => setStatus("idle"), 3000);
		}
	}, [status]);

	React.useEffect(() => {
		if (status === "error") {
			window.alert("Error occurred while sending message");
		}
	}, [status]);

	return (
		<>
			<div className={styles.textZone}>
				<motion.h1
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						duration: 0.3,
						ease: "easeInOut",
						scale: {
							type: "spring",
							damping: 10,
							stiffness: 120,
							restDelta: 0.001,
						},
					}}
					className={styles.title}
				>
					Contact Me
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						delay: 0.1,
						duration: 0.3,
						ease: "easeInOut",
						scale: {
							type: "spring",
							damping: 10,
							stiffness: 120,
							restDelta: 0.001,
						},
					}}
					className={styles.text}
				>
					Please reach out to me if you have any questions! Shoot me a message
					if you want to find out more about me or the projects I am working on.
				</motion.p>
				<div className={styles.form}>
					<form ref={formRef} onSubmit={sendEmail}>
						<ul className={styles.formList}>
							<li className={`${styles.listItem} ${styles.half}`}>
								<input
									className={styles.nameInput}
									type="text"
									name="name"
									placeholder="Name"
									required
								/>
							</li>
							<li className={`${styles.listItem} ${styles.half}`}>
								<input
									className={styles.emailInput}
									type="email"
									name="email"
									placeholder="Email"
									required
								/>
							</li>
							<li className={styles.subjectItem}>
								<input
									className={styles.subjectInput}
									placeholder="Subject"
									type="text"
									name="subject"
									required
								/>
							</li>
							<li className={styles.listItem}>
								<textarea
									className={styles.message}
									placeholder="Message"
									name="message"
									required
								></textarea>
							</li>
							<li className={styles.listItem}>
								<button type="submit" className={styles.flatbtn}>
									{status === "idle" && <p>SEND</p>}
									{status === "loading" && <p>SENDING...</p>}
									{status === "success" && <p>MESSAGE SENT!</p>}
								</button>
							</li>
						</ul>
					</form>
				</div>
			</div>
		</>
	);
}
