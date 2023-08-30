import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "90vh",
};
const FormLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={styles}>
      <main>{children}</main>
    </div>
  );
};

export default FormLayout;
