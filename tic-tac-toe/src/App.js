import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",])
  return (
    <div className="app">
      <div className="board-wrapper">
        <div className="board-row">
          <Square val={board[0]} />
          <Square val={board[1]} />
          <Square val={board[2]} />
        </div>
        <div className="board-row">
          <Square val={board[3]} />
          <Square val={board[4]} />
          <Square val={board[5]} />
        </div>
        <div className="board-row">
          <Square val={board[6]} />
          <Square val={board[7]} />
          <Square val={board[8]} />
        </div>
      </div>
    </div>
  );
}

export default App;
