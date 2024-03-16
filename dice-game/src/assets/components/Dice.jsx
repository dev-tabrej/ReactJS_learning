import React from 'react'
import dice1 from "./images/1.png";
import dice2 from "./images/2.png";
import dice3 from "./images/3.png";
import dice4 from "./images/4.png";
import dice5 from "./images/5.png";
import dice6 from "./images/6.png";

let dices = [dice1, dice2, dice3, dice4, dice5, dice6];
export default function Dice() {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    console.log(randomNumber);
    return (
        <div className='dice-container'>
            <img src={dices[randomNumber]} alt="" />
            <h3>click on dice to roll</h3>
            <button className="btn btn-score">
                Reset Score
            </button>
            <button className="btn btn-rules">
                Show Rules
            </button>
        </div>
    )
}
