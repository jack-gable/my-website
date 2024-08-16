import React from "react";
import MobileMenu from "@/components/MobileMenu";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

describe("<MobileMenu />", () => {
	it("renders the <MobileMenu /> component with text", () => {
		const { container, getByText } = render(<MobileMenu />);

		fireEvent.click(getByText("Open menu"));
		expect(getByText("ABOUT")).toBeInTheDocument();
		expect(getByText("PROJECTS")).toBeInTheDocument();
		expect(getByText("CONTACT")).toBeInTheDocument();
		expect(getByText("LINKEDIN")).toBeInTheDocument();
		expect(getByText("GITHUB")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
