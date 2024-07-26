import React from "react";
import MenuItem from "./MenuItem";

function MenuList({ list = [] }) {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem) => (
            <MenuItem key={list.length} items={listItem} />
          ))
        : null}
    </ul>
  );
}

export default MenuList;
