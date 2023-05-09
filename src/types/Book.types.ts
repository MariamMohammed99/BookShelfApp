export interface Book {
  id: string;
  title: string;
  authors: string[];
  imageLinks: {
    thumbnail: string;
  };
  shelf?: string;
  description: string;
  publishedDate: string;
}

interface Response {
  books: Book[];
}
export type BooksResponse = Response;
export type BookResponse = {
  book: Book;
};

export interface SearchQuery {
  query: string;
}
