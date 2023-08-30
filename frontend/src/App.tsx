import React from "react";
import "./App.css";
import Login from "./Forms/Login";
import CreateAccount from "./Forms/CreateAccount";
import HandleSubmissions from "./Utils/HandleSubmissions";
function App() {
  return (
    <div className="App">
      <Login HandleSubmissions={HandleSubmissions} />
    </div>
  );
}

export default App;
