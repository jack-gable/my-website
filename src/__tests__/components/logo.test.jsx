import React from "react";
import Logo from "@/components/Logo";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("<Logo />", () => {
	it("renders the <Logo /> component with text", () => {
		const { container, getByText } = render(<Logo />);

		expect(getByText("JG")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
