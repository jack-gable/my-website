import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<PageHeader />
			{children}
			<Footer />
		</>
	);
}
