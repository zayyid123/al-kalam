import React from 'react'
import { Link } from 'react-router-dom'

// img
import darkIcon from '../assets/img/night-mode.png'
import lightIcon from '../assets/img/light-mode.png'
import backIconHijau from '../assets/icons/back-icon_hijau.svg'
import backIconPutih from '../assets/icons/back-icon_putih.svg'

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
            window.location.reload()
        } else {
            localStorage.setItem('DARKMODE', 'dark')
            setDarkMode(localStorage.getItem('DARKMODE'))
            window.location.reload()
        }
    }

    return (
        <div className='lt:hidden bg-transparent p-3'>
            <div className='flex justify-between items-center'>
                <div>
                    {
                        page !== 'Al-Kalam' ?
                            <Link to={'/'}>
                                <img className='w-[20px] h-[20px] ' src={darkMode === 'dark' ? backIconHijau : backIconPutih} alt='back icon' />
                            </Link>
                            :
                            <img className='w-[20px] h-[20px] opacity-0 ' src={darkMode === 'dark' ? backIconHijau : backIconPutih} alt='back icon' />
                    }
                </div>
                <h1 className='font-bold text-green-800 dark:text-white text-lg'>{page}</h1>
                <div onClick={handleMode}>
                    <img className='w-[30px] h-[30px]' src={darkMode === 'dark' ? lightIcon : darkIcon} alt='icon mode' />
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile