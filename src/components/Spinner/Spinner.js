"use client";
import React from "react";
import { Loader } from "react-feather";
import styled, { keyframes } from "styled-components";

export default function Spinner() {
	return (
		<LoadingSpinner>
			<Loader />
		</LoadingSpinner>
	);
}

const spin = keyframes`
    from {
        transform: rotate(0turn);
    }
    to {
        transform: rotate(1turn);
    }
`;

const LoadingSpinner = styled.div`
	display: block;
	height: 32px;
	width: 32px;
	animation: ${spin} 1000ms ease infinite;
	transform-origin: 12px 12px;
`;
