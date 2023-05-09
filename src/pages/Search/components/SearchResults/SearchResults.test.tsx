import { render, screen } from "@testing-library/react";
import SearchResults from "./SearchResults";
import TestingWrapper from "../../../../utils/testUtils";
import { SearchResultsProps } from "./SearchResults.types";

describe("Testing Search Results", () => {
  test("Search Term is Not Empty", () => {
    const searchResultsProps: SearchResultsProps = {
      searchTerm: "poetry",
      booksInMain: [
        {
          id: "nggnmAEACAAJ",
          title: "The Linux Command Line",
          authors: ["William E. Shotts, Jr."],
          imageLinks: {
            thumbnail: "url",
          },
          shelf: "currentlyReading",
          description: "Description example",
          publishedDate: "date",
        },
      ],
    };
    render(
      <TestingWrapper
        component={<SearchResults searchProps={searchResultsProps} />}
      />,
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
