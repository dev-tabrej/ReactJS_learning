import React, { useState } from 'react'
import '../../App.css'

export default function Navbar({ score, seletedNumber, setSelectedNumber, setError, error }) {

    console.log("selected Number", seletedNumber)
    let diceArray = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("")
    }
    return (
        <div className="navbar">
            <div className="nav-left">
                <h1 className="score">{score}</h1>
                <h3>Total Score</h3>
            </div>
            <div className="nav-right">
                <p className='error'>{error}</p>

                <ul>
                    {diceArray.map((value, i) => (
                        <li key={i}
                            onClick={() => { numberSelectorHandler(value) }}
                            className={(value === seletedNumber) ? 'selected' : ''}>{value}</li>
                    ))}
                </ul>
                <h3>Select Number</h3>

            </div>
        </div>

    )
}
