import React from "react";
import "./Form.css";

export default function Form(props) {
  const { onChange, onSubmit, formData, disabled } = props;
  return (
    <form onSubmit={onSubmit}>
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
    </form>
  );
}
