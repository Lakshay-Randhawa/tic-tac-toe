import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Square from "./Components/Square";

function App() {
  const [board, setBoard] = useState(["","","","","","","","","",])
  const [player, setPlayer] = useState('X');

  useEffect(()=>{

    // Changing player after turn
    player === 'X' ? setPlayer('O') : setPlayer('X')
    console.log('player changed')
  }, [board])
 
   const move = (square) => {   
     
    // Change the square value
    console.log(square)

    setBoard(
      board.map((val,indx)=>{
        
        if(square === indx)
            return player
      } )
    )

  }
  return (
    <div className="app">
      <div className="board-wrapper">
        <div className="board-row">
          <Square val={board[0]} handleClick={()=> move(0)} />
          <Square val={board[1]} handleClick={()=> move(1)} />
          <Square val={board[2]} handleClick={()=> move(2)} />
        </div>
        <div className="board-row">
          <Square val={board[3]} handleClick={()=> move(3)} />
          <Square val={board[4]} handleClick={()=> move(4)} />
          <Square val={board[5]} handleClick={()=> move(5)} />
        </div>
        <div className="board-row">
          <Square val={board[6]} handleClick={()=> move(6)} />
          <Square val={board[7]} handleClick={()=> move(7)} />
          <Square val={board[8]} handleClick={()=> move(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
