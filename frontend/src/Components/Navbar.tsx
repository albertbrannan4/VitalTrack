import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../App.scss";
import LogoutIcon from "@mui/icons-material/Logout";
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
        {!isAuthenticated ? (
          <Link className="navLink" to="/login">
            Login
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
