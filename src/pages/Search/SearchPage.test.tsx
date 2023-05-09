import { render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";
import TestingWrapper from "../../utils/testUtils";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Loading Search Page", () => {
  test("Rendering Search Component", async () => {
    render(<TestingWrapper component={<SearchPage />} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
