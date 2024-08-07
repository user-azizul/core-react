import React from "react";
import TreeNode from "./TreeApp";
import treeData from "./TreeData";
import "./Tree.css";

const TreeView = () => {
  return (
    <div className="tree-container">
      {treeData.map((node, index) => (
        <TreeNode key={index} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
