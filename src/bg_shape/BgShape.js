import React from 'react'
import bg_shape from '../assets/bg-test.webp'
export default function BgShape(props) {
    return (
        <div className='div-img'>
            <img id={props.idd} className={`${props.class_name}`} alt='blue-bg' src={props.src ? props.src : bg_shape} />
        </div>
    )
}
