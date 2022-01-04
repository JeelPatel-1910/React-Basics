import React, { useState } from "react";
import InputField from "./librabry/components/InputField";
import { Button, Col, Row } from "reactstrap";
import { Validators } from "./librabry/utilities/validator";

function App() {
  const InitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
    gender: null,
  };
  const [values, setValues] = useState(InitialValues);
  const [errors, setErrors] = useState(false);
  const [FormIsValid, setFormIsValid] = useState(true);

  const handleChange = (name, val, error) => {
    console.log(error.error);
    if (error.error) {
      setErrors(error.error);
    } else {
      setErrors(false);
    }
    setValues({ ...values, [name]: val });
  };

  const onBlurHandler = (error) => {
    console.log(error);
    if (error.error) {
      setErrors(error.error);
    } else {
      setErrors(false);
    }
  };

  const handleFormData = (eve) => {
    eve.preventDefault();
    const { first, last, email, number, message, gender } = values;
    if (
      first === "" ||
      last === "" ||
      email === "" ||
      number === "" ||
      message === "" ||
      gender == null
    ) {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);
    console.log(values);
    setValues(InitialValues);
  };
  return (
    <div className="container">
      <form onSubmit={handleFormData}>
        <h2>Registration Form</h2>
        <Row>
          <Col md="6">
            <InputField
              value={values.first}
              placeholder="First"
              name="firstName"
              type="text"
              label="first Name"
              className="form-control"
              OuterClass="Form-group"
              validators={[
                {
                  check: Validators.required,
                  message: "First Name is required",
                },
              ]}
              onChange={handleChange}
              onBlur={onBlurHandler}
            />
          </Col>
          <Col md="6">
            <InputField
              value={values.last}
              placeholder="Last"
              name="lastName"
              type="text"
              label="last Name"
              className="form-control"
              OuterClass="Form-group"
              validators={[
                {
                  check: Validators.required,
                  message: "Last Name is required",
                },
              ]}
              onChange={handleChange}
              onBlur={onBlurHandler}
            />
          </Col>
          <Col md="8">
            <InputField
              value={values.email}
              placeholder=""
              name="email"
              type="email"
              label="Email"
              className="form-control"
              OuterClass="Form-group"
              validators={[
                { check: Validators.email, message: "email is not valid" },
              ]}
              onChange={handleChange}
              onBlur={onBlurHandler}
            />
          </Col>
          <Col md="8">
            <InputField
              value={values.number}
              placeholder="### ### ####"
              name="number"
              type="number"
              label="Phone"
              className="form-control"
              OuterClass="Form-group"
              validators={[
                { check: Validators.number, message: "Number is not valid" },
              ]}
              onChange={handleChange}
              onBlur={onBlurHandler}
            />
          </Col>
          <Col md="8">
            <InputField
              value={values.message}
              placeholder=""
              name="message"
              type="textarea"
              label="message"
              className="form-control"
              OuterClass="Form-group"
              validators={[
                {
                  check: Validators.required,
                  message: "message is required",
                },
              ]}
              onChange={handleChange}
              onBlur={onBlurHandler}
            />
          </Col>
        </Row>
        <span>Select Gender</span>
        <InputField
          type="radio"
          name="gender"
          value="Male"
          label="Male"
          className="form-check-input"
          onChange={handleChange}
          onBlur={onBlurHandler}
        />

        <InputField
          type="radio"
          name="gender"
          value="female"
          label="Female"
          onChange={handleChange}
          onBlur={onBlurHandler}
        />

        <InputField
          type="radio"
          name="gender"
          value="other"
          label="Other"
          onChange={handleChange}
          onBlur={onBlurHandler}
        />
        {!FormIsValid && (
          <span className="text-danger">"Input fields can not be empty"</span>
        )}
        <Button color="primary mt-3" disabled={errors}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default App;
