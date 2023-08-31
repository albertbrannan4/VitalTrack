import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import FormLayout from "../Utils/FormLayout";
import HandleSubmissions from "../Utils/HandleSubmissions";
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

const CreateAccount = () => {
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
    <FormLayout>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(OnSubmit)}
      >
        <h3 style={{ textAlign: "center" }}>Create Account</h3>
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
      <a
        style={{
          width: "100%",
          textDecoration: "none",
          color: "blue",
          display: "inline-block",
          textAlign: "center",
          marginTop: "10%",
          fontSize: "12px",
        }}
        href="/login"
      >
        Login
      </a>
    </FormLayout>
  );
};

export default CreateAccount;
