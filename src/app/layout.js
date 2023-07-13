import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Source_Code_Pro } from "next/font/google";

const source_code_pro = Source_Code_Pro({ subsets: ["latin"] });

export const metadata = {
	title: "Jack Gable",
	description: "Jack Gable's portfolio website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={source_code_pro.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
