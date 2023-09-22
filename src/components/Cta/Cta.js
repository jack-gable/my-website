"use client";
import React from "react";
import Button from "../Button";
import styled from "styled-components";

export default function Cta() {
	return (
		<>
			<Wrapper>
				<div>
					<p>Hi, my name&apos;s</p>
					<Title>Jack Gable</Title>
					<h2>Web Developer | Front-End Engineer</h2>
					<ButtonWrapper>
						<Button variant="fill" size="large" href="/contact">
							CONTACT ME
						</Button>
					</ButtonWrapper>
				</div>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.section`
	padding: 12rem 0;
	display: grid;
	place-content: center;
`;

const Title = styled.h1`
	font-size: 3.5rem;
`;

const ButtonWrapper = styled.div`
	margin: 48px 0;
	display: flex;
	justify-content: center;
`;
