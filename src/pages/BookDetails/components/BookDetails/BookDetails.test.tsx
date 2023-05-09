import { render, screen } from "@testing-library/react";
import BookDetails from "./BookDetails";
import { Book } from "../../../../types/Book.types";

describe("Loading Book Details", () => {
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
    render(<BookDetails book={dataWithEmptyImageUrl} />);
    expect(screen.getByText(dataWithEmptyImageUrl.title)).toBeInTheDocument();
  });

  test("Authors Names Appear on the screen", () => {
    const data: Book = {
      id: "nggnmAEACAAJ",
      title: "The Linux Command Line",
      authors: ["William E. Shotts, Jr."],
      imageLinks: {
        thumbnail: "url",
      },
      shelf: "currentlyReading",
      description: "Description example",
      publishedDate: "date",
    };
    render(<BookDetails book={data} />);
    data.authors.map((author) =>
      expect(screen.getByText(author)).toBeInTheDocument(),
    );
  });
});
