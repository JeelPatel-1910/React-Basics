import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const emailChangeHandler = (e) => {
    let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (e.target.value.match(pattern)) {
    } else {
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", {
                required: { value: true, message: "username is required" },
              })}
            />
            {errors.username?.type === "required" && (
              <span>{errors.username.message}</span>
            )}
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={emailChangeHandler}
              {...register("email", {
                required: { value: true, message: "email is required" },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "This email is not valid.",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <span>{errors.email.message}</span>
            )}
            {errors.email?.type === "pattern" && (
              <span>{errors.email.message}</span>
            )}
          </div>
          <div className="field">
            <label>Gender</label>
            <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select>
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: { value: true, message: "password is required" },
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 6,
                  message: "Password can't exceed more than 6 characters",
                },
              })}
            />
            {errors.password?.type === "required" && (
              <span>{errors.password.message}</span>
            )}
            {errors.password?.type === "minLength" && (
              <span>{errors.password.message}</span>
            )}
            {errors.password?.type === "maxLength" && (
              <span>{errors.password.message}</span>
            )}
          </div>
          <div className="field">
            <lable>
              <input
                type="checkbox"
                value={true}
                name="accept"
                {...register("accept", {
                  required: { value: true, message: "this is required" },
                })}
              />
              I agree
            </lable>
            {errors.accept?.type === "required" && (
              <span>{errors.accept.message}</span>
            )}
          </div>
          <button className="fluid ui button blue">submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
