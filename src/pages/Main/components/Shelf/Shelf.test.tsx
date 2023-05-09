import { render, screen } from "@testing-library/react";
import { DragDropContext } from "react-beautiful-dnd";
import Shelf from "./Shelf";
import { BooksShelf } from "./Shelt.types";
import TestingWrapper from "../../../../utils/testUtils";

describe("Loading Shelf", () => {
  const shelf: BooksShelf = {
    booksList: [
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
    ],
    title: "Currently Reading",
    id: "currentlyReading",
  };
  test("Shelf Rendering", () => {
    render(
      <TestingWrapper
        component={
          <DragDropContext onDragEnd={jest.fn}>
            <Shelf booksShelf={shelf} />
          </DragDropContext>
        }
      />,
    );
    expect(screen.getByText(shelf.booksList[0].title)).toBeInTheDocument();
  });
});
