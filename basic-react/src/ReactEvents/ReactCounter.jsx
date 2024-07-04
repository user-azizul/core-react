import { useState } from "react";

// const Counter = () => {
//   let [count, setCount] = useState(0);
//   const decrement = () => setCount(count <= 0 ? 0 : count - 1);
//   const increment = () => setCount(count >= 10 ? 10 : count + 1);
//   return (
//     <div className="flex items-center justify-center space-x-8 p-10">
//       <button
//         onClick={decrement}
//         className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded "
//       >
//         Decrement
//       </button>
//       <p className="text-4xl font-semibold text-gray-800"> {count}</p>
//       <button
//         onClick={increment}
//         className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded "
//       >
//         Increment
//       </button>
//     </div>
//   );
// };
const Input = () => {
  const [val, setVal] = useState("");
  const inputHandler = (e) => {
    setVal(e.target.value);
  };
  return (
    <div className=" p-4 m-4 flex item-center justify-center mx-auto flex-col w-80">
      <input
        type="text"
        value={val}
        onChange={inputHandler}
        className="border border-green-400 p-2 rounded shadow"
        placeholder="Type something..."
      />{" "}
      <br />
      <p className="mt-4 text-green-400">You typed: {val}</p>
    </div>
  );
};
export default Input;
