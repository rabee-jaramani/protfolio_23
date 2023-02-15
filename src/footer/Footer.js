import React from 'react'
import logo_dark from '../assets/logo_dark.png'
import logo_light from '../assets/logo_light.png'
import cv from '../assets/my-cv.pdf'

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import useTheme from '../context';
export default function Footer() {
    const theme = useTheme();
    const [footerclass, setFooterclass] = useState('light-footer')
    useEffect(() => {
        console.log('theme', theme.theme)
        theme.theme === 'light' ? setFooterclass('light-footer') : setFooterclass('dark-footer')
    }, [theme.theme])

    return (
        <>
            <div className={`footer-cont ${footerclass}`}>
                <div className='footer-left'>
                    <Link to='/'>
                        {theme.theme === 'light' ? <img width={80} src={logo_dark} alt='imag' /> : <img width={80} src={logo_light} alt='imag' />}
                    </Link>
                    <p style={{ fontSize: '20px' }}>Rabee Aljaramani</p>
                    <p>Web Developer</p>

                </div>

                <div className='footer-right'>
                    <p style={{ fontSize: '20px' }}>Contact</p>
                    <p><i className="fa-solid fa-phone"></i> +971567657124</p>
                    <p><i className="fa-solid fa-envelope"></i> rabeealjaramani@yahoo.com</p>
                    <div className='rabee-links'>
                        <div><a rel="noreferrer" target='_blank' href='https://www.linkedin.com/in/rabee-aljaramani-4b005b193'><i className="fa-brands fa-linkedin-in"></i></a></div>
                        <div><a rel="noreferrer" target='_blank' href='https://github.com/rabeexxxx'><i className="fa-brands fa-github"></i></a></div>
                        <div className='cv-icon'> <a href={cv} target="_blank" className='cv-link' rel="noreferrer" ><i className="fa-solid fa-id-card"></i></a></div>
                    </div>
                </div>
            </div>
            <div className='under-footer' style={{ width: '100%', textAlign: 'center', padding: '15px 10px' }}>Done By Me 2023 <i className="fa-solid fa-face-laugh-wink"></i></div>
        </>
    )
}
