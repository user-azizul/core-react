import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./Rating.css";

function RatingIcon({ icon = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(currentIndex) {
    setRating(currentIndex);
  }

  function handleMouseOver(currentIndex) {
    setHover(currentIndex);
    console.log(currentIndex);
  }

  function handleMouseOut() {
    setHover(rating);
  }

  return (
    <div className="Rating">
      {[...Array(icon)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut()}
          />
        );
      })}
    </div>
  );
}

export default RatingIcon;
