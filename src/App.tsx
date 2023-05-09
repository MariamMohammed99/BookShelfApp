import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MainPage from "./pages/Main/MainPage";
import SearchPage from "./pages/Search/SearchPage";
import BookDetailsPage from "./pages/BookDetails/BookDetailsPage";
import LoginPage from "./pages/Authentication/Login/LoginPage";
import SignUpPage from "./pages/Authentication/SignUp/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "search", element: <SearchPage /> },
      { path: ":id", element: <BookDetailsPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignUpPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
