import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C] dark:text-white'>
            <NavbarMobile page={'Profile'} back={'/al-kalam'} />
            Mobile Profile
        </div>
    )
}

export default Mobile