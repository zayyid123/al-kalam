import React from 'react'
import { useNavigate } from 'react-router-dom'


// icon
import profile from '../assets/icons/user.svg'
import home from '../assets/icons/home.svg'
import bookmark from '../assets/icons/bookmark.svg'

const ToolBarMobile = () => {
    const navigate = useNavigate()

    return (
        <div className='lt:hidden bg-slate-500 m-1 p-5 rounded-lg'>
            <div className='flex justify-around'>
                <div className='text-center flex justify-center flex-col items-center' onClick={() => navigate('/profile')}>
                    <img className='w-[50px] h-[50px]' src={profile} alt='icon profile' />
                    <h1>Profile</h1>
                </div>
                <div className='text-center flex justify-center flex-col items-center' onClick={() => navigate('/')}>
                    <img className='w-[50px] h-[50px]' src={home} alt='icon home' />
                    <h1>Home</h1>
                </div>
                <div className='text-center flex justify-center flex-col items-center' onClick={() => navigate('/bookmark')}>
                    <img className='w-[50px] h-[50px]' src={bookmark} alt='icon bookmark' />
                    <h1>Bookmark</h1>
                </div>
            </div>
        </div>
    )
}

export default ToolBarMobile