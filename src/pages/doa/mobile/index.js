import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

const Mobile = () => {
    return (
        <div className='lt:hidden min-h-full w-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C] dark:text-white'>
            <NavbarMobile page="Du'a" back='/' />
            Mobile
        </div>
    )
}

export default Mobile