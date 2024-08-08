import React, { useState } from "react";

function UseTicTactoe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const winingPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  function calculateWinner(currentBoard) {
    for (let i = 0; i < winingPatterns.length; i++) {
      const [a, b, c] = winingPatterns[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }
    return null;
  }
  function handleClick(index) {
    const winner = calculateWinner(index);
    if (winner || board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }
  function getStatuesMsg() {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} Wins`;
    if (!board.includes("")) return `Its a draw`;
    return isXNext ? `its X Turns` : `its O Turns`;
  }
  function resetGame() {
    setBoard(Array(9).fill(""));
    setIsXNext(true);
  }
  return {
    board,
    calculateWinner,
    handleClick,
    getStatuesMsg,
    resetGame
  };
}
export default UseTicTactoe;
