import React, { useState } from "react";
import "../App.scss";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import ClearIcon from "@mui/icons-material/Clear";
import { TextField } from "@mui/material";

import axios from "axios";

interface WorkoutInterface {
  Duration: number;
  Distance: number;
  Notes: string;
}

function ConvertStringToSeconds(time: string): number {
  const [hours, minutes, seconds] = time.split(":");
  let totalSeconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
}

interface Props {
  setModal: any;
}

const AddWorkout = ({ setModal }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WorkoutInterface>();
  const [message, setMessage] = useState<string>("");

  const submit = async (data: any) => {
    const { Duration, Distance, Notes } = data;
    let convertedTime = ConvertStringToSeconds(Duration);
    let cleanRunData = {
      duration: convertedTime,
      miles: parseInt(Distance),
      notes: Notes,
    };

    const config = {
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    };

    axios
      .post("http://localhost:9000/api/workout/", cleanRunData, config)
      .then((response) => {
        setMessage(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const InputError = {
    color: "red",
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="add-run-form">
      <div className="clear-modal" onClick={() => setModal(false)}>
        <ClearIcon />
      </div>
      <h2 style={{ color: "black", fontSize: "1.4rem", marginBottom: "1%" }}>
        Add Workout
      </h2>

      <TextField
        {...register("Duration", {
          required: "Duration is required",
        })}
        id="standard-basic"
        label="Duration *"
        placeholder="00:00:00"
        variant="standard"
        type="text"
        style={{ width: 220 }}
      />
      <p style={InputError}>{errors.Duration?.message}</p>
      <TextField
        {...register("Distance", {
          required: "Distance is required",
        })}
        id="standard-basic"
        label="Distance *"
        variant="standard"
        type="text"
        style={{ width: 220 }}
      />
      <p style={InputError}>{errors.Distance?.message}</p>
      <TextField
        {...register("Notes")}
        multiline
        rows={4}
        id="standard-basic"
        label="Notes"
        variant="standard"
        type="text"
        style={{ width: 220, marginBottom: "10%" }}
      />

      {message === "" ? (
        <Button variant="contained" type="submit">
          Add Workout
        </Button>
      ) : (
        <p style={{ color: "green", fontWeight: 700 }}>
          {message.toLocaleUpperCase()}
        </p>
      )}
    </form>
  );
};

export default AddWorkout;
