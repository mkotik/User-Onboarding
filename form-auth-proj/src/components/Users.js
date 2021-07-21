import React from "react";
import "./Users.css";

export default function Users(props) {
  const { users } = props;
  console.log(users);
  return (
    <div className="users">
      {users.map((user) => (
        <div className="user">
          <h3 className="name">Name: {user.name}</h3>
          <h3 className="email">Email: {user.email}</h3>
          <h3 className="password">Password: {user.password}</h3>
          <h3 className="agree">
            Agreed to Terms of Service: {user.agree.toString()}
          </h3>
        </div>
      ))}
    </div>
  );
}
