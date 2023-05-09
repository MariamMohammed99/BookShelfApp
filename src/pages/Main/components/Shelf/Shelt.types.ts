import { Book } from "../../../../types/Book.types";

export interface BooksShelf {
  booksList: Book[];
  title: string;
  id: string;
}
