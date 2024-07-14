// import React, { useState } from "react";
// import "./Other.css";

// const AccordionItem = ({ title, content, isOpen, onClick }) => {
//   return (
//     <div className="accordion-item">
//       <div className="accordion-title" onClick={onClick}>
//         <h2>{title}</h2>
//         <span>{isOpen ? "-" : "+"}</span>
//       </div>
//       {isOpen && <div className="accordion-content">{content}</div>}
//     </div>
//   );
// };

// const Accordion = ({ items, multiple }) => {
//   const [openItems, setOpenItems] = useState(multiple ? [] : null);

//   const handleToggle = (index) => {
//     if (multiple) {
//       if (openItems.includes(index)) {
//         setOpenItems(openItems.filter((item) => item !== index));
//       } else {
//         setOpenItems([...openItems, index]);
//       }
//     } else {
//       setOpenItems(openItems === index ? null : index);
//     }
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <AccordionItem
//           key={index}
//           title={item.title}
//           content={item.content}
//           isOpen={multiple ? openItems.includes(index) : openItems === index}
//           onClick={() => handleToggle(index)}
//         />
//       ))}
//     </div>
//   );
// };

// function App() {
//   const [multiple, setMultiple] = useState(true);

//   const toggleMultiple = () => {
//     setMultiple(!multiple);
//   };

//   const accordionItems = [
//     {
//       title: "Section 1",
//       content: "Content of Section 1"
//     },
//     {
//       title: "Section 2",
//       content: "Content of Section 2"
//     },
//     {
//       title: "Section 3",
//       content: "Content of Section 3"
//     }
//   ];

//   return (
//     <div className="App">
//       <h1>Accordion</h1>
//       <button onClick={toggleMultiple}>
//         {multiple
//           ? "Switch to Single Selection"
//           : "Switch to Multiple Selection"}
//       </button>
//       <Accordion items={accordionItems} multiple={multiple} />
//     </div>
//   );
// }

// export default App;

// src/Accordion.js

import React, { useState } from "react";
import { Items } from "./Data";
import "./Other.css";

const Accordion2 = () => {
  const [activeIndices, setActiveIndices] = useState([]);
  const [isMultipleSelection, setIsMultipleSelection] = useState(false);

  const handleToggle = (index) => {
    if (isMultipleSelection) {
      if (activeIndices.includes(index)) {
        setActiveIndices(activeIndices.filter((i) => i !== index));
      } else {
        setActiveIndices([...activeIndices, index]);
      }
    } else {
      setActiveIndices(activeIndices.includes(index) ? [] : [index]);
    }
  };

  const toggleSelectionMode = () => {
    setIsMultipleSelection(!isMultipleSelection);
    setActiveIndices([]); // Reset active indices when mode changes
  };

  return (
    <div className="wrapper">
      <button onClick={toggleSelectionMode}>
        {isMultipleSelection
          ? "Switch to Single Selection"
          : "Switch to Multiple Selection"}
      </button>
      <div className="accordion">
        {Items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              {item.title}
            </button>
            <div
              className={`accordion-content ${
                activeIndices.includes(index) ? "active" : ""
              }`}
            >
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion2;
