import React, { useState, useEffect } from "react";
import "./App.scss";
import AddIcon from "@mui/icons-material/Add";
import AddWorkout from "./Forms/AddWorkout";
import axios from "axios";
import { JsxElement } from "typescript";

interface Workout {
  duration: number;
  miles: number;
  notes: string;
  run_id: number;
  user_id: number;
}

const InitialState = [
  {
    duration: 0,
    miles: 0,
    notes: "",
    run_id: 0,
    user_id: 0,
  },
];

const HealthBoard = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [workouts, setWorkout] = useState<Workout[]>(InitialState);
  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/workout", {
        headers: {
          Authorization: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        const { data } = res;
        setWorkout(data);
      })
      .catch((error) => {
        const { response } = error;
        console.error(response);
      });
  }, []);
  console.log(workouts);
  return (
    <div className="dashboard">
      <button onClick={toggleModal} className="add-workout-button">
        <AddIcon />
      </button>
      <h2>Health Board</h2>
      <div className="workouts-section">
        {workouts.map((each: Workout) => (
          <div className="workout-row" key={each.run_id}>
            Miles: {each.miles} Duration: {each.duration} Notes: {each.notes}
          </div>
        ))}
      </div>
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
