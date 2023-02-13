import React from 'react'
import { Triangle } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className='loader-div'>
            <Triangle
                height="180"
                width="180"
                color="#000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
    )
}
