// src/App.js
import React from "react";
import UserInfo from "./UserInfo";
import Login from "./Login";
import { UserProvider } from "./UserContext";

const ContextApp = () => {
  return (
    <UserProvider> 
    <div className="App">
      <h1>React Context API Example</h1>
      <Login />
      <UserInfo />
    </div>
    </UserProvider>
  );
};

export default ContextApp;
