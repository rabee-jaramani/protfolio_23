import React from 'react'
import BgShape from '../bg_shape/BgShape'
import triangle_black from '../assets/triangle-black.png'
import MyForm from './MyForm'
// import gsap from 'gsap'
export default function ContactM(props) {

    return (
        <div className='contact-cont'>
            <div className='projects-left'>
                <div className='section-title-and-shape' id='sectionTitleShape-contact' style={{ opacity: 1, marginTop: '50px' }}
                    onMouseEnter={props.on_Mouse_Enter} onMouseLeave={props.on_Mouse_Leave}
                >
                    <h1 className='projects-title'>Holla! ,Hit me up</h1>
                    <BgShape src={triangle_black} />
                </div>
            </div>

            <div className='contact-right'>
                <div id="end-of-contact" style={{ width: '100%', height: '1px' }}></div>
                <MyForm />
            </div>
        </div>

    )
}


