import React from "react";
import "./TicTacToe.css";
import UseTicTactoe from "./UseTicTactoe";

const TicTacToe = () => {
  const { board, calculateWinner, handleClick, getStatuesMsg, resetGame } =
    UseTicTactoe();

  const winner = calculateWinner(board); // Determine if there is a winner

  return (
    <div className="gameContainer">
      <div className="status">
        <h3>{getStatuesMsg()}</h3>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((btn, i) => (
          <button
            disabled={btn !== "" || winner !== null} // Disable if the cell is filled or there is a winner
            onClick={() => handleClick(i)}
            className="board-btn"
            key={i}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
