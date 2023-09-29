"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Map from "@/components/Map";
import styled from "styled-components";
import dynamic from "next/dynamic";
import Spinner from "@/components/Spinner";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import VisuallyHidden from "@/components/VisuallyHidden";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const DynamicMap = dynamic(() => import("@/components/Map"), {
	ssr: false,
	loading: Spinner,
});

export default function Contactpage() {
	const formRef = React.useRef();
	const [status, setStatus] = React.useState("idle");
	const router = useRouter();

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
		router.push("/");
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
			<Wrapper>
				<Title>Contact Me</Title>
				<p>
					Please reach out to me if you have any questions! Shoot me a message
					if you want to find out more about me or the projects I am working on.
					Find me on LinkedIn or view my Github and reach out to me there.
				</p>
				<Socials>
					<SocialLink
						href="https://www.linkedin.com/in/jack-gable/"
						target="_blank"
						rel="noreferrer"
					>
						<VisuallyHidden>Visit my profile on LinkedIn</VisuallyHidden>
						<FontAwesomeIcon icon={faLinkedin} size="3x" />
					</SocialLink>
					<SocialLink
						href="https://github.com/jack-gable"
						target="_blank"
						rel="noreferrer"
					>
						<VisuallyHidden>Visit my profile on Github</VisuallyHidden>
						<FontAwesomeIcon icon={faGithub} size="3x" />
					</SocialLink>
				</Socials>
				<Container>
					<Form>
						<form ref={formRef} onSubmit={sendEmail}>
							<FormList>
								<ListItem>
									<input type="text" name="name" placeholder="Name" required />
								</ListItem>
								<ListItem>
									<input
										type="email"
										name="email"
										placeholder="Email"
										required
									/>
								</ListItem>
								<ListItem>
									<input
										placeholder="Subject"
										type="text"
										name="subject"
										required
									/>
								</ListItem>
								<ListItem>
									<textarea
										placeholder="Message"
										name="message"
										required
									></textarea>
								</ListItem>
								<ListItem>
									<Button type="submit">
										{status === "idle" && <p>SEND</p>}
										{status === "loading" && <p>SENDING...</p>}
										{status === "success" && <p>MESSAGE SENT!</p>}
									</Button>
								</ListItem>
							</FormList>
						</form>
					</Form>
					<div>{/* <DynamicMap /> */}</div>
				</Container>
			</Wrapper>
		</>
	);
}

// todo: add recaptcha to form after getting domain

const Wrapper = styled.section`
	padding: 10rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 64px;
	max-width: 1000px;
	margin-right: auto;
	margin-left: auto;
`;

const Title = styled.h2`
	font-size: 2.5rem;
	padding-bottom: 1.8rem;
	text-align: center;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 400px;
`;

const FormList = styled.ul`
	list-style-type: none;
`;

const ListItem = styled.li`
	padding-bottom: 16px;
	width: 100%;
	filter: drop-shadow(2px 4px 4px var(--color-gray-900));

	& > input,
	& > textarea {
		border: none;
		border-radius: 10px;
		background-color: var(--color-gray-900);
		color: black;
		width: 400px;
		line-height: 1.6;
		padding: 6px 8px;

		&::placeholder {
			color: var(--color-gray-300);
		}
	}

	& > textarea {
		resize: none;
		height: 150px;
	}

	&:last-of-type {
		filter: none;
	}
`;

const Socials = styled.div`
	width: 400px;
	display: flex;
	justify-content: space-evenly;
`;

const SocialLink = styled(Link)`
	&:link {
		color: var(--color-gray-800);
	}

	&:visited {
		color: var(--color-gray-600);
	}

	&:hover,
	&:focus {
		color: var(--color-secondary);
	}
`;

// const SubmitButton = styled.button`
// 	font-size: 1.25rem;
// 	border-radius: 2px;
// 	padding: 8px 16px;
// 	border: 2px solid currentColor;
// 	text-decoration: none;
// 	font-weight: 700;
// 	color: var(--color-primary);
// 	background-color: var(--color-background);

// 	&:focus {
// 		outline-color: var(--color-gray-600);
// 		outline-offset: 2px;
// 	}

// 	&:hover {
// 		background-color: var(--color-offWhite);
// 	}
// `;
