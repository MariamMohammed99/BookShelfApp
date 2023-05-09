import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

describe("Loading App", () => {
  test("Rendering App", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText("Email")).toBeInTheDocument();
  });
});
