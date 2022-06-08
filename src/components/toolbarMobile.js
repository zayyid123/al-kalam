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
        link: '/al-kalam/profile',
        icon: profile
    },
    {
        name: 'Home',
        link: '/al-kalam',
        icon: home
    },
    {
        name: 'Bookmark',
        link: '/al-kalam/bookmark',
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
                        '>
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