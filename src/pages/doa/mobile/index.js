import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import dbDua from '../../../db-dua/doa.json'

// img
import imageDoa from '../../../assets/img/quran3.png'

const Mobile = () => {
    const [allDua, setallDua] = useState(dbDua);
    const [valueSearch, setvalueSearch] = React.useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setvalueSearch(value);
    };

    return (
        <div className='lt:hidden min-h-full w-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C] dark:text-white'>
            <NavbarMobile page="Du'a" back='/' />
            <div className='flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 mt-6 rounded-3xl'>
                <div className='flex flex-col justify-center items-center bg-white p-1 rounded-lg shadow-sm'>
                    <img className='w-[40px] h-[40px]' src={imageDoa} alt='icon penanda putih' />
                </div>

                <div className='mt-2 text-center'>
                    <h1 className='font-bold text-xl'>Du'a</h1>
                    <p className='font-thin'>You can find du'a and practice it</p>
                </div>
            </div>

            <div className='flex justify-center items-center mb-3'>
                <input onChange={handleChange} className='input-search bg-[#cbeef7] dark:bg-[#32383D] rounded-lg w-[70%] p-2 my-4' type='text' placeholder='Search' ></input>
            </div>

            <div className='flex flex-col'>
                {
                    allDua
                        .filter((data) => data.doa.toLowerCase().includes(valueSearch.toLowerCase()))
                        .map((res, index) =>
                            <div className='mb-2 px-4' key={index}>
                                <h1 className='font-bold text-lg text-[#0A5356] dark:text-[#22282C] bg-white p-1 mb-3 rounded-lg'>{res.doa}</h1>
                                <h1 className='font-quran font-bold text-xl text-[#0A5356] dark:text-white text-right leading-10 mb-4'>{res.ayat}</h1>
                                <h1 className='text-left font-light text-sm text-green-800 dark:text-white mb-2'>{res.latin}</h1>
                                <h1 className='text-left font-light dark:text-gray-400 text-sm mb-3'>{res.artinya}</h1>

                                <hr /> <br />
                            </div>
                        )
                }
            </div>

            <br /><br /><br />
        </div>
    )
}

export default Mobile