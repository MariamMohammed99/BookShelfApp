import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./Search";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Testing Search", () => {
  test("Search", () => {
    render(<Search setDebounced={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveValue("");
  });
  test("Button Clicked in Search", () => {
    render(<Search setDebounced={() => {}} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
  test("on Change in Search", () => {
    render(<Search setDebounced={() => {}} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "x" } });
    expect(screen.getByRole("textbox")).toHaveValue("x");
  });
  test("testing debounce", () => {
    render(<Search setDebounced={() => {}} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "x" } });
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "xy" } });
    expect(screen.getByRole("textbox")).toHaveValue("xy");
  });
});
