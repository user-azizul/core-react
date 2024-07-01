import React from "react";
import ReactDOM from "react-dom/client";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ClickCounter />
    <HoverCounter />
  </>
);
