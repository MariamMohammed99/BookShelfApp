import { render, screen } from "@testing-library/react";
import SignUpPage from "./SignUpPage";
import TestingWrapper from "../../../utils/testUtils";

describe("Loading Sign Up", () => {
  test("Testing Sign Up Rendering", () => {
    render(<TestingWrapper component={<SignUpPage />} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
