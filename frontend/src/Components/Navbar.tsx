import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../App.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { setAuthentication } from "../Store";
const NavBar = (props: any) => {
  const { isAuthenticated } = props;
  const Logout = () => {
    localStorage.clear();
    props.setAuthentication(!isAuthenticated);
  };

  return (
    <div className="header">
      <nav>
        <Link to="/">
          <HomeIcon style={{ color: "white" }} />
        </Link>
        {isAuthenticated && (
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/dashboard"
          >
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
  return { isAuthenticated: state.isAuthenticated };
};

export default connect(mapStateToProps, { setAuthentication })(NavBar);
