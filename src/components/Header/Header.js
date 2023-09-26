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

export default function Header() {
	return (
		<>
			<Wrapper>
				<Logo href="/">
					<VisuallyHidden>My initials as a logo - Home</VisuallyHidden>
					<div>JG</div>
				</Logo>
				<nav>
					<NavList>
						<li>
							<ListItem href="/">
								<FontAwesomeIcon icon={faHome} size="lg" />
								HOME
							</ListItem>
						</li>
						<li>
							<ListItem href="#about">
								<FontAwesomeIcon icon={faUser} size="lg" />
								ABOUT
							</ListItem>
						</li>
						<li>
							<ListItem href="#projects">
								<FontAwesomeIcon icon={faLaptopFile} size="lg" />
								PROJECTS
							</ListItem>
						</li>
						<li>
							<ListItem href="/contact">
								<FontAwesomeIcon icon={faEnvelope} size="lg" />
								CONTACT
							</ListItem>
						</li>
						<li>
							<ListItem href="/">
								<FontAwesomeIcon icon={faFilePdf} size="lg" />
								RESUME
							</ListItem>
						</li>
					</NavList>
				</nav>
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
	color: var(--color-gray-900);
	font-weight: 700;
`;

const NavList = styled.ul`
	display: flex;
	gap: 24px;
	list-style-type: none;
`;

const ListItem = styled(Link)`
	color: var(--color-gray-900);
	text-decoration: none;
	display: flex;
	align-items: baseline;
	gap: 8px;

	&:hover,
	&:focus {
		color: var(--color-primary);
	}
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
