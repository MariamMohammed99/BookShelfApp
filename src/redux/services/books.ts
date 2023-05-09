import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BooksResponse,
  Book,
  BookResponse,
  SearchQuery,
} from "../../types/Book.types";

const baseUrl = "https://reactnd-books-api.udacity.com/";

// let token = localStorage.token;
// // if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);
const token = localStorage.getItem("token");

const headers = {
  Accept: "application/json",
  Authorization: token || "",
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
        headers,
      }),
      providesTags: ["Book"],
    }),
    search: build.query<BooksResponse, SearchQuery>({
      query: (body) => ({
        url: `search`,
        method: "POST",
        body,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }),
      providesTags: ["Book"],
    }),
    getBook: build.query<BookResponse, string>({
      query: (id) => ({
        url: `books/${id}`,
        headers,
      }),
      providesTags: ["Book"], // (result, error, id) => [{ type: "Book", id }],
    }),
    editBook: build.mutation<void, Pick<Book, "id"> & Partial<Book>>({
      query: ({ id, ...patch }) => ({
        url: `books/${id}`,
        method: "PUT",
        body: patch,
        headers: {
          ...headers,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["Book"], // (result, error, { id }) => [{ type: "Book", id }],
    }),
  }),
});

export const {
  useGetBookQuery,
  useGetBooksQuery,
  useSearchQuery,
  useEditBookMutation,
} = booksApi;
