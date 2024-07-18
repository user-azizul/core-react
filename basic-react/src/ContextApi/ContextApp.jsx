// src/App.js
import React from "react";
import UserInfo from "./SimplePorject/UserInfo";
import Login from "./SimplePorject/Login";

const ContextApp = () => {
  return (
    <div className="App">
      <h1>React Context API Example</h1>
      <Login />
      <UserInfo />
    </div>
  );
};

export default ContextApp;
