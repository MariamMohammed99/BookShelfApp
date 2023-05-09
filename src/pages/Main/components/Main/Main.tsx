import { DragDropContext, DragStart, DropResult } from "react-beautiful-dnd";
import { useEffect, useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";
import { useNavigate } from "react-router-dom";
import { Book } from "../../../../types/Book.types";
import Shelf from "../Shelf/Shelf";
import classes from "./Main.module.css";
import {
  useEditBookMutation,
  useGetBookQuery,
} from "../../../../redux/services/books";

const Main: React.FC<{ booksList: Book[] }> = ({ booksList }) => {
  const navigate = useNavigate();
  const [editBook] = useEditBookMutation();
  const initialList: Book[] = [];
  const [booksCurrentlyReading, setBooksCurrentlyReading] =
    useState(initialList);
  const [booksRead, setBooksRead] = useState(initialList);
  const [booksWantToRead, setBooksWantToRead] = useState(initialList);
  const [bookId, setBookId] = useState("");
  const { data } = useGetBookQuery(bookId || skipToken);
  useEffect(() => {
    if (booksList) {
      setBooksCurrentlyReading([
        ...booksList.filter(
          (bookitem) => bookitem.shelf === "currentlyReading",
        ),
      ]);
      setBooksRead([
        ...booksList.filter((bookitem) => bookitem.shelf === "read"),
      ]);
      setBooksWantToRead([
        ...booksList.filter((bookitem) => bookitem.shelf === "wantToRead"),
      ]);
    }
  }, [booksList]);
  const navigateToSearch = () => {
    navigate("search");
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("login");
  };
  const onDragStart = (book: DragStart) => {
    const { draggableId } = book;
    setBookId(draggableId);
  };
  const onDragEnd = (result: DropResult) => {
    const { destination } = result;
    if (!destination) {
      return;
    }
    editBook({
      ...data?.book,
      id: bookId,
      shelf: destination.droppableId,
    })
      .unwrap()
      .then(() => {})
      .then(() => {});
    // .then((error) => {
    //   console.log(error);
    // });
  };

  return (
    <div className={classes.app}>
      <div className={classes["list-books"]}>
        <div className={classes["list-books-title"]}>
          <h1>MyReads</h1>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
        <div className={classes["list-books-content"]}>
          <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
            <Shelf
              booksShelf={{
                title: "Currently Reading",
                booksList: booksCurrentlyReading!,
                id: "currentlyReading",
              }}
            />
            <Shelf
              booksShelf={{
                title: "Want to Read",
                booksList: booksWantToRead!,
                id: "wantToRead",
              }}
            />
            <Shelf
              booksShelf={{ title: "Read", booksList: booksRead!, id: "read" }}
            />
          </DragDropContext>
        </div>
        <div className={classes["open-search"]}>
          <button type="button" onClick={navigateToSearch}>
            Add a book
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
