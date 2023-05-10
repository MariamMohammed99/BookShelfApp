import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useEffect } from "react";
import { useGetBooksQuery } from "../../redux/services/books";
import Main from "./components/Main/Main";

function MainPage() {
  const navigate = useNavigate();
  const { data, isLoading } = useGetBooksQuery();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("login");
    }
  }, [navigate, token]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return <Main booksList={data?.books!} />;
}
export default MainPage;
