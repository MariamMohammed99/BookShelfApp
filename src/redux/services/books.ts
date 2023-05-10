import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BooksResponse,
  Book,
  BookResponse,
  SearchQuery,
} from "../../types/Book.types";

const baseUrl = "https://reactnd-books-api.udacity.com/";

const handleToken = (): { Accept: string; Authorization: string } => {
  const token = localStorage.getItem("token");
  return { Accept: "application/json", Authorization: token || "" };
};

export const booksApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ["Book"],
  endpoints: (build) => ({
    getBooks: build.query<BooksResponse, void>({
      query: () => ({
        url: "books",
        method: "GET",
        headers: handleToken(),
      }),
      providesTags: ["Book"],
    }),
    search: build.query<BooksResponse, SearchQuery>({
      query: (body) => ({
        url: `search`,
        method: "POST",
        body,
        headers: {
          ...handleToken(),
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Book"],
    }),
    getBook: build.query<BookResponse, string>({
      query: (id) => ({
        url: `books/${id}`,
        headers: handleToken(),
      }),
      providesTags: ["Book"],
    }),
    editBook: build.mutation<void, Pick<Book, "id"> & Partial<Book>>({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: patch,
        headers: {
          ...handleToken(),
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Book"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetBooksQuery,
  useSearchQuery,
  useEditBookMutation,
} = booksApi;
