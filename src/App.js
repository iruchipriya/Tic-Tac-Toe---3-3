import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsx] = useState(true);

  const renderButton = (index) => {
    return (
      <button className="square" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const handleClick = (index) => {
    const newBoard = [...board];
    if (calculateWinner(board) || newBoard[index]) {
      return;
    }
    newBoard[index] = isX ? 'X' : 'O';
    setBoard(newBoard);
    setIsx(!isX);
  };

  const calculateWinner = (board) => {
    const op = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < op.length; i++) {
      const [a, b, c] = op[i];
      if (board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsx(true);
  };

  return (
    <div className="container">
      <h2 className="tictactoe"> Tic Tac Toe</h2>
      <button className="turn" onClick={handleReset}>
        Reset
      </button>
      <div className="turn"> Now, turn is of {isX ? 'X' : 'O'}</div>
      <div className="board">
        {renderButton(0)}
        {renderButton(1)}
        {renderButton(2)}
        {renderButton(3)}
        {renderButton(4)}
        {renderButton(5)}
        {renderButton(6)}
        {renderButton(7)}
        {renderButton(8)}
      </div>

      <div className="status"> Winner is {calculateWinner(board)}</div>
    </div>
  );
}
