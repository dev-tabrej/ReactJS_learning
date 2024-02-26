import React from 'react'
// import { useState } from 'react';

function Button({count,onClick}) {
  
    console.log(onClick)
    return (
      <div>
        <h4>I am a class Component</h4>
        <button onClick={onClick}>Press Me</button>
      
        <p> You Clicked me <b>{count}</b> Times</p>
      </div>
    )
  }
export default Button;
