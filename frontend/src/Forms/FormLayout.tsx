import React, { ReactNode } from "react";
import "../App.css";
interface LayoutProps {
  children: ReactNode;
}

const FormLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="form-layout">
      <main>{children}</main>
      <img
        src="https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Logo"
      />
    </div>
  );
};

export default FormLayout;
