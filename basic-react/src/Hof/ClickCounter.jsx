import WithCounter from "./WithCounter";
const ClickCount = ({ count, increment }) => {
  return (
    <div>
      <button type="button" onClick={increment}>
        {" "}
        Get Clicked {count} time
      </button>
    </div>
  );
};
export default WithCounter(ClickCount);
