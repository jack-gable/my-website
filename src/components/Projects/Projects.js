"use client";
import React from "react";
import Button from "../Button";
import notesApp1 from "../../../public/assests/img/notes-app-1.png";
import movieSearch1 from "../../../public/assests/img/movie-search-1.png";
import weatherApp1 from "../../../public/assests/img/weather-app-1.png";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<HeadingWrapper>
				<Title>My Projects</Title>
				<Desc>
					Below are some projects that I&apos;ve built. Check them out on Github
					or click the links to view the live versions.
				</Desc>
				<ButtonWrapper>
					<Button
						href="https://github.com/jack-gable"
						variant="fill"
						size="medium"
						target="_blank"
					>
						View my Github
					</Button>
				</ButtonWrapper>
			</HeadingWrapper>
			<ProjectsContainer>
				<Project>
					<ProjectImage
						src={notesApp1}
						alt="A notes app clone of Google Keep."
						loading="lazy"
					/>
					<Container>
						<div>
							<ProjectTitle>Google Keep Clone</ProjectTitle>
							<p>
								A small version of the Google Keep notes app. It&apos;s a simple
								and minimalistic approach to the very popular note taking app.
							</p>
						</div>
						<ProjectButton
							href="https://reliable-malasada-b76007.netlify.app"
							target="_blank"
						>
							VIEW PROJECT <FontAwesomeIcon icon={faGreaterThan} />
						</ProjectButton>
					</Container>
				</Project>
				<Project>
					<Container>
						<div>
							<ProjectTitle>Movie Search App</ProjectTitle>
							<p>
								A web application for users to browse their favorite movies
								based on movie title search.
							</p>
						</div>
						<ProjectButton
							href="https://lively-seahorse-d423ea.netlify.app/"
							target="_blank"
						>
							VIEW PROJECT <FontAwesomeIcon icon={faGreaterThan} />
						</ProjectButton>
					</Container>
					<ProjectImage
						src={movieSearch1}
						alt="A movie search app"
						loading="lazy"
					/>
				</Project>
				<Project>
					<ProjectImage src={weatherApp1} alt="A weather app" loading="lazy" />
					<Container>
						<div>
							<ProjectTitle>MyWeather App</ProjectTitle>
							<p>
								Developed a web application that shows the user the weather
								based on a user location input.
							</p>
						</div>
						<ProjectButton
							href="https://tourmaline-sherbet-89e3c3.netlify.app/"
							target="_blank"
						>
							VIEW PROJECT <FontAwesomeIcon icon={faGreaterThan} />
						</ProjectButton>
					</Container>
				</Project>
			</ProjectsContainer>
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

const HeadingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.h2`
	font-size: 2.5rem;
	padding-bottom: 2.5rem;
	text-align: center;
`;

const Desc = styled.p`
	width: 70%;
	text-align: center;
`;

const ButtonWrapper = styled.div`
	margin: 48px 0;
	display: flex;
	justify-content: center;
`;

const ProjectsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 1fr);
	gap: 2.5rem;
	align-items: center;
	justify-items: center;
`;

const Project = styled.article`
	display: flex;
	justify-content: center;
	gap: 0 4rem;
	padding: 32px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ProjectImage = styled(Image)`
	border-radius: 10px;
	box-shadow: 4px 6px 10px var(--color-gray-400);
	background-color: var(--color-gray-400);
	width: 300px;
	height: 200px;
	aspect-ratio: 3 / 2;
`;

const ProjectTitle = styled.h3`
	font-size: 1.5rem;
	padding: 16px 0;
	color: var(--color-gray-800);
`;

const ProjectButton = styled(Link)`
	color: inherit;
	font-weight: 600;
	text-decoration: none;
	width: fit-content;

	&:hover,
	&:focus {
		text-decoration: underline;
		text-underline-offset: 4px;
	}
`;
