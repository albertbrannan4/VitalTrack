import FormLayout from "../Utils/FormLayout";
import React, { useState } from "react";

import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

import { TextField } from "@mui/material";

import axios from "axios";

interface WorkoutInterface {
  Duration: number;
  Distance: number;
  Notes: string;
}

// const InitialState: WorkoutInterface = {
//   WorkoutType: "",
//   Duration: 0,
//   Notes: "",
// };

function ConvertStringToSeconds(time: string) {
  const [hours, minutes, seconds] = time.split(":");
  let totalSeconds =
    parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
}

const AddWorkout = () => {
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
        Authorization: `${localStorage.getItem("token")}`, // Add the token to the "Authorization" header
        "Content-Type": "application/json", // Set the content type as needed
      },
    };
    console.log(config);
    axios
      .post("http://localhost:9000/api/workout/", cleanRunData, config)
      .then((response) => {
        // Handle the response
        setMessage(response.data.message);
        console.log(response.data.message);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  const InputError = {
    color: "red",
  };

  return (
    <FormLayout>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        onSubmit={handleSubmit(submit)}
      >
        <h2>Add Workout</h2>

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
          <p>{message}</p>
        )}
      </form>
    </FormLayout>
  );
};

export default AddWorkout;
