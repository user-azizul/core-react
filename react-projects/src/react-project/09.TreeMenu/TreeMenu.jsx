import React from "react";
import MenuList from "./MenuList";

function TreeMenu({ menus = [] }) {
  return (
    <div className="tree-view-container">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeMenu;
