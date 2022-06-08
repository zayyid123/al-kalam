import React from 'react'
import { Link } from 'react-router-dom'


// icon
import profile from '../assets/icons/person.svg'
import home from '../assets/icons/home.svg'
import bookmark from '../assets/icons/bookmark.svg'

//array
const data = [
    {
        name: 'Profile',
        link: '/profile',
        icon: profile
    },
    {
        name: 'Home',
        link: '/',
        icon: home
    },
    {
        name: 'Bookmark',
        link: '/bookmark',
        icon: bookmark
    },
]

const ToolBarMobile = () => {
    return (
        <div className='lt:hidden z-50 fixed bottom-0 right-0 left-0'>
            <div className='bg-white rounded-t-xl font-sans font-thin'>
                <div className='flex justify-around items-center '>
                    {
                        data.map((res, index) =>
                            <Link key={index} to={res.link} >
                                <div className='flex justify-center items-center flex-col group' >
                                    <div className='group-hover:translate-y-[-35px] 
                        ease-in-out duration-100 
                        bg-white 
                        p-3 
                        rounded-[50%] 
                        border-4 
                        border-white 
                        group-hover:border-[#a2ebfc]
                        dark:group-hover:border-[#211E2D] 
                        group-hover:before:content-[""] 
                        group-hover:before:absolute
                        group-hover:before:top-[60%]
                        group-hover:before:left-[-16px]
                        group-hover:before:rounded-tr-[20px]
                        group-hover:before:shadow-[0_-5px_0_0_#a2ebfc]
                        dark:group-hover:before:shadow-[0_-5px_0_0_#211E2D]
                        group-hover:before:w-[21px] 
                        group-hover:before:h-[24px]
                        group-hover:after:content-[""] 
                        group-hover:after:absolute
                        group-hover:after:top-[60%]
                        group-hover:after:right-[-16px]
                        group-hover:after:rounded-tl-[20px]
                        group-hover:after:shadow-[0_-5px_0_0_#a2ebfc]
                        dark:group-hover:after:shadow-[0_-5px_0_0_#211E2D]
                        group-hover:after:w-[21px] 
                        group-hover:after:h-[24px]'>
                                        <img className='w-[25px] h-[25px]' src={res.icon} alt={res.name} />
                                    </div>
                                    <p className='absolute bottom-[5px] ease-in-out duration-100 opacity-0 group-hover:opacity-100'>{res.name}</p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ToolBarMobile