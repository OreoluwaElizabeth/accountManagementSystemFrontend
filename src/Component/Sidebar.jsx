import React from 'react';
import { BiHome, BiBookAlt, BiSolidReport, BiStats, BiTask } from 'react-icons/bi';
import "./sidebar.css"

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <BiBookAlt className="logo-icon"/>
                <h2>TrackMate</h2>
            </div>
            <div className='menu-list'>
                <a href="#" className='item'>
                    <BiHome className="icon" />
                    Dashboard
                </a>
                <a href="#" className='item'>
                    <BiTask className="icon" />
                    Inventory
                </a>
                <a href="#" className='item'>
                    <BiTask className="icon" />
                    Transaction
                </a>
                <a href="#" className='item'>
                    <BiStats className="icon" />
                    Stats
                </a>
                <a href="#" className='item'>
                    <BiSolidReport className="icon" />
                    Report & Analytics
                </a>
            </div>
        </div>
    )
}

export default Sidebar;