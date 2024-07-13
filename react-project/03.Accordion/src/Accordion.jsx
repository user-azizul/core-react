import { useState } from "react";
import Data from "./Data";
import "./Accordion.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMulti, steEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const handleSelection = (currentId) => {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  };
  const handleMulti = (currentId) => {
    let copyMultiple = [...multiple];
    const findIndexOf = copyMultiple.indexOf(currentId);
    if (findIndexOf === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOf, 1);
    setMultiple(copyMultiple);
  };

  return (
    <div className="wrapper">
      <button onClick={() => steEnableMulti(!enableMulti)}>
        {" "}
        Enable Multi Selection
      </button>
      <div className="accordion">
        {" "}
        {Data && Data.length > 0 ? (
          Data.map((item) => (
            <div
              className="item"
              onClick={() =>
                enableMulti ? handleMulti(item.id) : handleSelection(item.id)
              }
              key={item.id}
            >
              <div className="title">
                <h3> {item.question} </h3>
                <span>+</span>
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">{item.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> Data Not Found </div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
