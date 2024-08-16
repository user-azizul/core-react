// src/App.js
import React, { useState } from "react";
import Pagination from "./Pagination";
import "./pagination.css";

const App = () => {
  const items = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  console.log(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="app-container">
      <h1>React Pagination Example</h1>
      <ul className="list-group mb-4">
        {currentItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={items.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
