import { memo } from "react";

const Todo = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div className="text-center my-5 w-40 flex flex-col justify-center item-center mx-auto">
      <h1>My Todos</h1>
      {todos.map((todo, index) => (
        <p className=" mb-2 border-2 border-black text-center" key={index}>
          {todo}
        </p>
      ))}
      <button
        className="bg-red-500 my-3 rounded px-3 py-2"
        onClick={addTodo}
        type="button"
      >
        Add Todo
      </button>
    </div>
  );
};
export default memo(Todo);
