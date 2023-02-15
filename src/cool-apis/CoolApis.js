import { Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import default_img from './default-img.jpg'
import Loader from "../loader/Loader";

export default function CoolApis() {

    const url_astronomy_picture_of_the_day = 'https://api.nasa.gov/planetary/apod?api_key='
    const api_key = 'CS8KG2hg2TGSvgG4AIdELtSRri0gtLbhbeuWX1wg'
    const [astronomy_pic_of_the_day_DATA, setAstronomy_pic_of_the_day_DATA] = useState(null)
    const [loading, setLoading] = useState(false)
    const [api_error, setApi_error] = useState('')
    const astronomy_picture_of_the_day = async () => {
        try {
            setApi_error('')
            setLoading(true)
            const response = await fetch(`${url_astronomy_picture_of_the_day}${api_key}`)
            const data = await response.json()
            console.log('data', data)
            setAstronomy_pic_of_the_day_DATA(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setApi_error(error.message)
            console.log('error.message', error.message)
        }
    }
    return (
        <div className='cool-apis-cont'>
            <h1 className='apis-title'>CHECK BELOW SOME COOL APIs</h1>
            <div className='api-div'>
                <p className='api-title'>NASA Astronomy Picture Of The Day</p>
                <Button disabled={astronomy_pic_of_the_day_DATA ? true : false} onClick={astronomy_picture_of_the_day} color="primary" variant="contained">Fetch</Button>
                {
                    loading
                        ? <Loader height='70px' width='70px' />
                        : <img className='api-img'
                            src={astronomy_pic_of_the_day_DATA ? astronomy_pic_of_the_day_DATA.hdurl : default_img}
                            alt='imgae'
                        />
                }
                <div style={{ color: 'red' }}>{api_error ? 'Server Error' : ''}</div>
            </div>
        </div>
    )
}
