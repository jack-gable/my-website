import React from "react";
import Footer from "@/components/Footer";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

Object.defineProperty(window, "matchMedia", {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});

describe("<Footer />", () => {
	it("renders the <Footer /> component with text", () => {
		const { container, getByText } = render(<Footer />);

		expect(getByText("© 2024 Jack Gable")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
