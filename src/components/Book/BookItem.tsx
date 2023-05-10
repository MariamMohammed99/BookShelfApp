import { useNavigate } from "react-router-dom";
import { Book } from "../../types/Book.types";
import { useEditBookMutation } from "../../redux/services/books";
import classes from "./BookItem.module.css";

const BookItem: React.FC<{
  book: Book;
}> = ({ book }) => {
  const navigate = useNavigate();
  const [editBook] = useEditBookMutation();
  const onClickHandler = () => {
    navigate(`/${book.id}`);
  };

  const onSelectHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    editBook({
      ...book,
      id: book.id,
      shelf: event.currentTarget.value,
    })
      .unwrap()
      .then(() => {})
      .then(() => {});
  };
  const imageUrl =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "";
  return (
    <div className={classes.book}>
      <div className={classes["book-top"]}>
        <div className={classes["image-wrapper"]}>
          <div className={classes.image}>
            <img src={imageUrl} alt={`Cover page of ${book.title} book`} />
          </div>
        </div>
        <div className={classes["book-shelf-changer"]}>
          <select
            onChange={onSelectHandler}
            defaultValue={book.shelf || "none"}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className={classes["book-title"]}>{book.title}</div>
      <div className={classes["book-authors"]}>
        {book.authors &&
          book.authors.map((author) => <h4 key={author}>{author}</h4>)}
      </div>
      <div className={classes["button-wrapper"]}>
        <button onClick={onClickHandler} type="button">
          Details
        </button>
      </div>
    </div>
  );
};

export default BookItem;
