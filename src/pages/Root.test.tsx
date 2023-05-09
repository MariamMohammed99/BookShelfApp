import { render } from "@testing-library/react";
import Root from "./Root";

describe("Loading Root", () => {
  test("Rendering Root", () => {
    render(<Root />);
    // expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
