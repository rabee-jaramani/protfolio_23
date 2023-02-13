import React from 'react'
import bg_shape from '../assets/bg-test.png'
export default function BgShape(props) {
    return (
        <div className='div-img'>
            <img className={`${props.class_name}`} alt='blue-bg' src={props.src ? props.src : bg_shape} />
        </div>
    )
}
