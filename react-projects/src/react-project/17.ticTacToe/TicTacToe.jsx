import React from "react";
import { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  console.log(board);

  return (
    <div className="gameContainer">
      <div className="status">
        <h3>Player X Turn</h3>
        <button>Reset Game</button>
      </div>
      <div className="board">
        {board.map((_, i) => (
          <button className="board-btn" key={i}>
            x
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
