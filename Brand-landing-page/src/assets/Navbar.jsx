import React from 'react'
import imageSrc from './images/nike-logo.png'
import NavMenu from './NavMenu'
export default function Navbar() {
    return (
        <div className='header'>
            <img src={imageSrc} alt="this is a vite image" srcset="" className='logo' />
            <NavMenu />
            <button className='btn btn-login'>Login</button>

        </div>
    )
}
