import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";
import useDebounce from "../../../../hooks/useDebounce";

const Search: React.FC<{
  setDebounced: (value: string) => void;
}> = ({ setDebounced }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce(query, 1000);
  useEffect(() => {
    setDebounced(debouncedValue);
  }, [debouncedValue, setDebounced]);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const navigateToMain = () => {
    navigate("/");
  };
  return (
    <div className={classes.app}>
      <div className={classes["search-books-bar"]}>
        <div className={classes["close-search"]}>
          <button onClick={navigateToMain} type="button">
            close
          </button>
        </div>
        <div className={classes["search-books-input-wrapper"]}>
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};
export default Search;
