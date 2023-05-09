import { render, screen } from "@testing-library/react";
import MainPage from "./MainPage";
import TestingWrapper from "../../utils/testUtils";

describe("Loading Book Details Page", () => {
  test("Loading", () => {
    render(<TestingWrapper component={<MainPage />} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
