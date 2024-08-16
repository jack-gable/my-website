import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";
import "intersection-observer";

describe("Home Page", () => {
	it("renders some text", () => {
		const { container, getByText } = render(<Page />);

		expect(
			getByText(
				"I'm a developer and tech enthusiast based in California."
			)
		).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
