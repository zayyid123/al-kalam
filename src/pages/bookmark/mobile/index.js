import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Bookmark'} back={'/al-kalam'} />
            <h1>Mobile Bookmark</h1>
        </div>
    )
}

export default Mobile