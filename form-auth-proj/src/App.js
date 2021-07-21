import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import React, { useState } from "react";
import axios from "axios";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  agree: false,
};

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(initialFormData);

  const onChange = function (e) {
    const { name, value, checked, type } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
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

  return (
    <div className="App">
      <Form onChange={onChange} onSubmit={onSubmit} formData={formData} />
      <Users users={users} />
    </div>
  );
}

export default App;
