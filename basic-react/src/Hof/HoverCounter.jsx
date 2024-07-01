import WithCounter from "./WithCounter";
const HoverCounter = ({ count, increment }) => {
  return (
    <div>
      <h1 onMouseOver={increment}> Mouse get hovered {count}</h1>
    </div>
  );
};
export default WithCounter(HoverCounter);
