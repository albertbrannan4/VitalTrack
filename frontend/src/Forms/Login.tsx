import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import FormLayout from "../Utils/FormLayout";
import HandleSubmissions from "../Utils/HandleSubmissions";
interface NewUser {
  Username: string;
  Password: string;
}

const InitialState: NewUser = {
  Username: "",
  Password: "",
};

const InputError = {
  color: "red",
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewUser>();

  const OnSubmit = (data: any) => {
    const format = {
      username: data.Username,
      password: data.Password,
    };
    HandleSubmissions("post", "http://localhost:9000/api/auth/login", format);
    reset(InitialState);
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit(OnSubmit)}>
        <h3 style={{ textAlign: "center" }}>Login</h3>
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
    </FormLayout>
  );
};

export default Login;
