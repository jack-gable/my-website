import React from "react";
import Link from "next/link";
import styled from "styled-components";

const SIZES = {
	small: {
		"--borderRadius": 2 + "px",
		"--fontSize": 16 / 16 + "rem",
		"--padding": "6px 12px",
	},
	medium: {
		"--borderRadius": 2 + "px",
		"--fontSize": 18 / 16 + "rem",
		"--padding": "14px 20px",
	},
	large: {
		"--borderRadius": 4 + "px",
		"--fontSize": 21 / 16 + "rem",
		"--padding": "18px 32px",
	},
};

export default function Button({
	href,
	children,
	variant = "fill",
	size = "medium",
	...delegated
}) {
	const styles = SIZES[size];

	let Component;
	if (variant === "fill") {
		Component = FillButton;
	} else if (variant === "outline") {
		Component = OutlineButton;
	} else if (variant === "ghost") {
		Component = GhostButton;
	} else {
		throw new Error(`Unrecognized Button variant: ${variant}`);
	}

	return (
		<Component
			href={href}
			as={href ? Link : "button"}
			style={styles}
			{...delegated}
		>
			{children}
		</Component>
	);
}

const ButtonBase = styled.button`
	font-size: var(--fontSize);
	border-radius: var(--borderRadius);
	padding: var(--padding);
	border: 2px solid transparent;
	text-decoration: none;
	font-weight: 700;

	&:focus {
		outline-color: var(--color-primary);
		outline-offset: 4px;
	}
`;

const FillButton = styled(ButtonBase)`
	background-color: var(--color-primary);
	color: var(--color-gray-900);

	&:hover {
		background-color: var(--color-secondary);
		color: var(--color-offWhite);
	}
`;

const OutlineButton = styled(ButtonBase)`
	background-color: var(--color-background);
	color: var(--color-primary);
	border: 2px solid currentColor;

	&:hover {
		background-color: var(--color-offWhite);
	}
`;

const GhostButton = styled(ButtonBase)`
	color: var(--color-gray-600);
	background-color: transparent;

	&:focus {
		outline-color: var(--color-gray-600);
	}

	&:hover {
		background-color: var(--color-gray-800);
		color: var(--color-gray-50);
	}
`;
