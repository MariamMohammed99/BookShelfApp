import { fireEvent, render, screen } from "@testing-library/react";
import SignUpForm from "./SignUpForm";
import TestingWrapper from "../../../../../utils/testUtils";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Loading Sign Up Form", () => {
  test("Renders Correctly", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
  test("All Inputs are Valid and Token is Set", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
    fireEvent.change(screen.getByLabelText("Re-Type Password"), {
      target: { value: "12345678" },
    });
    fireEvent.click(screen.getByRole("button"));
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "mariam@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "12345678" },
    });
    fireEvent.change(screen.getByRole("textbox", { name: "Name" }), {
      target: { value: "mariam.com" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/");
  });
  test("Email Is Invalid", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Email" }), {
      target: { value: "x" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Please enter a valid Email")).toBeInTheDocument();
  });
  test("Email Is Invalid then Updated To Be Valid", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
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
    render(<TestingWrapper component={<SignUpForm />} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "hjbfg" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Please enter a valid Password"),
    ).toBeInTheDocument();
  });
  test("Retyped-Password Is Invalid", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "hjbfgsdf" },
    });
    fireEvent.change(screen.getByLabelText("Re-Type Password"), {
      target: { value: "hjbf" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(
      screen.getByText("Please enter a valid Re-Type Password"),
    ).toBeInTheDocument();
  });

  test("Name Is Invalid", () => {
    render(<TestingWrapper component={<SignUpForm />} />);
    fireEvent.change(screen.getByRole("textbox", { name: "Name" }), {
      target: { value: "" },
    });
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText("Please enter a valid Name")).toBeInTheDocument();
  });
});
