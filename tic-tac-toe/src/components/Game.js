import React, { useState } from 'react'
import Board from './Board';


export default function Game() {
    const [xTurn,setXTurn]=useState(true);
    const [history,setHistory]=useState([Array(9).fill(null)])
    const currentSquares=history[history.length -1]
    // console.log(currentSquares)


    function handlePlay(nextSquares){
        setHistory([...history, nextSquares]);
        // console.log(history,nextSquares)
        setXTurn(!xTurn);
    };
  return (
    <div>
      <Board xTurn={xTurn} onPlay={handlePlay} squares={currentSquares}/>
    </div>
  )
}
