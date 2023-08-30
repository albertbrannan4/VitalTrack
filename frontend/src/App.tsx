import React from "react";
import CreateAccount from "./Forms/CreateAccount";
import HandleSubmissions from "./Utils/HandleSubmissions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CreateAccount HandleSubmissions={HandleSubmissions} />
    </div>
  );
}

export default App;
