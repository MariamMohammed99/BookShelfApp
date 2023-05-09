import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import TestingWrapper from "../../../../../utils/testUtils";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Loading Login Form", () => {
  test("Renders Correctly", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  test("Email and Password are Valid", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByRole("button"));
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "mariam@gmail.com" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
  test("Email Is Invalid", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "x" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Please enter a valid Email")).toBeInTheDocument();
  });
  test("Email Is Invalid then Updated To Be Valid", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "x" },
    });
    fireEvent.click(screen.getByRole("button"));
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "mariam@gmail.com" },
    });
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  test("Password Is Invalid", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "hjbfg" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Please enter a valid Password"),
    ).toBeInTheDocument();
  });
  test("Password Is Invalid and Email is InValid", () => {
    render(<TestingWrapper component={<LoginForm />} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "hjbfg" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Please enter a valid Password"),
    ).toBeInTheDocument();
  });
});
