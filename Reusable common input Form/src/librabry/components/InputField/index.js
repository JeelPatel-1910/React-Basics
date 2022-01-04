import React, { useState } from "react";
import { validateInput, onBlurValidation } from "../../utilities/validator";

const InputField = ({
  value,
  type,
  label,
  name,
  validators,
  placeholder,
  onChange,
  className,
  OuterClass,
  onBlur,
}) => {
  const [error, setError] = useState({ error: false, message: "" });

  const handleChange = (eve) => {
    const { name, value } = eve.target;
    setError(validateInput(validators, value));
    onChange(name, value, error);
  };

  const onBlurHandler = (eve) => {
    const { type, value } = eve.target;
    setError(onBlurValidation(eve, type, value));
    onBlur(error);
  };

  return (
    <div className={OuterClass}>
      {label && <label htmlFor="app-input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlurHandler}
      />
      {error && <span className="text-danger">{error.message}</span>}
    </div>
  );
};
export default InputField;
