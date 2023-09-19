"use client";
import React from "react";
import Button from "../Button";
import styled from "styled-components";

export default function Cta() {
	return (
		<Wrapper>
			<p>Hi, my name&apos;s</p>
			<Title>Jack Gable</Title>
			<h2>Web Developer | Front-End Engineer | React specialist</h2>
			<ButtonWrapper>
				<Button href="#contact">CONTACT ME</Button>
			</ButtonWrapper>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	height: 100%;
	text-align: center;
	padding: 2rem 1rem;
`;

const Title = styled.h1`
	font-size: 3.5rem;
`;

const ButtonWrapper = styled.div`
	padding: 16px 0;
`;
