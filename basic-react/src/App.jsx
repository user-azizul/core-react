// function App({ props }) {
//   return (
//     <center>
//       <h1> {new Date().toLocaleTimeString(props)}</h1>
//     </center>
//   );
// }

// class App extends React.Component {
//   render() {
//     return (
//       <center>
//         <h1> {new Date().toLocaleTimeString(this.props.locale)}</h1>
//       </center>
//     );
//   }
// }

import Login from "./ReactEvents/ReactCounter";

function App() {
  return <Login />;
}
export default App;
