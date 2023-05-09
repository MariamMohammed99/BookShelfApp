import { Book } from "../../../../types/Book.types";

export interface SearchResultsProps {
  searchTerm: string;
  booksInMain: Book[];
}
