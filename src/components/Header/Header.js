"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFilePdf,
	faHome,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import waves from "../../../public/assests/img/layered-waves-haikei-1.svg";
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
				<Waves src={waves} alt="" />
			</Wrapper>
		</>
	);
}

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	padding: 32px 48px;
	/* position: sticky;
	top: -16px;
	background: transparent;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px); */
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
