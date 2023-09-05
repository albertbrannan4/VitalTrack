import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import FormLayout from "./FormLayout";
import { useNavigate, Link } from "react-router-dom";
import { connect } from "react-redux";
import axios, { AxiosError } from "axios";
import { setAuthentication, setUsername } from "../Store";
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

const Login = (props: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewUser>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>();
  const OnSubmit = async (data: any) => {
    const format = {
      username: data.Username,
      password: data.Password,
    };
    try {
      let res = await axios.post(
        "http://localhost:9000/api/auth/login",
        format
      );
      const userToken: any = res.data.token;
      const username: string = res.data.username;
      console.log(userToken);
      localStorage.setItem("token", userToken);
      reset(InitialState);

      props.setAuthentication(!props.isAuthenticated);
      props.setUsername(username);
      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const { message } = err.response?.data;
        setMessage(message);
      }
    }
  };
  console.log(props);
  return (
    <FormLayout>
      <form
        // style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(OnSubmit)}
      >
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
          LOGIN
        </Button>
      </form>

      <Link className="switch-form-link" to="/create-account">
        Create Account
      </Link>
      <h3 style={{ textAlign: "center", color: "red", marginTop: "10%" }}>
        {message}
      </h3>
    </FormLayout>
  );
};

const mapStateToProps = (state: any) => {
  return { isAuthenticated: state.isAuthenticated, username: state.username };
};

export default connect(mapStateToProps, { setAuthentication, setUsername })(
  Login
);
