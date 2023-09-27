"use client";
import React from "react";
import Button from "../Button";
import styled from "styled-components";
import peep from "../../../public/assests/img/peep-46.svg";
import Image from "next/image";

export default function Cta() {
	return (
		<>
			<Wrapper>
				<div>
					<FlexWrapper>
						<div>
							<Text>Hi, my name&apos;s</Text>
							<Title>Jack Gable</Title>
							<h2>Web Developer | Front-End Engineer</h2>
						</div>
						<Peep src={peep} alt="" />
					</FlexWrapper>
					<ButtonWrapper>
						<Button size="large" href="/contact">
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
	margin: 32px 0;
	display: flex;
	justify-content: center;
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Peep = styled(Image)`
	height: 300px;
	width: 200px;
	filter: drop-shadow(2px 4px 8px var(--color-gray-400));
`;

const Text = styled.p`
	font-size: 1.25rem;
	font-weight: 600;
`;
