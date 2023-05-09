import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import BookItem from "../../../../components/Book/BookItem";
import classes from "./SearchResults.module.css";
import { useSearchQuery } from "../../../../redux/services/books";
import { SearchResultsProps } from "./SearchResults.types";
import { Book } from "../../../../types/Book.types";

const SearchResults: React.FC<{ searchProps: SearchResultsProps }> = ({
  searchProps,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [booksInSearch, setBooksInSearch] = useState<Book[]>([]);
  const { searchTerm, booksInMain } = searchProps;
  const { data, isLoading } = useSearchQuery(
    searchQuery ? { query: searchQuery } : skipToken,
  );

  useEffect(() => {
    if (searchTerm.trim().length > 0) {
      setSearchQuery(searchTerm);
    } else {
      setSearchQuery("");
    }
  }, [searchTerm]);
  useEffect(() => {
    if (booksInMain && data && data?.books) {
      // const finalList: Book[] = [];

      const finalList: Book[] = data?.books.map((eachBookInSearch: Book) => {
        const bookFound = booksInMain.find(
          (eachBookInMain: Book) => eachBookInSearch.id === eachBookInMain.id,
        );

        return bookFound ? { ...bookFound } : { ...eachBookInSearch };
      });

      setBooksInSearch(finalList);
    }
  }, [booksInMain, data]);
  if (isLoading) {
    return (
      <div className={classes["search-books-results"]}>
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes["search-books-results"]}>
      <ol className={classes["books-grid"]}>
        {booksInSearch &&
          booksInSearch.map((book) => (
            <li key={book.id}>
              <BookItem book={book} />
            </li>
          ))}
      </ol>
      {!booksInSearch && <h1>No Books were found</h1>}
    </div>
  );
};
export default SearchResults;
