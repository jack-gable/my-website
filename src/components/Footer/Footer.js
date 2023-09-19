"use client";
import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<Wrapper>
			<p>&copy; 2023 - Jack Gable</p>
		</Wrapper>
	);
}

const Wrapper = styled.footer`
	text-transform: uppercase;
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;
	display: flex;
	justify-content: center;
	padding: 16px 0;
`;
