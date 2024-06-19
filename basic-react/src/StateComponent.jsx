import React from "react";
import ReactDOM from "react-dom";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "While",
      brand: "BMW",
      model: 2023
    };
  }
  changeColor = () => {
    this.setState({ color: "blue" });
  };
  render() {
    const { color, brand, model } = this.state;
    return (
      <div>
        <p>car color {color}</p>
        <p>car brand {brand}</p>
        <p>car model {model}</p>
        <button type="button" onClick={this.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Car />);
