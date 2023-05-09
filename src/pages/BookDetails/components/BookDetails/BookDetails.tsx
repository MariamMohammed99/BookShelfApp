import { Book } from "../../../../types/Book.types";
import classes from "./BookDetails.module.css";

const BookDetails: React.FC<{ book: Book }> = ({ book }) => {
  const imageUrl =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : "";
  return (
    <div className={classes.app}>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>{book.title}</h1>
        </div>
        <div className={classes.book}>
          <div className={classes.details}>
            <div className={classes["image-wrapper"]}>
              <div className={classes.image}>
                <img src={imageUrl} alt={`Cover page of ${book.title} book`} />
              </div>
            </div>
            {book.authors && (
              <div className={classes["book-details"]}>
                <h4 style={{ fontWeight: "bold" }}>Authors:</h4>
                {book.authors.map((author) => (
                  <h4 key={author}>{author}</h4>
                ))}
              </div>
            )}
            {book.shelf && (
              <div className={classes["book-details"]}>
                <h4 style={{ fontWeight: "bold" }}>Shelf:</h4>
                <h4>{book.shelf}</h4>
              </div>
            )}
            {book.publishedDate && (
              <div className={classes["book-details"]}>
                <h4 style={{ fontWeight: "bold" }}>Published Date:</h4>
                <h4>{book.publishedDate}</h4>
              </div>
            )}
            <div className={classes.description}>
              {book.description && (
                <div className={classes["description-details"]}>
                  <h4 style={{ fontWeight: "bold" }}>Description:</h4>
                  <h4>{book.description}</h4>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
