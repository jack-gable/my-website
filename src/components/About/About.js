"use client";
import React from "react";
import Button from "../Button";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faReact,
	faHtml5,
	faCss3,
	faJsSquare,
	faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

export default function About() {
	return (
		<Wrapper id="about">
			<div>
				<Title>About Me</Title>
				<p>
					I&apos;m a frontend developer based out of the San Francisco Bay Area.
					I love building apps that are accessible and user-friendly.
				</p>
			</div>

			<IconWrapper>
				<Icon style={{ border: "2px solid #5ed4f4" }}>
					<FontAwesomeIcon icon={faReact} color="#5ed4f4" size="lg" />
					React
				</Icon>
				<Icon style={{ border: "2px solid #f06529" }}>
					<FontAwesomeIcon icon={faHtml5} color="#f06529" size="lg" />
					HTML5
				</Icon>
				<Icon style={{ border: "2px solid #28a4d9" }}>
					<FontAwesomeIcon icon={faCss3} color="#28a4d9" size="lg" />
					CSS3
				</Icon>
				<Icon style={{ border: "2px solid #efd81d" }}>
					<FontAwesomeIcon icon={faJsSquare} color="#efd81d" size="lg" />
					JavaScript
				</Icon>
				<Icon style={{ border: "2px solid #ec4d28" }}>
					<FontAwesomeIcon icon={faGitAlt} color="#ec4d28" size="lg" />
					Git
				</Icon>
				<Icon style={{ border: "2px solid #06b6d4" }}>
					<TailwindIcon>
						<svg
							role="img"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill="#06b6d4"
								d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
							/>
						</svg>
					</TailwindIcon>
					Tailwind-CSS
				</Icon>
				<Icon style={{ border: "2px solid #f0abee" }}>
					💅 Styled-Components
				</Icon>
			</IconWrapper>
			<div>
				<BackgroundTitle>Get to know Me!</BackgroundTitle>
				<p>
					My background is in biology and computer science. I have a BSc in
					Biology and a minor in Computer Science from Sonoma State University.
					When I&apos;m not working on side projects or learning new
					technologies, I like to play basketball with my friends or workout.
				</p>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	padding: 8rem 0;
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
	padding-bottom: 2.5rem;
	text-align: center;
`;

const BackgroundTitle = styled.h2`
	font-size: 1.8rem;
	padding-bottom: 16px;
	text-align: center;
`;

const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	flex-wrap: wrap;
`;

const Icon = styled.div`
	width: fit-content;
	font-size: 1.2rem;
	font-weight: 600;
	color: var(--color-gray-1000);
	border-radius: 10px;
	background: transparent;
	border: 2px solid var(--color-background);
	padding: 4px 8px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	gap: 8px;
`;

const TailwindIcon = styled.div`
	width: 25px;
`;
