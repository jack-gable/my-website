import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Button({ href, children, ...delegated }) {
	return (
		<Link href={href} {...delegated}>
			{children}
		</Link>
	);
}
