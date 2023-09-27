import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Button({ href, children, ...delegated }) {
	return (
		<Pushable href={href} as={href ? Link : "button"} {...delegated}>
			<Front>{children}</Front>
		</Pushable>
	);
}

const Front = styled.span`
	display: block;
	padding: 12px 42px;
	border-radius: 12px;
	font-size: 1.25rem;
	background: var(--color-secondary);
	color: white;
	transform: translateY(-4px);
	transition: transform 500ms;
`;

const Pushable = styled(Link)`
	background: var(--color-primary);
	border: none;
	border-radius: 12px;
	padding: 0;
	cursor: pointer;
	text-decoration: none;
	font-weight: 600;

	&:hover ${Front} {
		transform: translateY(-6px);
		transition: transform 250ms;
	}

	&:active ${Front} {
		transform: translateY(-2px);
		transition: transform 50ms;
	}
`;
