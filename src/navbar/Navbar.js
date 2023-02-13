import React from 'react'
import $ from 'jquery';
import logo_dark from '../assets/logo_dark.png'
import { Link } from 'react-router-dom';
import { DarkSwitcher } from '../mui_components/DarkSwitcher';
import { useState } from 'react';
import useTheme from '../context';
export default function Navbar(props) {
    const [menu_opened, setMenu_opened] = useState(false)
    const theme = useTheme()
    const openMenu = (nav_icon) => {
        if (!menu_opened) {
            $(nav_icon).addClass("open")
            $('#menu').addClass("show")
            setMenu_opened(true)
        }
        else {
            $(nav_icon).removeClass("open")
            $('#menu').removeClass("show")
            setMenu_opened(false)
        }
    }

    return (
        <>
            <div className={'navbar-cont'}>
                <div className='logo-div'>
                    <Link to='/'><img src={logo_dark} alt='imag' /></Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div onClick={() => openMenu('#nav-icon1')} id="nav-icon1" className='navbar'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    <DarkSwitcher />
                </div>
            </div >

            {/* sticky navbar */}
            <div className={'navbar-cont second-navbar'}
                style={theme.theme === 'light' ? { backgroundColor: '#fff' } : { backgroundColor: '#000' }}>
                <div className='logo-div'>
                    <Link to='/'><img src={logo_dark} alt='imag' /></Link>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div onClick={() => openMenu('#nav-icon2')} id="nav-icon2" className='navbar'>
                        <span className='bar'></span>
                        <span className='bar'></span>
                        <span className='bar'></span>
                    </div>
                    <DarkSwitcher />
                </div>
            </div >
        </>
    )
}
