import React from "react";
import Link from "next/link";
import { animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useBoop from "@/app/hooks/use-boop";

function NavLink({
	icon,
	className,
	aria_label,
	href,
	children,
	...delegated
}) {
	const [style, trigger] = useBoop({ rotation: 20 });

	return (
		<Link
			className={className}
			href={href}
			aria-label={aria_label}
			onMouseEnter={trigger}
			{...delegated}
		>
			<animated.div style={style}>
				<FontAwesomeIcon icon={icon} size="lg" />
			</animated.div>
			{children}
		</Link>
	);
}

export default NavLink;
