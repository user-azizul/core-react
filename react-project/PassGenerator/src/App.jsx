import React, { useCallback, useEffect, useState } from "react";

function App() {
  const [defaultLength, setDefaultLength] = useState(8); // Default length state
  const [length, setLength] = useState(defaultLength); // Length state
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);

  // Function to generate password
  const passWordGenerator = useCallback(() => {
    let result = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (number) charset += "0123456789";
    if (char) charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * charset.length);
      result += charset[random];
    }
    setPassword(result);
  }, [length, number, char]);

  // Effect to generate password when length, number, or char changes
  useEffect(() => {
    passWordGenerator();
  }, [length, number, char]);

  // Function to toggle number checkbox
  const toggleNumber = () => {
    setNumber((prev) => !prev);
  };

  // Function to toggle char checkbox
  const toggleChar = () => {
    setChar((prev) => !prev);
  };

  // Function to handle changing default length
  const handleDefaultLengthChange = (e) => {
    setDefaultLength(parseInt(e.target.value));
    setLength(parseInt(e.target.value)); // Update length when default length changes
  };
  console.log(password.length);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
        />
        <button
          onClick={() => navigator.clipboard.writeText(password)} // copy to clipboard
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={8}
            max={30}
            value={defaultLength} // Display default length on the range input
            onChange={handleDefaultLengthChange} // Handle default length change
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={number}
            onChange={toggleNumber} // Toggle character checkbox
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={char}
            onChange={toggleChar} // Toggle character checkbox
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
