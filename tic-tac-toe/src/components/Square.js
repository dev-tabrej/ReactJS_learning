import React from 'react';

export default function Square({ value, onSquareClick }) {
  return <button className="columb" onClick={onSquareClick} style={{ color: value === "X" ? "red" : "blue", fontSize: "2.5rem" }}>{value}</button>;
}