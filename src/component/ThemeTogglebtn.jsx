import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeTogglebtn = ({ theme, setTheme }) => {
    useEffect (()=>{
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        //prefersDarkMode it is for if our devide mode is dark then we get true and vice versa
        setTheme(theme || (prefersDarkMode ? 'dark' : 'light'));
    },[])
//here we used the empty array[] so it execute the function only once
    useEffect (()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }
        else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme',theme)
    },[theme])
    // here whwnever the theme changes this function executes
    return (
        <>
            <button>
                {theme === 'dark' ? (
                    <img onClick={() => setTheme('light')} src={assets.sun_icon} className='size-8.5 p-1.5 border border-gary-500 rounded-full' alt="" />
                ) : (
                    <img onClick={() => setTheme('dark')} src={assets.moon_icon} className='size-8.5 p-1.5 border border-gary-500 rounded-full' alt="" />
                )}
            </button>
        </>
    )
}

export default ThemeTogglebtn
