import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  children,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return <>{children}</>;
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.isAuthenticated };
};

export default connect(mapStateToProps, {})(PrivateRoute);
