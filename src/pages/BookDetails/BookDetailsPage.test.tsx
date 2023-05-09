import { render, screen } from "@testing-library/react";
import BookDetailsPage from "./BookDetailsPage";
import TestingWrapper from "../../utils/testUtils";

describe("Loading Book Details Page", () => {
  test("Token Found and Loading", () => {
    render(<TestingWrapper component={<BookDetailsPage />} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

// import { render, screen, waitFor } from "@testing-library/react";
// import BookDetailsPage from "./BookDetailsPage";
// import * as api from "../../redux/services/books";

// /**
//  * Mock the api module so that we can inject
//  * the desired behavior into getPokemonsFromApi
//  * while testing
//  */
// jest.mock("./api");

// describe("PokemonList Component", () => {
//   // After each test clear the mock
//   beforeEach(() => jest.clearAllMocks());

//   it("should render pokemon names when api responds", async () => {
//     // For this test, when getPokemonsFromApi is called
//     // return the given value wrapped in a Promise
//     api.useGetBooksQuery.mockResolvedValue({
//       results: [{ name: "pokedex" }],
//     });
//     // Render the component
//     render(<BookDetailsPage />);
//     // See if the pokemon name we returned in the mock is visible
//     await waitFor(() => {
//       screen.getByText("pokedex");
//     });
//   });
// });
