import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",])
  const [player, setPlayer] = useState('X');
 
  const handleClick = () => {     
     player === 'X' ? setPlayer('O') : setPlayer('X')
     alert(player)
  }
  return (
    <div className="app">
      <div className="board-wrapper">
        <div className="board-row">
          <Square val={board[0]} handleClick={handleClick} />
          <Square val={board[1]} handleClick={handleClick} />
          <Square val={board[2]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square val={board[3]} handleClick={handleClick} />
          <Square val={board[4]} handleClick={handleClick} />
          <Square val={board[5]} handleClick={handleClick} />
        </div>
        <div className="board-row">
          <Square val={board[6]} handleClick={handleClick} />
          <Square val={board[7]} handleClick={handleClick} />
          <Square val={board[8]} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
