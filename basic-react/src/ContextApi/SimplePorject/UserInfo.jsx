// src/components/UserInfo.js
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <h1>Welcome, {user.name}</h1> : <h1>No user logged in</h1>}
    </div>
  );
};

export default UserInfo;
