import React, { useState } from 'react'
import Board from './Board';


export default function Game() {
  const [xTurn, setXTurn] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)])
  const [currentMove, setCurrentMove] = useState(0)
  console.log(history)
  const currentSquares = history[currentMove]
  console.log("This is  Current array ", currentSquares)


  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // console.log(history,nextSquares)
    setXTurn(!xTurn);
  };

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXTurn(nextMove % 2 === 0)
  }
  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = `move to step ${move + 1}`
    }
    else {
      description = `Start a New game`;
    }
    return <li key={move}><button onClick={() => jumpTo(move)}>{description}</button></li>
  })
  return (
    <div>
      <Board xTurn={xTurn} onPlay={handlePlay} squares={currentSquares} />
      <ol>{moves}</ol>
    </div>
  )
}
