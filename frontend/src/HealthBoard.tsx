import React, { useState } from "react";
import "./App.scss";
import AddIcon from "@mui/icons-material/Add";
import AddWorkout from "./Forms/AddWorkout";

const HealthBoard = () => {
  const [modal, setModal] = useState<boolean>(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(modal);
  return (
    <div className="dashboard">
      <button onClick={toggleModal} className="add-workout-button">
        <AddIcon />
      </button>
      <h2>Health Board</h2>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <AddWorkout setModal={setModal} />
        </div>
      )}
    </div>
  );
};
export default HealthBoard;
