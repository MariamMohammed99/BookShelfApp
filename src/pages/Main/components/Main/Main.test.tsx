import { fireEvent, render, screen } from "@testing-library/react";
import Main from "./Main";
import TestingWrapper from "../../../../utils/testUtils";
import { Book } from "../../../../types/Book.types";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Loading Main Component", () => {
  const booksList: Book[] = [
    {
      id: "nggnmAEACAAJ",
      title: "The Linux Command Line",
      authors: ["William E. Shotts, Jr."],
      imageLinks: {
        thumbnail: "url",
      },
      shelf: "currentlyReading",
      description: "Description example",
      publishedDate: "date",
    },
  ];

  test("Loading", () => {
    render(<TestingWrapper component={<Main booksList={booksList} />} />);
    expect(screen.getByText("MyReads")).toBeInTheDocument();
  });
  test("Logout", () => {
    render(<TestingWrapper component={<Main booksList={booksList} />} />);
    fireEvent.click(screen.getByRole("button", { name: "Logout" }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith("login");
  });
  test("Navigate To Search", () => {
    render(<TestingWrapper component={<Main booksList={booksList} />} />);
    fireEvent.click(screen.getByRole("button", { name: "Add a book" }));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`search`);
  });
});
