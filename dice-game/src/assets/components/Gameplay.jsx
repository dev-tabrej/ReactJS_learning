import React from 'react'
import Navbar from './Navbar';
import Dice from './Dice';
import { useState } from 'react';

export default function Gameplay() {
    let value;
    const [randomNumber, setRandomNumber] = useState(1)


    return (
        <div className='gameplay-container'>
            <Navbar value={value} />
            <Dice randomNumber={randomNumber} setRandomNumber={setRandomNumber} />
        </div>
    )
}
