import ContactHeader from "@/components/ContactHeader";
import Footer from "@/components/Footer";
import React from "react";

export default function Layout({ children }) {
	return (
		<>
			<ContactHeader />
			{children}
			<Footer />
		</>
	);
}
