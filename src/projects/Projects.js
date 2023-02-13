import React from 'react'
import BgShape from '../bg_shape/BgShape'
import { useEffect } from 'react'
import $ from 'jquery'
import triangle_black from '../assets/triangle-black.png'
import gsap from 'gsap'
import Project from './Project'
import project_list from './projects-list';
export default function Projects(props) {
    const show_proj_info = (project_info_id, project_image_id) => {
        gsap.to(project_info_id, { bottom: 0 })
        gsap.to(project_image_id, { filter: 'grayscale(0)' })
    }
    const hide_proj_info = (project_info_id, project_image_id) => {
        gsap.to(project_info_id, { bottom: '-100%' })
        gsap.to(project_image_id, { filter: 'grayscale(100%)' })
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
                    onMouseEnter={props.on_Mouse_Enter} onMouseLeave={props.on_Mouse_Leave}
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
                {project_list.map((el) => {
                    return <Project
                        key={el.proj_id}
                        proj_id={el.proj_id}
                        proj_img={el.proj_img}
                        proj_name={el.proj_name}
                        proj_tech={el.proj_tech}
                        proj_link={el.proj_link}
                        show_proj_info={show_proj_info}
                        hide_proj_info={hide_proj_info}
                    />
                })}

            </div>
        </div>

    )
}
