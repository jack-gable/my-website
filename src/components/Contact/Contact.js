"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Map from "@/components/Map";
import styled from "styled-components";

export default function Contact() {
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
			<div>
				<h1>Contact Me</h1>
				<p>
					Please reach out to me if you have any questions! Shoot me a message
					if you want to find out more about me or the projects I am working on.
				</p>
				<div>
					<div>
						<form ref={formRef} onSubmit={sendEmail}>
							<ul>
								<li>
									<input type="text" name="name" placeholder="Name" required />
								</li>
								<li>
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
									/>
								</li>
								<li>
									<input
										placeholder="Subject"
										type="text"
										name="subject"
										required
									/>
								</li>
								<li>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</li>
								<li>
									<button type="submit">
										{status === "idle" && <p>SEND</p>}
										{status === "loading" && <p>SENDING...</p>}
										{status === "success" && <p>MESSAGE SENT!</p>}
									</button>
								</li>
							</ul>
						</form>
					</div>
					<div>
						<Map />
					</div>
				</div>
			</div>
		</>
	);
}
