import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { InputProps } from "./Input.types";

describe("Loading Input", () => {
  test("Testing Input With No Errors", () => {
    const inputProps: InputProps = {
      label: "name",
      onChange: () => {},
      hasError: false,
      name: "name",
      type: "text",
      value: "Mariam",
      placeHolder: "Your Name",
    };
    render(<Input input={inputProps} />);
    expect(
      screen.getByRole("textbox", { name: inputProps.name }),
    ).toBeInTheDocument();
  });
  test("Testing Input With Errors", () => {
    const inputErrorProps: InputProps = {
      label: "Job",
      onChange: () => {},
      hasError: true,
      name: "Job",
      type: "text",
      value: "SWD",
      placeHolder: "Your Job",
    };
    render(<Input input={inputErrorProps} />);
    expect(
      screen.getByRole("textbox", { name: inputErrorProps.name }),
    ).toBeInTheDocument();
  });
});
