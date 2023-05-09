import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { ButtonInput } from "./Button.types";

describe("Loading Button", () => {
  test("Testing Button Type Button", () => {
    const buttonProps: ButtonInput = {
      actionName: "Add",
      onClick: () => {},
      isSubmit: false,
    };
    render(<Button input={buttonProps} />);
    expect(
      screen.getByRole("button", { name: buttonProps.actionName }),
    ).toBeInTheDocument();
  });
  test("Testing Button Type Submit", () => {
    const submitProps: ButtonInput = {
      actionName: "Add",
      onClick: () => {},
      isSubmit: true,
    };
    render(<Button input={submitProps} />);
    expect(
      screen.getByRole("button", { name: submitProps.actionName }),
    ).toBeInTheDocument();
  });
});
