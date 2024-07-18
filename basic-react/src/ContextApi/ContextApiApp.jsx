import React, { useState } from "react";
import { MyComponent, MyContext } from "./basic";

function ContextApiApp() {
  const [text, setText] = useState("");
  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <MyComponent />
      </MyContext.Provider>
    </div>
  );
}

export default ContextApiApp;
