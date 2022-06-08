import React from 'react'
import { Link } from 'react-router-dom'

// img
import darkIcon from '../assets/img/night-mode.png'
import lightIcon from '../assets/img/light-mode.png'
import backIcon from '../assets/icons/back-icon.svg'

const NavbarMobile = ({ page }) => {
    const [dark, setDark] = React.useState(false)

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
                <div>
                    {
                        dark ? <img className='w-[30px] h-[30px]' src={lightIcon} alt='light icon' /> : <img className='w-[30px] h-[30px]' src={darkIcon} alt='dark icon' />
                    }
                </div>
            </div>
        </div>
    )
}

export default NavbarMobile