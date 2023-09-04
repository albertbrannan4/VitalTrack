import React, { useState, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

//Components
import NavBar from "./Components/Navbar";
import CreateAccount from "./Forms/CreateAccount";
import Login from "./Forms/Login";
import AddWorkout from "./Forms/AddWorkout";
import Home from "./Home";
import Footer from "./Components/Footer";

const RouteWithNavBar: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RouteWithNavBar>
        <Home />
      </RouteWithNavBar>
    ),
  },
  {
    path: "/login",
    element: (
      <RouteWithNavBar>
        <Login />
      </RouteWithNavBar>
    ),
  },
  {
    path: "/create-account",
    element: (
      <RouteWithNavBar>
        <CreateAccount />
      </RouteWithNavBar>
    ),
  },
  {
    path: "/add-workout",
    element: (
      <RouteWithNavBar>
        <AddWorkout />
      </RouteWithNavBar>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
