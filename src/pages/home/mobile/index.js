import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Al-Kalam'} />

            {/* last read */}
            <div>
                <div>
                    <p>Last Read</p>
                    <br />
                    <h1>Ar-Rahman</h1>
                    <p>Verse No.1</p>
                    <p>Go to {'>'}</p>
                </div>
            </div>
        </div>
    )
}

export default Mobile