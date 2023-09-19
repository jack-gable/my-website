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
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
	return (
		<div>
			<div>
				<h1>About Me</h1>
				<p>
					I&apos;m a frontend developer based out of the San Francisco Bay Area.
					I love building apps that are accessible and user-friendly. My
					specialities include JavaScript, React JS, Styled Components and
					Tailwind CSS.
				</p>

				<div>
					<h2>Get to know Me!</h2>
					<p>
						My background is in biology and computer science. I have a BSc in
						Biology and a minor in CS from Sonoma State University. When
						I&apos;m not coding, I like to play basketball with my friends or
						I&apos;m weight-lifting.
					</p>
					<Button href="/contact">Contact Me</Button>
				</div>
			</div>
			{/* <StageCubeCont>
				<CubeSpinner>
					<Face1>
						<FontAwesomeIcon icon={faReact} color="#5ed4f4" size="xl" />
					</Face1>
					<Face2>
						<FontAwesomeIcon icon={faHtml5} color="#f06529" />
					</Face2>
					<Face3>
						<FontAwesomeIcon icon={faCss3} color="#28a4d9" />
					</Face3>
					<Face4>
						<FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
					</Face4>
					<Face5>
						<FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
					</Face5>
					<Face6>
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
					</Face6>
				</CubeSpinner>
			</StageCubeCont> */}
		</div>
	);
}

const StageCubeCont = styled.div`
	width: 50%;
	height: 100%;
`;

const SpinCube = keyframes`
	from,
	to {
		transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
	}
	16% {
		transform: rotateY(-90deg);
	}
	33% {
		transform: rotateY(-90deg) rotateZ(90deg);
	}
	50% {
		transform: rotateY(-180deg) rotateZ(90deg);
	}
	66% {
		transform: rotateY(-270deg) rotateZ(90deg);
	}
	83% {
		transform: rotateY(90deg) rotateZ(90deg);
	}
`;

const CubeSpinner = styled.div`
	animation-name: ${SpinCube};
	animation-timing-function: ease-in-out;
	animation-iteration-count: infinite;
	animation-duration: 12s;
	transform-style: preserve-3d;
	transform-origin: 100px 100px 0;
	margin-left: calc(50% - 100px);
`;

const Face1 = styled.div`
	transform: translateZ(100px);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
	background-color: white;
`;

const Face2 = styled.div`
	transform: rotateY(90deg) translateZ(100px);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
`;

const Face3 = styled.div`
	transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
`;

const Face4 = styled.div`
	transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
`;

const Face5 = styled.div`
	transform: rotateY(-90deg) translateZ(100px);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
`;

const Face6 = styled.div`
	transform: rotateX(-90deg) translateZ(100px) rotateZ(-90deg);
	position: absolute;
	width: 200px;
	height: 200px;
	border: 1px solid #ccc;
	text-align: center;
	font-size: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0 20px 0px lightyellow;
	padding: 25px;
`;
