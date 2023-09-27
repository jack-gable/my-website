"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEnvelope,
	faFilePdf,
	faFileWord,
	faHome,
	faLaptopFile,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const LINKS = [
	{
		slug: "home",
		label: "HOME",
		href: "/",
		icon: faHome,
		target: "",
	},
	{
		slug: "about",
		label: "ABOUT",
		href: "#about",
		icon: faUser,
		target: "",
	},
	{
		slug: "projects",
		label: "PROJECTS",
		href: "#projects",
		icon: faLaptopFile,
		target: "",
	},
	{
		slug: "contact",
		label: "CONTACT",
		href: "/contact",
		icon: faEnvelope,
		target: "",
	},
	{
		slug: "resume",
		label: "RESUME",
		href: "/",
		icon: faFilePdf,
		target: "_blank",
	},
];

export default function Navigation() {
	const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

	const id = React.useId();

	return (
		<nav onMouseLeave={() => setHoveredNavItem(null)}>
			<NavList>
				{LINKS.map(({ slug, label, href, icon, target }) => (
					<ListItem
						key={slug}
						style={{
							zIndex: hoveredNavItem === slug ? 1 : 2,
						}}
					>
						{hoveredNavItem === slug && (
							<Hovered
								layoutId={id}
								initial={{
									borderRadius: 8,
								}}
							/>
						)}

						<NavLink
							href={href}
							target={target}
							onMouseEnter={() => setHoveredNavItem(slug)}
						>
							<FontAwesomeIcon icon={icon} size="lg" />
							<div>{label}</div>
						</NavLink>
					</ListItem>
				))}
			</NavList>
		</nav>
	);
}

const NavList = styled.ul`
	display: flex;
	gap: 16px;
	padding: 0;
	list-style-type: none;
`;

const ListItem = styled.li`
	position: relative;
`;

const NavLink = styled(Link)`
	display: flex;
	align-items: baseline;
	gap: 8px;
	position: relative;
	padding: 8px;
	text-decoration: none;
	color: var(--color-offWhite);
	opacity: 0.7;
	transition: opacity 500ms;

	&:hover,
	&:focus {
		opacity: 1;
		filter: brightness(110%);
		color: var(--color-white);
	}
`;

const Hovered = styled(motion.div)`
	position: absolute;
	inset: 0;
	background: var(--color-gray-600);
`;
