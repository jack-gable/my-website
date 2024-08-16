"use client";
import React from "react";
import Navigation from "../Navigation";
import VisuallyHidden from "../VisuallyHidden";
import {
	COLOR_THEME_COOKIE_NAME,
	DARK_TOKENS,
	LIGHT_TOKENS,
} from "@/constants";
import Cookie from "js-cookie";
import Logo from "../Logo";
import { FiMoon as Moon, FiSun as Sun } from "react-icons/fi";
import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu";
import Boop from "../Boop";

function Header({ initialTheme, ...delegated }) {
	const [theme, setTheme] = React.useState(initialTheme);
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);

	function handleToggleTheme() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);

		Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, {
			expires: 1000,
		});

		const newTokens = newTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
		const root = document.documentElement;

		root.setAttribute("data-color-theme", newTheme);
		Object.entries(newTokens).forEach(([key, value]) => {
			root.style.setProperty(key, value);
		});
	}

	return (
		<header className={styles.wrapper} {...delegated}>
			<Logo />
			<div className={styles.container}>
				<div className={styles.desktopNav}>
					<Navigation />
				</div>
				<div className={styles.actions}>
					<button
						className={styles.themeBtn}
						onClick={handleToggleTheme}
					>
						{theme === "light" ? (
							<Boop rotation={20}>
								<Sun size="1.5rem" />
							</Boop>
						) : (
							<Boop rotation={20}>
								<Moon size="1.5rem" />
							</Boop>
						)}
						<VisuallyHidden>
							Toggle dark / light theme
						</VisuallyHidden>
					</button>
					<MobileMenu
						isOpen={showMobileMenu}
						setOpen={setShowMobileMenu}
						onDismiss={() => setShowMobileMenu(false)}
					/>
				</div>
			</div>
		</header>
	);
}

export default Header;
