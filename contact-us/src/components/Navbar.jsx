import React from 'react'
import imageSrc from './images/logo.png'
import NavMenu from './NavMenu'
import "./Navbar.css"
export default function Navbar() {
    return (
        <div className='header'>
            <img src={imageSrc} alt="this is a vite image" srcset="" className='logo' />
            <NavMenu />

        </div>
    )
}
