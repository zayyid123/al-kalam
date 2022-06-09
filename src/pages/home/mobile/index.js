import React from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { Link } from 'react-router-dom'

// img
import lastRead from '../../../assets/img/last-read.png'
import quran from '../../../assets/img/quran.png'
import quran2 from '../../../assets/img/quran2.png'
import quran3 from '../../../assets/img/quran3.png'
import bookmarkQuran from '../../../assets/img/bookmark-quran.png'
import bulan from '../../../assets/img/bulan.png'

const Mobile = () => {
    return (
        <div className='lt:hidden w-full h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Al-Kalam'} />

            {/* quran */}
            <div className='flex justify-center items-center'>
                <img className='w-[100px] ' src={quran} alt='icon quran' />
            </div>

            {/* last read */}
            <div className='flex justify-between items-center text-white drop-shadow-2xl bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 rounded-3xl'>
                <div>
                    <p className='font-thin text-xs mb-3'>Last Read</p>
                    <h1 className='font-semibold text-sm'>Ar-Rahman</h1>
                    <p className='font-thin text-xs '>Verse No.1</p>
                    <p className='font-normal text-xs '>Go to {'>'}</p>
                </div>
                <div>
                    <img className='w-[90px] h-[90px]' src={lastRead} alt='icon last read' />
                </div>
            </div>

            {/* all */}
            <div className='grid grid-cols-2 gap-4 m-4'>
                {/* quran */}
                <div className='bg-gradient-to-b from-[#3295ac] to-[#4fc8e4] dark:from-purple-900 dark:to-purple-600 rounded-3xl drop-shadow-2xl p-3 h-[200px] text-white row-span-2'>
                    <Link to={'/al-kalam/quran'}>
                        <div>
                            <img className='w-[75px] h-[75px]' src={quran2} alt='icon quran 2' />
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className='font-semibold text-white text-sm'>Quran</h1>
                            <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                        </div>
                    </Link>
                </div>

                {/* reminder */}
                <div className='bg-gradient-to-b from-[#c55fa8] to-[#CC80B7] dark:from-emerald-900 dark:to-emerald-600 rounded-3xl drop-shadow-2xl p-3 h-[150px] text-white'>
                    <div>
                        <img className='w-[58px] h-[58px] mt-1 mb-6' src={bulan} alt='icon bulan' />
                    </div>
                    <div>
                        <h1 className='font-semibold text-white text-sm'>Memorize</h1>
                        <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                    </div>
                </div>

                {/* bookmarks */}
                <div className='bg-gradient-to-b from-[#5274c9] to-[#8AA5E9] dark:from-purple-900 dark:to-purple-500 rounded-3xl drop-shadow-2xl p-3 h-[200px] text-white row-span-2'>
                    <div>
                        <img className='w-[70px] h-[70px] mb-3' src={bookmarkQuran} alt='bookmark quran' />
                    </div>
                    <br />
                    <br />
                    <div>
                        <h1 className='font-semibold text-white text-sm'>Bookmarks</h1>
                        <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                    </div>
                </div>

                {/* tajwid */}
                <div className='bg-gradient-to-b from-[#7446ac] to-[#A781D7] dark:from-emerald-900 dark:to-emerald-500 rounded-3xl drop-shadow-2xl p-3 h-[150px] text-white'>
                    <div>
                        <img className='w-[80px] h-[80px] mt-[-10px] mb-3' src={quran3} alt='icon quran 3' />
                    </div>
                    <div>
                        <h1 className='font-semibold text-white text-sm'>Tajwid List</h1>
                        <p className='font-normal text-xs text-white '>Go to {'>'}</p>
                    </div>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default Mobile