import React, { useState } from 'react'
import '../../App.css'

export default function Navbar({ value }) {
    const [seletedNumber, setSelectedNumber] = useState();
    // console.log(seletedNumber)
    let diceArray = [1, 2, 3, 4, 5, 6];
    return (
        <div className="navbar">
            <div className="nav-left">
                <h1 className="score">{value ? value : 0}</h1>
                <h3>Total Score</h3>
            </div>
            <div className="nav-right">
                <ul>
                    {diceArray.map((value, i) => (
                        <li key={i}
                            onClick={() => (setSelectedNumber(value))}
                            className={(value === seletedNumber) ? 'selected' : ''}>{value}</li>
                    ))}
                </ul>
                <h3>Select Number</h3>

            </div>
        </div>

    )
}
