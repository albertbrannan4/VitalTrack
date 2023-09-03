import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./Components/Navbar";
import CreateAccount from "./Forms/CreateAccount";
import Login from "./Forms/Login";
import AddWorkout from "./Forms/AddWorkout";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  { path: "/add-workout", element: <AddWorkout /> },
]);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
