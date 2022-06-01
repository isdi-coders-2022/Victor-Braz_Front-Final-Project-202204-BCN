import authSlice, { registerActionCreator } from "./authSlice";

describe("Given a authSlice with an registerActionCreator", () => {
  describe("When we do a login with a value name, username and a password", () => {
    test("Then it should return the username", () => {
      const userRegistered = {
        name: "Buffon",
        username: "Gianluigi",
        password: "buffon1977",
      };

      const expectReturn = {
        name: "Buffon",
        username: "Gianluigi",
        password: "buffon1977",
      };

      const initialState = {};

      const action = registerActionCreator(userRegistered);
      const newState = authSlice(initialState, action);

      expect(newState).toEqual(expectReturn);
    });
  });
});
