import GlobalStyles from "./Global";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
	display: "swap",
});

export const metadata = {
	title: "Jack Gable",
	description: "Jack Gable's portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={source_code_pro.className}>{children}</body>
			<GlobalStyles />
		</html>
	);
}
