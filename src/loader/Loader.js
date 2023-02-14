import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Loader(props) {
    return (
        <div className='loader-div'>

            <Triangle
                height={props.height ? props.height : "180"}
                width={props.width ? props.width : "180"}
                color="#000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
            {props.message ? props.message : ''}
        </div>
    )
}
