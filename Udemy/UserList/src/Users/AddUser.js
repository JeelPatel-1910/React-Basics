import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnterdUsername] = useState("");
  const [enteredAge, setEnterdAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (eve) => {
    eve.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (>0).",
      });
      return;
    }
    props.onAdduser(enteredUsername, enteredAge);
    console.log(enteredUsername, enteredAge);
    setEnterdAge("");
    setEnterdUsername("");
  };

  const usernameChangeHandler = (eve) => {
    setEnterdUsername(eve.target.value);
  };

  const ageChangeHandler = (eve) => {
    setEnterdAge(eve.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={enteredUsername}
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
