import React from 'react'
import BgShape from '../bg_shape/BgShape'
// import { motion, useInView } from 'framer-motion'
import { useEffect } from 'react'
import $ from 'jquery'
import triangle_black from '../assets/triangle-black.png'
// import bg_shape_project from '../assets/bg-shape-project.png'
import it from '../assets/projects/it-image.jpg'
import rabee_2022 from '../assets/projects/rabee-2022.jpg'
import gsap from 'gsap'
export default function Projects() {
    const show_proj_info = () => {
        gsap.to('#project-info1', { bottom: 0 })
    }
    const hide_proj_info = () => {
        gsap.to('#project-info1', { bottom: '-100%' })
    }
    const ff = (el, cont, bg_shape) => {
        window.addEventListener("scroll", function () {
            var scrollTop = $(window).scrollTop();
            var elementOffset = cont.offset().top;
            var currentElementOffset = (elementOffset - scrollTop);
            // console.log('currentElementOffset', currentElementOffset)
            if (currentElementOffset < 0) {
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
            else {
                $(el).removeClass('fixed')

            }
        });
    }
    useEffect(() => {
        if (window.innerWidth >= 1200) {
            var el = $('#sectionTitleShape');
            var cont = $('.projects-cont');
            var bg_shape = $('.div-img img');
            ff(el, cont, bg_shape);
        }
    })

    return (
        <div className='projects-cont'>
            <div className='projects-left'>
                <div className='section-title-and-shape' id='sectionTitleShape'
                >
                    <h1 className='projects-title'>PROJECTS</h1>
                    <BgShape src={triangle_black} class_name='img-projects' />
                </div>
                {/* below obj has been added to prevent moving items when change to fixed position */}
                <div className='section-title-and-shape' id='sectionTitleShape-hidden'
                >
                    <h1 className='projects-title'>PROJECTS</h1>
                    <BgShape src={triangle_black} />
                </div>
            </div>

            <div className='projects-right'>
                <div className='project-item' onMouseEnter={show_proj_info} onMouseLeave={hide_proj_info}>
                    <img src={it} alt='cscd' />
                    <div className='project-info' id='project-info1'>
                        <div className='proj-title'>title</div>
                        <div className='proj-technologies'>technologies</div>
                    </div>
                </div>

                <div className='project-item'>
                    <img src={rabee_2022} alt='cscd' />
                </div>

            </div>
        </div>

    )
}
