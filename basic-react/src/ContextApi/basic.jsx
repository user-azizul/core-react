import { createContext } from "react";

export const MyContext = createContext("");

import { useContext } from "react";

export function MyComponent() {
  const { text, setText } = useContext(MyContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "10px",
        fontWeight: "bold"
      }}
    >
      <h1>{text}</h1>
      <button
        style={{
          border: "1px solid #666",
          padding: "10px 20px"
        }}
        onClick={() => setText("Button Got Clicked")}
      >
        Click me
      </button>
    </div>
  );
}
