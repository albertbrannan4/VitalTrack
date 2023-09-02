import FormLayout from "../Utils/FormLayout";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

import { TextField } from "@mui/material";

import axios from "axios";

interface WorkoutInterface {
  WorkoutType: string;
  Duration: number;
  Notes: string;
}

// const InitialState: WorkoutInterface = {
//   WorkoutType: "",
//   Duration: 0,
//   Notes: "",
// };

const AddWorkout = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<WorkoutInterface>();

  const submit = (data: any) => {
    console.log(data);
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
        <FormControl variant="standard" sx={{ m: 1, minWidth: 220 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Type Of Workout
          </InputLabel>
          <Controller
            name="WorkoutType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Type Of Workout"
                {...field}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"run"}>run</MenuItem>
                <MenuItem value={"lift"}>lift</MenuItem>
                <MenuItem value={"yoga"}>yoga</MenuItem>
              </Select>
            )}
          />
        </FormControl>
        <TextField
          {...register("Duration", {
            valueAsNumber: true,
            min: 1,
            required: "This is required",
          })}
          id="standard-basic"
          label="Duration (minutes)*"
          variant="standard"
          type="numbers"
          style={{ width: 220 }}
        />
        {/* <p style={InputError}>{errors.Duration?.message}</p> */}
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

        <Button variant="contained" type="submit">
          Add Workout
        </Button>
      </form>
    </FormLayout>
  );
};

export default AddWorkout;
