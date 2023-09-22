"use client";
import React from "react";
import * as Separator from "@radix-ui/react-separator";
import styled from "styled-components";

export default function Divider() {
	return (
		<div>
			<DividerLine className="SeparatorRoot" decorative={true} />
		</div>
	);
}

const DividerLine = styled(Separator.Root)`
	margin: 1rem auto;
	background-color: var(--color-gray-600);
	width: 60%;
	min-width: 100px;
	height: 4px;
	border-radius: 99999px;
`;
