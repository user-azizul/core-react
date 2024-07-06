import { useState } from "react";

const InputHandler = () => {
  const [inputVal, setInputValue] = useState("");
  const inputSubmit = (e) => {
    e.preventDefault();
  };
  const inputOnChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="p-4 text-center m-4">
      <form onSubmit={inputSubmit}>
        <input
          type="text"
          value={inputVal}
          onChange={inputOnChange}
          placeholder="type here....."
        />
        <p> {inputVal}</p>
      </form>
    </div>
  );
};
export default InputHandler;
