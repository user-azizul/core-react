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

// import ContextApiApp from "./ContextApi/ContextApiApp";
import ContextApp from "./ContextApi/SimplePorject/ContextApp";
// import UseEffectHook from "./Hooks/UseEffectHook";
function App() {
  return <ContextApp />;
}
export default App;
