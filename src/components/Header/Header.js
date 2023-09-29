"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import VisuallyHidden from "../VisuallyHidden";
import Navigation from "../Navigation";

export default function Header() {
	return (
		<>
			<Wrapper>
				<Logo href="/">
					<VisuallyHidden>My initials as a logo - Home</VisuallyHidden>
					<div>JG</div>
				</Logo>
				<Navigation />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 32px 48px;
	background-image: linear-gradient(
		180deg,
		hsl(224deg 100% 56%) 0%,
		hsl(230deg 82% 56%) 20%,
		hsl(236deg 65% 56%) 34%,
		hsl(240deg 48% 53%) 45%,
		hsl(240deg 29% 41%) 53%,
		hsl(240deg 10% 29%) 59%,
		hsl(228deg 5% 21%) 65%,
		hsl(220deg 11% 16%) 71%,
		hsl(207deg 16% 11%) 77%,
		hsl(218deg 16% 10%) 84%,
		hsl(230deg 13% 9%) 92%,
		hsl(240deg 9% 9%) 100%
	);
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	opacity: 0.9;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	z-index: 99999;
	filter: brightness(115%);
`;

const Logo = styled(Link)`
	font-size: 2.5rem;
	text-decoration: none;
	color: var(--color-offWhite);
	font-weight: 700;
`;

const Waves = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	object-fit: cover;
	opacity: 0.7;
	z-index: -1;
`;
