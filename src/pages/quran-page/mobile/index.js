import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { getAllSurah } from '../../../service/axios'
import './style.css'

// img
import penandaHijau from '../../../assets/img/penanda-hijau.png'
import penandaPutih from '../../../assets/img/penanda-putih.png'
import iconSearch from '../../../assets/icons/img_icon_search.svg'

const Mobile = () => {
    const [allData, setAllData] = useState([]);

    useEffect(() => {
        const getAllData = async () => {
            const getData = await getAllSurah();
            setAllData(getData.data)
        }

        getAllData()
    }, [])

    return (
        <div className='lt:hidden w-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Quran'} />

            <div className='flex justify-center items-center'>
                <input className='dark:bg-[#2D2D3D] rounded-lg w-[70%] p-2 my-4' type='text' placeholder='Search' ></input>
                <button className='rounded-lg bg-gray-900 ml-2 p-2'>
                    <img src={iconSearch} alt='icon search' />
                </button>
            </div>

            {
                allData.map((res, index) =>
                    <div className='m-4' key={index + 'dataQuran'}>
                        <div className='flex justify-between items-center'>
                            <div className='flex justify-center items-center'>
                                <div className='p-3 relative'>
                                    <img className='dark:hidden w-[30px] h-[30px]' src={penandaHijau} alt={res.name + 'icon'} />
                                    <img className='hidden dark:block w-[30px] h-[30px]' src={penandaPutih} alt={res.name + 'icon'} />
                                    {
                                        res.nomor < 10 ?
                                            <p className='absolute z-10 bottom-[21px] left-[24px] text-[0.5rem]'>{res.nomor}</p>
                                            :
                                            res.nomor < 100 ?
                                                <p className='absolute z-10 bottom-[21px] left-[22px] text-[0.5rem]'>{res.nomor}</p>
                                                :
                                                <p className='absolute z-10 bottom-[21px] left-[20px] text-[0.5rem]'>{res.nomor}</p>
                                    }
                                </div>
                                <div>
                                    <h1 className='font-semibold text-lg'>{res.nama_latin}</h1>
                                    <p className='font-thin text-gray-500 text-xs'>{res.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {res.jumlah_ayat} ayat</p>
                                </div>
                            </div>

                            <h1 className='font-quran text-lg text-green-900 dark:text-white font-semibold' >{res.nama}</h1>
                        </div>

                        <hr />
                    </div>
                )
            }
            <br /> <br /><br /><br />
        </div>
    )
}

export default Mobile