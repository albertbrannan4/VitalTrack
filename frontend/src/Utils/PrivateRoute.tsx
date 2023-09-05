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

interface MapState {
  isAuthenticated: boolean;
}

const mapStateToProps = ({ isAuthenticated }: MapState) => {
  return { isAuthenticated: isAuthenticated };
};

export default connect(mapStateToProps, {})(PrivateRoute);
