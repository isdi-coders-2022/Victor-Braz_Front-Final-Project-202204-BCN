import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockPlayer } from "../../mocks/playerMock";
import store from "../../redux/store/store";

import Player from "./Player";

describe("Given the Player component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading h3 element", () => {
      const expectedResult = "SPEED";

      render(
        <Provider store={store}>
          <BrowserRouter>
            <Player player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const receivedResult = screen.getByText(expectedResult);

      expect(receivedResult).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a user param that matches the user logged and the rendered delete button is clicked", () => {
    test("Then it should call dispatch", async () => {
      const playerMockSlice = createSlice({
        name: "player",
        initialState: {
          allPlayers: [],
        },
      });

      const mockStore = configureStore({
        reducer: { player: playerMockSlice },
      });

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <Player player={mockPlayer} />
          </BrowserRouter>
        </Provider>
      );

      const buttons = screen.getAllByRole("button");
      userEvent.click(buttons[0]);
      const dispatch = jest.fn();

      expect(dispatch).toBeCalledTimes(0);
    });
  });
});
