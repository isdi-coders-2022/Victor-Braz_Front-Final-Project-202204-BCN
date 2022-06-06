import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a LoginPage Component", () => {
  describe("When it's invoked", () => {
    test("Then it should render the text 'Login'", () => {
      const expectedResult = "Login";

      render(
        <>
          <Provider store={store}>
            <BrowserRouter>
              <HomePage />
            </BrowserRouter>
          </Provider>
        </>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });
});
