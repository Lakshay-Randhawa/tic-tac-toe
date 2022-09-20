import { useDebugValue, useEffect, useState } from "react";
import "./App.css";
import Square from "./Components/Square";

function App() {
  const boardIntitialState = ["", "", "", "", "", "", "", "", ""];

  const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(boardIntitialState);
  const [player, setPlayer] = useState("O");
  const [isTie, setTie] = useState(false);
  const [score, setScore] = useState({ X: 0, O: 0 });

  useEffect(() => {
    checkWin();

    // Checking if it's a tie
    !board.includes("") ? setTie(true) : setTie(false);

    if (isTie) resetGame();

    // Changing player after turn
    player === "X" ? setPlayer("O") : setPlayer("X");
  }, [board]);

  useEffect(() => {
    console.log(score);
  }, [score]);

  const move = (square) => {
    setBoard(
      board.map((val, indx) => {
        if (square === indx && val === "") return player;

        return val;
      })
    );
  };

  const checkWin = () => {
    patterns.forEach((pattern) => {
      const [s1, s2, s3] = pattern;

      if (board[s1] === "" || board[s2] === "" || board[s3] === "") return;

      if (board[s1] === board[s2] && board[s2] === board[s3]) {
        board[s1] === "X"
          ? setScore({ ...score, X: { ...score }.X + 1 })
          : setScore({ ...score, O: { ...score }.O + 1 });
        resetGame();
      }
    });
  };

  const resetGame = () => {
    setBoard(boardIntitialState);
    setPlayer("O");
  };
  return (
    <div className="app">
      <div className="board-wrapper">
        <div className="board-row">
          <Square val={board[0]} handleClick={() => move(0)} />
          <Square val={board[1]} handleClick={() => move(1)} />
          <Square val={board[2]} handleClick={() => move(2)} />
        </div>
        <div className="board-row">
          <Square val={board[3]} handleClick={() => move(3)} />
          <Square val={board[4]} handleClick={() => move(4)} />
          <Square val={board[5]} handleClick={() => move(5)} />
        </div>
        <div className="board-row">
          <Square val={board[6]} handleClick={() => move(6)} />
          <Square val={board[7]} handleClick={() => move(7)} />
          <Square val={board[8]} handleClick={() => move(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
