import React from "react";
import "./Form.css";

export default function Form(props) {
  const { onChange, onSubmit, formData, disabled, errors } = props;
  console.log(errors);
  console.log(errors.name);
  return (
    <form onSubmit={onSubmit}>
      <div className="right">
        <h4>{errors.name}</h4>
        <h4>{errors.email}</h4>
        <h4>{errors.password}</h4>
        <h4>{errors.agree}</h4>
      </div>
      <div className="left">
        <label>
          name:{" "}
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={formData.name}
          />
        </label>
        <label>
          email:{" "}
          <input
            type="text"
            name="email"
            onChange={onChange}
            value={formData.email}
          />
        </label>
        <label>
          password:{" "}
          <input
            type="text"
            name="password"
            onChange={onChange}
            value={formData.password}
          />
        </label>
        <label>
          Agree to Terms of Service:{" "}
          <input
            type="checkbox"
            name="agree"
            onChange={onChange}
            checked={formData.agree}
          />
        </label>
        <button disabled={disabled}>Submit</button>
      </div>
    </form>
  );
}
