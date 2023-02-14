import React from 'react'
import BgShape from '../bg_shape/BgShape'
import { useEffect } from 'react'
import $ from 'jquery'
import triangle_black from '../assets/triangle-black.png'
// import gsap from 'gsap'
export default function ContactM(props) {

    const ff = (el, cont, bg_shape, end_of_section) => {
        window.addEventListener("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var elementOffset = cont.offset().top;
            var currentElementOffset = (elementOffset - scrollTop);
            var end_of_section_from_top = $(end_of_section).offset().top - scrollTop;
            console.log('end_of_section_from_top', end_of_section_from_top)

            // console.log('currentElementOffset', currentElementOffset)
            if (currentElementOffset < 0) {
                if (end_of_section_from_top < 500) {
                    console.log('Hide the Triangle')
                    $(el).addClass('position-absolute-bottom-0')
                    $(el).removeClass('fixed')
                }
                else {
                    $(el).removeClass('position-absolute-bottom-0')
                    $(el).addClass('fixed')
                    $(el).animate({
                        opacity: 1,
                    }, 500);
                    $(bg_shape).animate(
                        { deg: 390 },
                        {
                            duration: 1200,
                            step: function (now) {
                                $(this).css({ transform: 'rotate(' + now + 'deg)' });
                            }
                        });
                }
            }
            else {
                $(el).removeClass('fixed')
            }
        });
    }
    useEffect(() => {
        if (window.innerWidth >= 1200) {
            var el = $('#sectionTitleShape-contact');
            var cont = $('#contact-cont');
            var bg_shape = $('.div-img img');
            var end_of_section = $('#end-of-contact');
            ff(el, cont, bg_shape, end_of_section);
        }
    })

    return (
        <div className='projects-cont' id='contact-cont'>
            <div className='projects-left'>
                <div className='section-title-and-shape' id='sectionTitleShape-contact'
                    onMouseEnter={props.on_Mouse_Enter} onMouseLeave={props.on_Mouse_Leave}
                >

                    <h1 className='projects-title'>CONTACT</h1>
                    <BgShape src={triangle_black} class_name='img-projects' idd={'bg-shape-contact'} />
                </div>
                {/* below obj has been added to prevent moving items when change to fixed position */}
                <div className='section-title-and-shape' id='sectionTitleShape-hidden'
                >
                    <h1 className='projects-title'>CONTACT</h1>
                    <BgShape src={triangle_black} />
                </div>
            </div>

            <div className='projects-right'>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <h1>GGGGGGGGGGGG</h1>
                <div id="end-of-contact" style={{ width: '100%', height: '1px' }}></div>
            </div>
        </div>

    )
}
