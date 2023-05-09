import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./components/Search/Search";
import SearchResults from "./components/SearchResults/SearchResults";
import { useGetBooksQuery } from "../../redux/services/books";

const SearchPage = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetBooksQuery();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("login");
    }
  }, [navigate]);
  const [debouncedValue, setDebounceValue] = useState("");

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Search setDebounced={setDebounceValue} />
      <SearchResults
        searchProps={{ searchTerm: debouncedValue, booksInMain: data?.books! }}
      />
    </>
  );
};
export default SearchPage;
