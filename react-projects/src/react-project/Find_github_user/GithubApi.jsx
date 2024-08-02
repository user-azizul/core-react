import React, { useEffect, useState } from "react";
import "./github.css";
import GithubCard from "./GithubCard";

const GithubApi = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("github");
    return savedData ? JSON.parse(savedData) : null;
  });

  const fetchData = async (username) => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const userData = await res.json();
      setData(userData);
      localStorage.setItem("github", JSON.stringify(userData));
    } catch (e) {
      console.log(e);
    }
  };
  console.log(data);
  function handleSubmit(e) {
    e.preventDefault();
    if (input.trim()) {
      fetchData(input);
      setInput("");
    }
  }

  return (
    <div className="Github">
      <div className="-title">
        <h3>Github Profile Finder</h3>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {data !== null ? <GithubCard user={data} /> : null}
    </div>
  );
};

export default GithubApi;
