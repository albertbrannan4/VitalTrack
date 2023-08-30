import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";

interface NewUser {
  Email: string;
  Username: string;
  Password: string;
}

const InitialState: NewUser = {
  Email: "",
  Username: "",
  Password: "",
};

const InputError = {
  color: "red",
};

interface Props {
  HandleSubmissions: (action: any, url: string, data: any) => any;
}

const SignUp = ({ HandleSubmissions }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewUser>();

  const OnSubmit = (data: any) => {
    const format = {
      email: data.Email,
      username: data.Username,
      password: data.Password,
    };
    HandleSubmissions(
      "post",
      "http://localhost:9000/api/auth/register",
      format
    );
    reset(InitialState);
  };

  return (
    <form onSubmit={handleSubmit(OnSubmit)}>
      <h3>Create Account</h3>
      <TextField
        {...register("Email", { required: "This is required" })}
        id="standard-basic"
        label="Email *"
        variant="standard"
        type="email"
      />
      <p style={InputError}>{errors.Email?.message}</p>
      <TextField
        {...register("Username", { required: "This is required" })}
        id="standard-basic"
        label="Username *"
        variant="standard"
        type="text"
      />
      <p style={InputError}>{errors.Username?.message}</p>
      <TextField
        {...register("Password", {
          required: "This is required",
          minLength: { value: 5, message: "Min Length is 5" },
        })}
        id="standard-basic"
        label="Password *"
        variant="standard"
        type="password"
      />
      <p style={InputError}>{errors.Password?.message}</p>
      <Button type="submit" style={{ marginTop: "1rem" }} variant="outlined">
        Submit
      </Button>
    </form>
  );
};

export default SignUp;
