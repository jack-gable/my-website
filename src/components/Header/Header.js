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
import { Sun, Moon } from "react-feather";

import styles from "./Header.module.css";

function Header({ initialTheme, ...delegated }) {
	const [theme, setTheme] = React.useState(initialTheme);

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
			<Navigation />
			<button className={styles.themeBtn} onClick={handleToggleTheme}>
				{theme === "light" ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
				<VisuallyHidden>Toggle dark / light theme</VisuallyHidden>
			</button>
		</header>
	);
}

export default Header;
