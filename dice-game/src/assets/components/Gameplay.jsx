import React from 'react'
import Navbar from './Navbar';
import Dice from './Dice';
import { useState } from 'react';

export default function Gameplay() {
    const [randomNumber, setRandomNumber] = useState(1)
    const [seletedNumber, setSelectedNumber] = useState();
    const [score, setScore] = useState(0)
    const [error, setError] = useState("")
    const [showRules, setShowRules] = useState(false);
    const rollDice = () => {
        if (!seletedNumber) {
            setError("Select a Number First.")
            return
        }

        setRandomNumber(Math.floor(Math.random() * 6 + 1))
        if (seletedNumber === randomNumber) {
            setScore(prev => prev + randomNumber)
        }
        else
            setScore(prev => prev - 2)
        setSelectedNumber(undefined)
    }
    return (
        <div className='gameplay-container'>
            <Navbar
                seletedNumber={seletedNumber}
                setSelectedNumber={setSelectedNumber}
                score={score}
                setError={setError}
                error={error}
            />
            <Dice randomNumber={randomNumber}
                setRandomNumber={setRandomNumber}
                rollDice={rollDice}
                setScore={setScore}
                showRules={showRules}
                setShowRules={setShowRules}
            />
        </div>
    )
}
