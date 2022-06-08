import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#DCE1C4]'>
            <NavbarMobile page={'Bookmark'} />
            <h1>Mobile Bookmark</h1>
        </div>
    )
}

export default Mobile