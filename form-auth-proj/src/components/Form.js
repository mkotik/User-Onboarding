import React from "react";
import "./Form.css";

export default function Form(props) {
  const { onChange, onSubmit, formData, disabled, errors } = props;
  return (
    <div id="#wrap">
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
      <div className="errorWrap">
        <h4 className="nameErr">{errors.name}</h4>
        <h4 className="emailErr">{errors.email}</h4>
        <h4 className="passwordErr">{errors.password}</h4>
        <h4 className="agreeErr">{errors.agree}</h4>
      </div>
    </div>
  );
}
