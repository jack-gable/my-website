"use client";

import React from "react";
import Link from "next/link";
import { animated } from "@react-spring/web";
import useBoop from "@/hooks/use-boop";
import VisuallyHidden from "../VisuallyHidden";

function SocialLink({ icon, text, className, href, ...delegated }) {
	const [style, trigger] = useBoop({ rotation: 20 });

	return (
		<Link
			className={className}
			href={href}
			onMouseEnter={trigger}
			{...delegated}
		>
			<animated.div style={style}>{icon}</animated.div>
			<VisuallyHidden>{text}</VisuallyHidden>
		</Link>
	);
}

export default SocialLink;
