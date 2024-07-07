import Todo from "./Todo";
import { useCallback, useState } from "react";

const UiTodo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  //   this add todo will render when we will call increment function also
  //   const addTodo = () => {
  //     setTodos((t) => [...t, "New Todo"]);
  //   };
  // use useCallback instead
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);
  const increment = () => {
    setCount((count) => count + 1);
  };
  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <div className="text-center">
        Count: {count}
        <button className="bg-gray-200 p-2 rounded" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
};
export default UiTodo;
