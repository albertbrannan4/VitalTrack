import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../App.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { setAuthentication, setUsername } from "../Store";

const NavBar = (props: any) => {
  const { isAuthenticated, username } = props;
  const Logout = () => {
    localStorage.clear();
    props.setAuthentication(!isAuthenticated);
    props.setUsername("");
  };

  return (
    <div className="header">
      <h4>{username.toUpperCase()}</h4>
      <nav>
        <Link className="navLink" to="/">
          <HomeIcon />
        </Link>
        {isAuthenticated && (
          <Link className="navLink" to="/dashboard">
            <DashboardIcon />
          </Link>
        )}
        {!isAuthenticated ? (
          <Link className="navLink" to="/login">
            <LoginIcon />
          </Link>
        ) : (
          <Link className="navLink" onClick={Logout} to="/">
            <LogoutIcon />
          </Link>
        )}
      </nav>
    </div>
  );
};
const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.isAuthenticated, username: state.username };
};

export default connect(mapStateToProps, { setAuthentication, setUsername })(
  NavBar
);
