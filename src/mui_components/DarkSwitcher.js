import * as React from 'react';
import useTheme from '../context'


export const DarkSwitcher = () => {
    const theme = useTheme();
    const toggleTheme = () => {
        theme.theme === 'light' ? theme.ThemeToDark('dark') : theme.ThemeToLight('light')

    }
    return (
        <div style={{ cursor: 'pointer' }}>
            {theme.theme === 'light' ? <i style={{ fontSize: '25px ' }} className="fa-solid fa-moon" onClick={toggleTheme}></i> :
                <i style={{ fontSize: '25px', color: '#fff' }} className="fa-solid fa-sun" onClick={toggleTheme}></i>
            }


        </div>
    );
}