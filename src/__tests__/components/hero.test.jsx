import React from "react";
import Hero from "@/components/Hero";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import "intersection-observer";

describe("<Hero />", () => {
	it("renders the <Hero /> component with text", () => {
		const { container, getByText, getByTestId } = render(<Hero />);

		expect(
			getByText(
				"I'm a developer and tech enthusiast based in California."
			)
		).toBeInTheDocument();
		expect(getByText("view my projects")).toBeInTheDocument();
		expect(getByText("Contact Me")).toBeInTheDocument();
		expect(getByTestId("hero-peep")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
