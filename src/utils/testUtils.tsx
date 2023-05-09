import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ReactElement } from "react";
import store from "../redux/store";

const TestingWrapper: React.FC<{ component: ReactElement }> = ({
  component,
}) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{component}</Provider>
    </BrowserRouter>
  );
};
export default TestingWrapper;
