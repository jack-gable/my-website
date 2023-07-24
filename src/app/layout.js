import Footer from "@/components/Footer";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
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
				<div className="wrapper">
					<Sidebar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
