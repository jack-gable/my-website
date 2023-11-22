"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import styles from "./Form.module.css";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import Reaptcha from "reaptcha";
import VisuallyHidden from "../VisuallyHidden";

function Form() {
	const router = useRouter();
	const formRef = React.useRef();
	const inputRef = React.useRef();
	const captchaRef = React.useRef();
	const [status, setStatus] = React.useState("idle");
	const [captchaToken, setCaptchaToken] = React.useState(null);

	const verify = () => {
		captchaRef.current.getResponse().then((res) => {
			setCaptchaToken(res);
		});
	};

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
			window.setTimeout(() => setStatus("idle"), 4000);
			router.push("/");
		}
	}, [status, router]);

	React.useEffect(() => {
		if (status === "error") {
			window.alert("Error occurred while sending message");
		}
	}, [status]);

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);

	return (
		<form className={styles.form} ref={formRef} onSubmit={sendEmail}>
			<ul className={styles.formList}>
				<li className={styles.listItem}>
					<input
						id="name"
						ref={inputRef}
						type="text"
						name="name"
						placeholder="Name"
						required
						aria-labelledby="name"
						autoComplete={true}
					/>
				</li>
				<li className={styles.listItem}>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Email"
						required
						aria-labelledby="email"
						autoComplete={true}
					/>
				</li>
				<li className={styles.listItem}>
					<input
						id="subject"
						placeholder="Subject"
						type="text"
						name="subject"
						required
						aria-labelledby="subject"
					/>
				</li>
				<li className={styles.listItem}>
					<textarea
						id="message"
						placeholder="Message"
						name="message"
						required
						aria-labelledby="message"
					></textarea>
				</li>
				<li className={`${styles.listItem} ${styles.recaptcha}`}>
					<Reaptcha
						sitekey={process.env.SITE_KEY}
						ref={captchaRef}
						onVerify={verify}
					/>
					<VisuallyHidden>recaptcha</VisuallyHidden>
				</li>
				{captchaToken && (
					<li className={styles.listItem}>
						<Button type="submit" aria-label="submit">
							{status === "idle" && <>SEND</>}
							{status === "loading" && <Spinner />}
							{status === "success" && <>MESSAGE SENT!</>}
						</Button>
					</li>
				)}
			</ul>
		</form>
	);
}

export default Form;
