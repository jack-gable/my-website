import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Work_Sans } from "next/font/google";
import {
	PORTFOLIO_TITLE,
	LIGHT_TOKENS,
	DARK_TOKENS,
	COLOR_THEME_COOKIE_NAME,
} from "@/constants";
import { cookies } from "next/headers";

import "./styles.css";

const work_sans = Work_Sans({
	subsets: ["latin"],
	display: "fallback",
	weight: "variable",
	variable: "--font-family",
});

export const metadata = {
	title: PORTFOLIO_TITLE,
	description: "Jack Gable's portfolio website",
};

function RootLayout({ children }) {
	const savedTheme = cookies().get(COLOR_THEME_COOKIE_NAME);
	const theme = savedTheme?.value || "dark";

	return (
		<html
			lang="en"
			className={work_sans.variable}
			data-color-theme={theme}
			style={theme === "dark" ? DARK_TOKENS : LIGHT_TOKENS}
		>
			<body>
				<Header initialTheme={theme} />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}

export default RootLayout;
