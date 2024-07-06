import React, { useState } from "react";

// function Condition(props) {
//   return (
//     <div>{isLoggedIn ? <h1>Welcome</h1> : <h1> Plase login first</h1>}</div>
//   );

//   const isLoggedIn = props.isLoggedIn;
//   return <div>{isLoggedIn && <h1>Welcome back!</h1>}</div>;
// }
// function Condition2() {
//   const [isLoggedIn, setLoggedIn] = useState(true);

//   const toggle = () => {
//     setLoggedIn(!isLoggedIn);
//   };
//   return (
//     <div onClick={toggle} className="text-center text-white mt-5">
//       {isLoggedIn ? (
//         <button type="button" className="bg-red-600 px-3 py-2">
//           Click me to log out
//         </button>
//       ) : (
//         <button type="button" className="bg-green-600 px-3 py-2">
//           Click me to log in
//         </button>
//       )}
//     </div>
//   );
// }

function Condition3() {
  const [showB, setB] = useState(false);
  const [showC, setC] = useState(false);
  const [text, setText] = useState("");

  const InputHandler = (e) => {
    setText(e.target.value);
    setB(true);
    setC(true);
  };

  return (
    <div className="text-center mt-5">
      <input
        type="text"
        className="border-green-500 border-2"
        onChange={InputHandler}
      />
      {showB && <B text={text} />}
      {showC && <C text={text} />}
    </div>
  );
}

function B({ text }) {
  return <h1>Component B - {text.toUpperCase()}</h1>;
}

function C({ text }) {
  return <h1>Component C - {text.toLowerCase()}</h1>;
}

export default Condition3;
