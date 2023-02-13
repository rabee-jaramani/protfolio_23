import React from 'react'
import $ from 'jquery';
import logo_dark from '../assets/logo_dark.png'
import { Link } from 'react-router-dom';
import { DarkSwitcher } from '../mui_components/DarkSwitcher';
import { useState } from 'react';
export default function Navbar() {
    const [menu_opened, setMenu_opened] = useState(false)

    const openMenu = () => {
        if (!menu_opened) {
            $('#nav-icon1').addClass("open")
            $('#menu').addClass("show")
            setMenu_opened(true)
        }
        else {
            $('#nav-icon1').removeClass("open")
            $('#menu').removeClass("show")
            setMenu_opened(false)
        }
    }
    return (
        <div className='navbar-cont'>
            <div className='logo-div'>
                <Link to='/'><img src={logo_dark} alt='imag' /></Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div onClick={openMenu} id="nav-icon1" className='navbar'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
                <DarkSwitcher />

            </div>

        </div >
    )
}
