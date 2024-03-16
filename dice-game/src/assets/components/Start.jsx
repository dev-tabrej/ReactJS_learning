import React from 'react'
import styled from 'styled-components'
import startImage from './images/start-image.png'

// const Start =    
export default function Start({ toggle }) {
    return (
        <div className='start-container'>
            <img src={startImage} alt="" />
            <div className="start-game">
                <h1>DICE GAME</h1>
                <button className="start-button" onClick={toggle}>Play now</button>
            </div>
        </div>
    )
}
