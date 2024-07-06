import React from "react";
import { useEffect, useState } from "react";

function UseEffectHook({ name }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default UseEffectHook;
