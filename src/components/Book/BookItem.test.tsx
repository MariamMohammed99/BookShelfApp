import { fireEvent, render, screen } from "@testing-library/react";
import BookItem from "./BookItem";
import { Book } from "../../types/Book.types";
import TestingWrapper from "../../utils/testUtils";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Loading Book Item", () => {
  const data: Book = {
    id: "nggnmAEACAAJ",
    title: "The Linux Command Line",
    authors: [],
    imageLinks: {
      thumbnail: "url",
    },
    shelf: "currentlyReading",
    description: "Description example",
    publishedDate: "date",
  };
  test("Button Clicked in BookItem", () => {
    render(<TestingWrapper component={<BookItem book={data} />} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockedUsedNavigate).toHaveBeenCalledWith(`/${data.id}`);
  });

  test("Authors Names Empty", () => {
    <TestingWrapper component={<BookItem book={data} />} />;
    data.authors.map((author) =>
      expect(screen.getByText(author)).toBeInTheDocument(),
    );
  });
  test("Title Appears on the screen", () => {
    const dataWithEmptyImageUrl: Book = {
      id: "nggnmAEACAAJ",
      title: "The Linux Command Line",
      authors: ["William E. Shotts, Jr."],
      imageLinks: {
        thumbnail: "",
      },
      shelf: "currentlyReading",
      description: "Description example",
      publishedDate: "date",
    };
    render(
      <TestingWrapper component={<BookItem book={dataWithEmptyImageUrl} />} />,
    );
    expect(screen.getByText(dataWithEmptyImageUrl.title)).toBeInTheDocument();
  });
});
