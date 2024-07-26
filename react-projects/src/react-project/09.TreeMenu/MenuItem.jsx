import React, { useState } from "react";
import MenuList from "./MenuList";

function MenuItem({ items }) {
  const [displayLabel, setDisplayLabel] = useState({});
  function toggleDisplay(label) {
    setDisplayLabel((prev) => ({ ...prev, [label]: !prev[label] }));
  }
  const displayItems = displayLabel[items.label] || false;
  return (
    <li className={`ml-${items.children ? 4 : 0} mb-2 `}>
      <div className="flex items-center gap-4 cursor-pointer">
        <p className=" font-semibold text-white-500">* {items.label}</p>
        {items && items.children ? (
          <span
            className="text-white-500 hover:text-orange-700"
            onClick={() => toggleDisplay(items.label)}
          >
            {displayItems ? "-" : "+"}
          </span>
        ) : null}
      </div>

      {items && items.children && displayItems ? (
        <ul className="pl-6">
          {items.children.map((child, index) => (
            <MenuItem key={index} items={child} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default MenuItem;
