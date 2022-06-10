import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { getAllSurah } from '../../../service/axios'
import { Link } from 'react-router-dom'
import './style.css'

// img
import penandaHijau from '../../../assets/img/penanda-hijau.png'
import penandaPutih from '../../../assets/img/penanda-putih.png'

const Mobile = ({ nomorSurah, setNomorSurah }) => {
    const [allData, setAllData] = useState([]);
    const [valueSearch, setvalueSearch] = React.useState("");

    useEffect(() => {
        const getAllData = async () => {
            const getData = await getAllSurah();
            setAllData(getData.data)
        }

        getAllData()
    }, [])

    const handleClick = (data) => {
        setNomorSurah(data)
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setvalueSearch(value);
    };
    React.useEffect(() => { }, [valueSearch]);

    return (
        <div className='lt:hidden min-h-full w-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#211E2D] dark:via-[#211E2D] dark:to-[#211E2D] dark:text-white'>
            <NavbarMobile page={'Quran'} back={'/al-kalam'} />

            <div className='flex justify-center items-center'>
                <input onChange={handleChange} className='input-search bg-[#cbeef7] dark:bg-[#2D2D3D] rounded-lg w-[70%] p-2 my-4' type='text' placeholder='Search' ></input>
            </div>

            {
                allData
                    .filter((data) => data.nama_latin.toLowerCase().includes(valueSearch.toLowerCase()))
                    .map((res, index) =>
                        <div className='m-4' key={index + 'dataQuran'}>
                            <Link to={'/al-kalam/surah'} onClick={() => handleClick(res.nomor)}>
                                <div className='flex justify-between items-center'>
                                    <div className='flex justify-center items-center'>
                                        <div className='py-3 pr-3 relative'>
                                            <img className='dark:hidden w-[30px] h-[30px]' src={penandaHijau} alt={res.name + 'icon'} />
                                            <img className='hidden dark:block w-[30px] h-[30px]' src={penandaPutih} alt={res.name + 'icon'} />
                                            {
                                                res.nomor < 10 ?
                                                    <p className='absolute z-10 bottom-[21px] left-[12px] text-[0.5rem]'>{res.nomor}</p>
                                                    :
                                                    res.nomor < 100 ?
                                                        <p className='absolute z-10 bottom-[21px] left-[10px] text-[0.5rem]'>{res.nomor}</p>
                                                        :
                                                        <p className='absolute z-10 bottom-[21px] left-[8px] text-[0.5rem]'>{res.nomor}</p>
                                            }
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-lg'>{res.nama_latin}</h1>
                                            <p className='font-thin text-gray-600 text-xs'>{res.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {res.jumlah_ayat} ayat</p>
                                        </div>
                                    </div>

                                    <h1 className='font-quran text-lg text-green-900 dark:text-white font-semibold' >{res.nama}</h1>
                                </div>
                            </Link>

                            <hr />
                        </div>
                    )
            }
            <br /> <br /><br /><br />
        </div>
    )
}

export default Mobile