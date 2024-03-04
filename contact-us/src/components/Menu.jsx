import React from 'react'
import './Menu.css'
import image from './images/image.png'
import Contact from './Contact'
export default function Menu() {
    return (
        <div className='main-view'>

            <h1 className='title'>Contact us</h1>
            <p className='paragraph'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA</p>
            <div className="form-container">
                <Contact />
                <img src={image} alt="" className='lady-image' />

            </div>
        </div>
    )
}
