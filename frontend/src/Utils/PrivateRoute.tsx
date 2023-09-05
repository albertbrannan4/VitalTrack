import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

export default PrivateRoute;
