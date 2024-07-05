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
// const Input = () => {
//   const [val, setVal] = useState("");
//   const inputHandler = (e) => {
//     setVal(e.target.value);
//   };
//   return (
//     <div className=" p-4 m-4 flex item-center justify-center mx-auto flex-col w-80">
//       <input
//         type="text"
//         value={val}
//         onChange={inputHandler}
//         className="border border-green-400 p-2 rounded shadow"
//         placeholder="Type something..."
//       />{" "}
//       <br />
//       <p className="mt-4 text-green-400">You typed: {val}</p>
//     </div>
//   );
// };

// const TaskLoader = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, text: "Read an article" },
//     { id: 2, text: "Read a book" },
//     { id: 3, text: "Write an article" },
//     { id: 4, text: "Code" }
//   ]);
//   const deleteTask = (taskid) => {
//     setTasks((currentTasks) =>
//       currentTasks.filter((task) => task.id !== taskid)
//     );
//   };

//   return (
//     <div className="clap-5 max-w-md mx-auto bg-gray-100 rounded-lg shadowssName">
//       <ul className="list-none space-y-2">
//         {tasks.map((task) => (
//           <li
//             key={task.id}
//             className="flex justify-between items-center bg-white p-3 rounded shadow-sm"
//           >
//             {task.text}
//             <button
//               type="button"
//               onClick={() => deleteTask(task.id)}
//               className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
const Login = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggledIn = () => {
    setLoggedIn(!isLoggedIn);
  };
  const checkLogin = () => {
    isLoggedIn
      ? console.log("user logged in")
      : console.log("user not logged in");
  };

  return (
    <div className="clap-5 my-5 p-4 max-w-md mx-auto bg-gray-100 rounded-lg shadowssName ">
      <h1 className="text-3xl text-center mb-4">React Evant Handeling</h1>
      <p className="text-center mb-4">
        {isLoggedIn ? "user is already logged in" : "Please press on login"}
      </p>
      <div className="text-center">
        <button
          className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded mr-3"
          onClick={checkLogin}
        >
          Check Login
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded"
          onClick={toggledIn}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
