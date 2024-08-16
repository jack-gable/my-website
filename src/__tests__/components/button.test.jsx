import React from "react";
import Button from "@/components/Button";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { FaArrowLeft } from "react-icons/fa6";

describe("<Button />", () => {
	it("renders the <Button /> component with text", () => {
		const { container, getByText } = render(
			<Button
				title="Click me"
				icon={<FaArrowLeft />}
				href="/"
				position="right"
			/>
		);

		expect(getByText("Click me")).toBeInTheDocument();
		expect(container.firstChild).toMatchSnapshot();
	});
});
