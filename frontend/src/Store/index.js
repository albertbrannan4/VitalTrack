import { createStore } from "redux";

const LoggedIn = "LoggedIn";

export function setAuthentication(user) {
  return { type: LoggedIn, payload: user };
}
const initialState = {
  isAuthenticated: localStorage.getItem("token") !== null,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LoggedIn:
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};

const store = createStore(AuthReducer);

export default store;
