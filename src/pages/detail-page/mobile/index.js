/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { getDetailSurah } from '../../../service/axios'
import Parser from 'html-react-parser';
import './index.css'

// img
import penandaPutih from '../../../assets/img/penanda-putih.png'
import basmalahLight from '../../../assets/img/basmalah-light.png'
import basmalahDark from '../../../assets/img/basmalah-dark.png'

const Mobile = ({ nomorSurah, setNomorSurah }) => {
    const [allData, setallData] = useState([])
    const [ayat, setayat] = useState([])

    useEffect(() => {
        const getData = async () => {
            const response = await getDetailSurah(nomorSurah);
            setallData(response.data)
            setayat(response.data.ayat)
        }

        getData()
    }, [])

    console.log(allData)

    return (
        <div className='lt:hidden w-full min-h-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Surah'} back={'/al-kalam/quran'} />

            <div className='flex flex-col justify-center items-center text-white drop-shadow-2xl bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 mt-6 rounded-3xl'>
                <div className='flex flex-col justify-center items-center'>
                    <img className='w-[40px] h-[40px]' src={penandaPutih} alt='icon penanda putih' />
                    <p className='absolute z-10 text-xs'>{nomorSurah}</p>
                </div>

                <div className='mt-2 text-center'>
                    <h1 className='font-bold text-xl'>{allData.nama_latin}</h1>
                    <p className='text-lg'>{allData.arti}</p>
                    <p className='font-thin mt-5 text-xs'>{allData.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {allData.jumlah_ayat} ayat</p>
                </div>
            </div>

            <div className='flex justify-center items-center mt-3'>
                <img className='dark:hidden w-[250px]' src={basmalahLight} alt='icon basmalah light' />
                <img className='hidden dark:block w-[250px]' src={basmalahDark} alt='icon basmalah dark' />
            </div>

            <br />

            {/* ayat */}
            <div>
                {
                    ayat.map((res, index) =>
                        <div className='px-4' key={index + 'ayat'}>
                            <h1 className='font-quran font-bold text-xl text-[#0A5356] dark:text-white text-right leading-10 mb-4'>{res.ar}</h1>

                            <h1 className='text-left font-light text-sm text-green-800 dark:text-white mb-2' >{Parser(res.tr)}</h1>

                            <p className='text-left font-light dark:text-gray-400 text-sm mb-3'>{res.idn}</p>

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