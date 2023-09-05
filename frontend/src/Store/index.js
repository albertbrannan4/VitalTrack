import { createStore } from "redux";

const SET_LOGIN = "SET_LOGIN";
const SET_USERNAME = "SET_USERNAME";

export function setAuthentication(user) {
  return { type: SET_LOGIN, payload: user };
}

export function setUsername(username) {
  return { type: SET_USERNAME, payload: username };
}

const initialState = {
  isAuthenticated: localStorage.getItem("token") !== null,
  username: "",
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, isAuthenticated: action.payload };
    case SET_USERNAME:
      return { ...state, username: action.payload };
    default:
      return state;
  }
};

const store = createStore(AuthReducer);

export default store;
