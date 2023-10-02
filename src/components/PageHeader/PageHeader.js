"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faHome } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const LINKS = [
	{
		slug: "home",
		label: "HOME",
		href: "/",
		icon: faHome,
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

export default function PageHeader() {
	const [hoveredNavItem, setHoveredNavItem] = React.useState(null);

	const id = React.useId();

	return (
		<Wrapper>
			<Logo href="/">
				<div>JG</div>
			</Logo>
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
		</Wrapper>
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
	color: var(--color-gray-900);
	font-weight: 700;
`;

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
