import React from "react";
import ReactDOM from "react-dom";

function Car(props) {
  return (
    <h2>
      I am a {props.brand.car} of model {props.brand.model}!
    </h2>
  );
}

function Garage() {
  const carInfo = { car: "bm", model: 2023 };
  return (
    <div>
      <h2>Who lives in the garage?</h2>
      <Car brand={carInfo} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Garage />);
