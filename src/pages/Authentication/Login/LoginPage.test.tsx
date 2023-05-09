import { render, screen } from "@testing-library/react";
import LoginPage from "./LoginPage";
import TestingWrapper from "../../../utils/testUtils";

describe("Loading Login", () => {
  test("Testing Login Rendering", () => {
    render(<TestingWrapper component={<LoginPage />} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
