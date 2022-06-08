import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'

// img
import lastRead from '../../../assets/img/last-read.png'
import quran from '../../../assets/img/quran.png'
import quran2 from '../../../assets/img/quran2.png'
import quran3 from '../../../assets/img/quran3.png'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Al-Kalam'} />

            {/* quran */}
            <div className='flex justify-center items-center'>
                <img className='w-[100px] ' src={quran} alt='icon quran' />
            </div>

            {/* last read */}
            <div className='flex justify-between items-center drop-shadow-2xl bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] mx-4 p-3 rounded-3xl'>
                <div>
                    <p className='font-thin text-xs text-gray-300 mb-3'>Last Read</p>
                    <h1 className='font-semibold text-white text-sm'>Ar-Rahman</h1>
                    <p className='font-thin text-xs text-gray-300 '>Verse No.1</p>
                    <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                </div>
                <div>
                    <img className='w-[70px] h-[70px]' src={lastRead} alt='icon last read' />
                </div>
            </div>

            {/* all */}
            <div className='grid grid-cols-2 gap-4 m-4'>
                {/* quran */}
                <div className='bg-gradient-to-b from-[#3295ac] to-[#4fc8e4] rounded-3xl drop-shadow-2xl p-3 h-[140px] text-white row-span-2'>
                    <div>
                        <img className='w-[50px] h-[50px]' src={quran2} alt='icon quran 2' />
                    </div>
                    <br />
                    <div>
                        <h1 className='font-semibold text-white text-sm'>Quran</h1>
                        <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                    </div>
                </div>
                <div className='bg-gradient-to-b from-[#c55fa8] to-[#CC80B7] rounded-3xl drop-shadow-2xl p-3 h-[120px] text-white'>2</div>
                <div className='bg-gradient-to-b from-[#5274c9] to-[#8AA5E9] rounded-3xl drop-shadow-2xl p-3 h-[140px] text-white row-span-2'>3</div>
                <div className='bg-gradient-to-b from-[#7446ac] to-[#A781D7] rounded-3xl drop-shadow-2xl p-3 h-[120px] text-white'>
                    <div>
                        <img className='w-[50px] h-[50px] mt-[-10px] mb-3' src={quran3} alt='icon quran 3' />
                    </div>
                    <div>
                        <h1 className='font-semibold text-white text-sm'>Tajwid List</h1>
                        <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                    </div>
                </div>
            </div>

            <br /><br /><br />

        </div>
    )
}

export default Mobile