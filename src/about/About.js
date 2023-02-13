import React, { useEffect } from 'react'
import useTheme from '../context'

export default function About() {
    const theme = useTheme()
    useEffect(() => {
        console.log('temem', theme)
    }, [theme])

    return (
        <div>
            <h1>Theme is {theme.theme}</h1>
            <h2 onClick={() => { theme.ThemeToLight("light") }}>clickkck</h2>
            About
        </div>
    )
}
