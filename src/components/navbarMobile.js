import React from 'react'
import { Link } from 'react-router-dom'

// img
import darkIcon from '../assets/img/night-mode.png'
import lightIcon from '../assets/img/light-mode.png'
import backIcon from '../assets/icons/back-icon.svg'

// inisialisasi local storage
if (localStorage.getItem('DARKMODE') === undefined) {
    localStorage.setItem('DARKMODE', 'dark')
}

const NavbarMobile = ({ page }) => {
    const [darkMode, setDarkMode] = React.useState(localStorage.getItem('DARKMODE'))

    React.useEffect(() => {
        const root = window.document.documentElement

        if (darkMode === 'dark') {
            root.classList.remove('dark')
            root.classList.add('light')
        } else {
            root.classList.remove('light')
            root.classList.add('dark')
        }
    }, [darkMode])


    const handleMode = () => {
        if (darkMode === 'dark') {
            localStorage.setItem('DARKMODE', 'light')
            setDarkMode(localStorage.getItem('DARKMODE'))
        } else {
            localStorage.setItem('DARKMODE', 'dark')
            setDarkMode(localStorage.getItem('DARKMODE'))
        }
    }

    return (
        <div className='lt:hidden bg-transparent p-3'>
            <div className='flex justify-between items-center'>
                <div>
                    {
                        page !== 'Home' ?
                            <Link to={'/'}>
                                <img className='w-[20px] h-[20px]' src={backIcon} alt='back icon' />
                            </Link>
                            :
                            <></>
                    }
                </div>
                <h1 className='font-bold text-green-800 text-lg'>{page}</h1>
                <div onClick={handleMode}>
                    <img className='w-[30px] h-[30px]' src={darkMode === 'dark' ? lightIcon : darkIcon} alt='icon mode' />
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile