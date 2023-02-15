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
    const [longText, setLongText] = useState(null)
    const [read_more_clicked, setRead_more_clicked] = useState(false)
    const astronomy_picture_of_the_day_fetch = async () => {
        try {
            setApi_error('')
            setLoading(true)
            const response = await fetch(`${url_astronomy_picture_of_the_day}${api_key}`)
            const data = await response.json()
            console.log('data', data)
            setAstronomy_pic_of_the_day_DATA(data)
            setLongText(data.explanation.slice(0, 200))
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setApi_error(error.message)
            console.log('error.message', error.message)
        }
    }
    const ReadMore = () => {
        if (read_more_clicked) {
            setRead_more_clicked(false)
            setLongText(astronomy_pic_of_the_day_DATA.explanation.slice(0, 200))
        } else {
            setRead_more_clicked(true)
            setLongText(astronomy_pic_of_the_day_DATA.explanation)
        }

    }
    return (
        <div className='cool-apis-cont'>
            <h1 className='apis-title'>CHECK BELOW SOME COOL APIs</h1>
            <div className='api-div'>
                <p className='api-title'>NASA Astronomy Picture Of The Day</p>
                <Button disabled={astronomy_pic_of_the_day_DATA ? true : false} onClick={astronomy_picture_of_the_day_fetch} color="primary" variant="contained">Fetch</Button>
                {
                    loading
                        ? <Loader height='70px' width='70px' />
                        :
                        <>
                            <img className='api-img' loading='lazy'
                                src={astronomy_pic_of_the_day_DATA ? astronomy_pic_of_the_day_DATA.url : default_img}
                                alt='imgae'
                            />
                            {
                                astronomy_pic_of_the_day_DATA
                                    ?
                                    <div className='image-info'>
                                        <p><span>Title:</span> {astronomy_pic_of_the_day_DATA.title}</p>
                                        <p><span>Copy Right:</span> {astronomy_pic_of_the_day_DATA.copyright}</p>
                                        <p><span>Date:</span> {astronomy_pic_of_the_day_DATA.date}</p>
                                        <p><a target='_blank' href={astronomy_pic_of_the_day_DATA.hdurl} rel="noreferrer">HD Image</a></p>
                                        <p>
                                            <span>Explanation:</span>
                                            {longText + ' '}
                                            <span
                                                style={{ whiteSpace: 'nowrap' }}
                                                onClick={ReadMore}
                                            >
                                                {read_more_clicked ? 'Read Less' : 'Read More...'}</span>
                                        </p>
                                    </div>
                                    : ''
                            }

                        </>
                }
                <div style={{ color: 'red' }}>{api_error ? 'Server Error' : ''}</div>
            </div>
        </div>
    )
}
