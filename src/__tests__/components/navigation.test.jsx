import React from "react";
import Navigation from "@/components/Navigation";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("<Navigation />", () => {
	it("renders the <Navigation /> component with text", () => {
		const { container, getByText } = render(<Navigation />);

		expect(getByText("ABOUT")).toBeInTheDocument();
		expect(getByText("PROJECTS")).toBeInTheDocument();
		expect(getByText("CONTACT")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
