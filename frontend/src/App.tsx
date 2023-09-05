import React, { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

//Components
import PrivateRoute from "./Utils/PrivateRoute";
import NavBar from "./Components/Navbar";
import CreateAccount from "./Forms/CreateAccount";
import Login from "./Forms/Login";

import Home from "./Home";
import Footer from "./Components/Footer";
import HealthBoard from "./HealthBoard";

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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <RouteWithNavBar>
          <HealthBoard />
        </RouteWithNavBar>
      </PrivateRoute>
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
