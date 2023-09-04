import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

interface Option {
  Text: string;
  Path: string;
}

const NavLinks: Option[] = [{ Text: "Add Workout", Path: "/add-workout" }];

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return (
    <div className="header">
      <nav>
        {!isLoggedIn ? (
          <Link className="navLink" to="/login">
            Login
          </Link>
        ) : (
          <Link className="navLink" onClick={() => localStorage.clear()} to="/">
            Logout
          </Link>
        )}
        {NavLinks.map((each, idx) =>
          isLoggedIn ? (
            <Link className="navLink" key={idx} to={each.Path}>
              {each.Text}
            </Link>
          ) : null
        )}
      </nav>
    </div>
  );
};

export default NavBar;
