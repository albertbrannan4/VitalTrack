import React, { useState, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { connect } from "react-redux";
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

const AppRouter: React.FC<{ isAuthenticated: boolean }> = ({
  isAuthenticated,
}) => {
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
        <PrivateRoute isAuthenticated={isAuthenticated}>
          <RouteWithNavBar>
            <HealthBoard />
          </RouteWithNavBar>
        </PrivateRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

function App(props: { isAuthenticated: boolean }) {
  const { isAuthenticated } = props;
  console.log(isAuthenticated);
  return (
    <div className="App">
      <AppRouter isAuthenticated={isAuthenticated} />
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.isAuthenticated };
};

export default connect(mapStateToProps, {})(App);
