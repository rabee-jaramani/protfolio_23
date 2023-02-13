import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
import useTheme from '../context';


export default function Menu() {
    const theme = useTheme()
    // const [dark, setDark] = useState('')
    const openMenu = () => {
        $('#nav-icon1').toggleClass("open");
        $("#menu").toggleClass("show");
        console.log('Toglleeeeeee')
    }
    return (
        <div onClick={openMenu} className={`menu-cont ${theme.theme}`} id='menu'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
            <div>Home</div>
        </div>
    )
}
