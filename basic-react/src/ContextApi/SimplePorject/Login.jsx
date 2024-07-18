// src/components/Login.js
import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (name.trim()) {
      setUser({ name });
      setError(""); // Clear any previous errors
    } else {
      setError("Name cannot be empty");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
