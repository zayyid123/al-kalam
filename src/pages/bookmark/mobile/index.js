import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { Link } from 'react-router-dom'
import { getAllSurah } from '../../../service/axios'
import Swal from 'sweetalert2'

// img
import bookmarkIcon from '../../../assets/img/bookmark-quran.png'
import deleteIcon from '../../../assets/img/delete.png'

const Mobile = ({ setNomorSurah }) => {
    const [dataBookmarked, setdataBookmarked] = useState(JSON.parse(localStorage.getItem('BOOKMARKED')) || ['Data Kosong'])
    const [allDataSurah, setallDataSurah] = useState([])

    useEffect(() => {
        if (dataBookmarked === null || dataBookmarked.length === 0) {
            setdataBookmarked(['Data Kosong'])
        }

    }, [dataBookmarked])

    useEffect(() => {
        const getDataSurah = async () => {
            const dataSurah = await getAllSurah();
            setallDataSurah(dataSurah.data)
        }

        getDataSurah()
    }, [])


    const handleClick = (data) => {
        setNomorSurah(data)
    }

    const handleRemove = (myData) => {
        const dataStorage = localStorage.getItem('BOOKMARKED')
        const dataParser = JSON.parse(dataStorage)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                dataParser.forEach((data, index) => {
                    if (data === myData) {
                        dataParser.splice(index, 1)
                        localStorage.setItem('BOOKMARKED', JSON.stringify(dataParser))
                    }
                })
                setdataBookmarked(JSON.parse(localStorage.getItem('BOOKMARKED')))
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                Swal.fire(
                    'Cancelled',
                    'Your data is safe :)',
                    'error'
                )
            }
        })
    }


    return (
        <div className='lt:hidden w-full min-h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C]'>
            <NavbarMobile page={'Bookmark'} back={'/al-kalam'} />
            <div className='flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 mt-6 rounded-3xl'>
                <div className='flex flex-col justify-center items-center bg-white p-1 rounded-lg shadow-sm'>
                    <img className='w-[40px] h-[40px]' src={bookmarkIcon} alt='icon penanda putih' />
                </div>

                <div className='mt-2 text-center'>
                    <h1 className='font-bold text-xl'>Bookmark Surah</h1>
                    <p className='font-thin'>Bookmark your surah and you can read it anytime anywhere.</p>
                </div>
            </div>

            <div className='mt-6'>
                {
                    dataBookmarked.map((res, index) =>
                        res === 'Data Kosong' ?
                            <div key={'datakosong'} className='bg-white mx-4 mb-3 p-3 rounded-lg text-center'>
                                {
                                    res
                                }
                            </div>
                            :
                            allDataSurah.map((resSurah) =>
                                resSurah.nomor === res &&
                                <div key={'dataBookmarked' + index}>
                                    <div className='flex justify-between items-center bg-white mx-4 mb-3 p-3 rounded-lg'>
                                        <Link to={'/al-kalam/surah'} onClick={() => handleClick(res)}>
                                            <div className='flex items-center'>
                                                <div className='bg-[#32B0A8] text-white p-1 rounded-lg min-w-[40px] text-center'>
                                                    <h1>{res}</h1>
                                                </div>
                                                <div className='ml-3'>
                                                    <h1 className='font-semibold text-lg'>{resSurah.nama_latin}</h1>
                                                    <p className='font-thin text-zinc-900 text-xs'>{resSurah.tempat_turun === 'mekah' ? 'Makiyah' : 'Madaniyah'} - {resSurah.jumlah_ayat} ayat</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <div onClick={() => handleRemove(res)}>
                                            <img src={deleteIcon} alt='icon delete' className='w-[30px]' />
                                        </div>
                                    </div>
                                </div>
                            )
                    )
                }
            </div>

            <br /><br /><br />
        </div>
    )
}

export default Mobile