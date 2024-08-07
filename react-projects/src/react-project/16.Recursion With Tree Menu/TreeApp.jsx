import React, { useState } from "react";

const TreeNode = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren =
    node.type === "folder" && node.children && node.children.length > 0;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ marginLeft: 20 }}>
      <div onClick={toggleOpen} style={{ cursor: "pointer" }}>
        {node.type === "folder" ? (isOpen ? "📂" : "📁") : "📄"}
        {node.name}
      </div>
      {hasChildren && isOpen && (
        <div>
          {node.children.map((child, index) => (
            <TreeNode key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;
