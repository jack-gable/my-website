"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Button from "../Button";
import styles from "./Form.module.css";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
import Reaptcha from "reaptcha";

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
						ref={inputRef}
						type="text"
						name="name"
						placeholder="Name"
						required
					/>
				</li>
				<li className={styles.listItem}>
					<input type="email" name="email" placeholder="Email" required />
				</li>
				<li className={styles.listItem}>
					<input placeholder="Subject" type="text" name="subject" required />
				</li>
				<li className={styles.listItem}>
					<textarea placeholder="Message" name="message" required></textarea>
				</li>
				<li className={`${styles.listItem} ${styles.recaptcha}`}>
					<Reaptcha
						sitekey={process.env.SITE_KEY}
						ref={captchaRef}
						onVerify={verify}
					/>
				</li>
				{captchaToken && (
					<li className={styles.listItem}>
						<Button type="submit">
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
