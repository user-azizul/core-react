import React from "react";
// Import the CSS file

function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <nav className="pagination-nav">
      <ul className="pagination-list">
        <li className="pagination-item">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`pagination-button ${
              currentPage === 1 ? "disabled" : ""
            }`}
          >
            Prev
          </button>
        </li>
        {pages.map((item) => (
          <li className="pagination-item" key={item}>
            <button
              onClick={() => paginate(item)}
              className={`pagination-button ${
                item === currentPage ? "active" : ""
              }`}
            >
              {item}
            </button>
          </li>
        ))}
        <li className="pagination-item">
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`pagination-button ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
