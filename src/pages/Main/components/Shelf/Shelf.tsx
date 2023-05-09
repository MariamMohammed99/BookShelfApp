import { Droppable, Draggable } from "react-beautiful-dnd";
import BookItem from "../../../../components/Book/BookItem";
import classes from "./Shelf.module.css";
import { BooksShelf } from "./Shelt.types";

const Shelf: React.FC<{ booksShelf: BooksShelf }> = ({ booksShelf }) => {
  return (
    <Droppable droppableId={booksShelf.id} isDropDisabled={false}>
      {(provided) => (
        <div className={classes.bookshelf}>
          <h2 className={classes["bookshelf-title"]}>{booksShelf.title}</h2>
          <div className={classes["bookshelf-books"]}>
            <ol
              className={classes["books-grid"]}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {provided.placeholder}
              {booksShelf.booksList &&
                booksShelf.booksList!.map((book, index) => (
                  <Draggable key={book.id} draggableId={book.id} index={index}>
                    {(providedDraggable) => (
                      <li
                        ref={providedDraggable.innerRef}
                        {...providedDraggable.draggableProps}
                        {...providedDraggable.dragHandleProps}
                      >
                        <BookItem book={book} />
                      </li>
                    )}
                  </Draggable>
                ))}
            </ol>
          </div>
        </div>
      )}
    </Droppable>
  );
};
export default Shelf;
