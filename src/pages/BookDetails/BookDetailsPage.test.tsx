import { render, screen } from "@testing-library/react";
import BookDetailsPage from "./BookDetailsPage";
import TestingWrapper from "../../utils/testUtils";

describe("Loading Book Details Page", () => {
  test("Token Found and Loading", () => {
    render(<TestingWrapper component={<BookDetailsPage />} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
