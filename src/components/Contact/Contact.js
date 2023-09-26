"use client";
import React from "react";
import styled from "styled-components";
import Button from "../Button";

export default function Contact() {
	return (
		<>
			<Wrapper>
				<Title>Contact Me</Title>
				<Desc>
					Please feel free to reach to me if want to know more about me or about
					the work I&apos;m currently doing.
				</Desc>
				<Button href="/contact" variant="outline">
					CONTACT ME!
				</Button>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.section`
	padding: 6rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1000px;
	margin-right: auto;
	margin-left: auto;
`;

const Title = styled.h2`
	font-size: 2.5rem;
	padding-bottom: 2.5rem;
	text-align: center;
`;

const Desc = styled.p`
	width: 70%;
	text-align: center;
	padding-bottom: 48px;
`;
