import React from 'react'
import image from './images/shoe-image.png'

export default function Menu() {
    return (
        <div className='main-view'>
            <div className="text_content">
                <h1>Your feet deserves the best</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>
                <div className="buttons"><button className="btn">Shop Now</button>
                    <button className="btn">Category</button></div>
            </div>
            <div className="image-product"><img src={image} alt="this is a shoe" srcset="" /></div>
        </div>
    )
}
