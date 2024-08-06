import React, { useEffect, useState } from "react";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users.map((user) => user.firstName));
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }
  function handleSearch(e) {
    const value = e.target.value;
    setSearch(value);

    if (value === "") {
      setResults([]); // Clear results if the input is empty
    } else {
      const filterResult = users.filter((user) =>
        user.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filterResult);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
