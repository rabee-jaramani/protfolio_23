import React from 'react'
import { useEffect } from 'react'

export default function Project(props) {
    useEffect(() => {
    },)

    return (
        <div
            className='project-item'
            id={`project${props.proj_id}`}
            // show the info section and color the image
            onMouseEnter={() => { props.show_proj_info(`#project-info${props.proj_id}`, `#project-image${props.proj_id}`) }}
            onMouseLeave={() => { props.hide_proj_info(`#project-info${props.proj_id}`, `#project-image${props.proj_id}`) }}
        >
            <img id={`project-image${props.proj_id}`} className='proj-img' src={props.proj_img} alt={`project${props.proj_id}`} />
            <div className='project-info' id={`project-info${props.proj_id}`}>
                <div className='proj-title'>{props.proj_name}</div>
                <div className='proj-technologies'>{props.proj_tech}</div>
                <a className='proj-link' target='_blank' href={props.proj_link} rel="noreferrer">Have a look</a>
            </div>
        </div>
    )
}
