import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import React, { useEffect, useState } from "react";
import axios from "axios";
import formSchema from "./validations/formValidation.js";
import * as yup from "yup";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  agree: false,
};

const initialErrors = { ...initialFormData };
function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [disabled, setDisabled] = useState(true);

  const onChange = function (e) {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormErrors(name, valueToUse);
    setFormData({ ...formData, [name]: valueToUse });
  };

  const onSubmit = function (e) {
    e.preventDefault();
    const newUser = { ...formData };
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([newUser, ...users]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setFormData(initialFormData);
      });
  };

  const setFormErrors = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((res) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    formSchema.isValid(formData).then((valid) => setDisabled(!valid));
  }, [formData]);

  return (
    <div className="App">
      <Form
        onChange={onChange}
        onSubmit={onSubmit}
        formData={formData}
        disabled={disabled}
        errors={errors}
      />
      <Users users={users} />
    </div>
  );
}

export default App;
