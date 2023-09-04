import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import LogoutIcon from "@mui/icons-material/Logout";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  let LoggedOut = localStorage.getItem("token") === null;
  // console.log(localStorage.getItem("token") === null);
  return (
    <div className="header">
      <nav>
        {LoggedOut ? (
          <Link className="navLink" to="/login">
            Login
          </Link>
        ) : (
          <Link className="navLink" onClick={() => localStorage.clear()} to="/">
            <LogoutIcon />
          </Link>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
