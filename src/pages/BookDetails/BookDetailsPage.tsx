import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import BookDetails from "./components/BookDetails/BookDetails";
import { useGetBookQuery } from "../../redux/services/books";

const BookDetailsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("login");
    }
  }, [navigate]);
  const params = useParams();
  const { data, isLoading } = useGetBookQuery(params.id!);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return <BookDetails book={data!.book} />;
};
export default BookDetailsPage;
