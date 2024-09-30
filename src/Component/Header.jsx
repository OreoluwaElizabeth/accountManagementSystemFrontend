import React from 'react';
import "./header.css"

const Header = () => {
    return (
        <header className='header'>
            <ul>
                <li><a href="/sidebar">Home</a></li>
                <li><a href="/about">About us</a></li>
                <li><a href="/contact">Contact us</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/email">Sign up</a></li>
            </ul>
        </header>
    )
}

export default Header;