// import ReactDOM from 'react-dom'

// function Form() {
//     const [name, setName] = useState("");

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       alert(`The name is: ${name}`)
//     }

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>Enter your name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <input type="submit" />
//       </form>
//     )
//   }
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <From />
// )

// form handleing using class component

import React from "react";
import ReactDOM from "react-dom";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      text: "Please write a eassy",
      select: "grapefruit",
      checkbox: true
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submit = (e) => {
    e.preventDefault();
    const { name, text, select, checkbox } = this.state;
    console.log(name, text, select, checkbox);
  };

  render() {
    const { name, text } = this.state;
    return (
      <form onSubmit={this.submit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <br />

        <label>
          Eassy:
          <textarea name="text" value={text} onChange={this.handleChange} />
        </label>
        <br />
        <br />

        <select
          name="select"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <br />
        <br />
        <input type="checkbox" name="checkbox" onChange={this.handleChange} />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(<Form />);
