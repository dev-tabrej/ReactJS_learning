import React from 'react'
import Navbar from './Navbar';
import Dice from './Dice';

export default function Gameplay() {
    let value;
    return (
        <div className='gameplay-container'>
            <Navbar value={value} />
            <Dice />
        </div>
    )
}
