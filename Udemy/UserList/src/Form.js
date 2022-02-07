import React from "react";

const Form = () => {
  return (
    <div className="main">
      <div className="card">
        <Form>
          <label>
            UserName:
            <input type="text" />
          </label>
          <label>
            select your country
            <select>
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Newyork">Newyork</option>
            </select>
          </label>
        </Form>
      </div>
    </div>
  );
};

export default Form;
