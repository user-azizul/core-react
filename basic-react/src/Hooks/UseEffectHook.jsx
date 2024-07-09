// import React from "react";
// import { useEffect, useState } from "react";

// function UseEffectHook({ name }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Fetch data from an API
//     fetch("https://api.example.com/data")
//       .then((response) => response.json())
//       .then((result) => setData(result))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   return (
//     <div>
//       {data ? (
//         <ul>
//           {data.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// }

// export default UseEffectHook;
import React, { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);

  // useEffect example: runs after every render
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default UseEffectHook;
