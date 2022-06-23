/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { getDetailSurah } from '../../../service/axios'
import Parser from 'html-react-parser';
import Swal from 'sweetalert2';
import './index.css'

// img
import penandaPutih from '../../../assets/img/penanda-putih.png'
import basmalahLight from '../../../assets/img/basmalah-light.png'
import basmalahDark from '../../../assets/img/basmalah-dark.png'
import shareIcon from '../../../assets/icons/share.svg'
import pinIcon from '../../../assets/icons/pin.svg'
import pinedIcon from '../../../assets/icons/pined.svg'
import playIcon from '../../../assets/icons/play-audio.svg'
import pauseIcon from '../../../assets/icons/pause-audio.svg'
import navigationIcon from '../../../assets/icons/navigation-audio.svg'
import bookmarkedIcon from '../../../assets/icons/bookmarked_putih.svg'
import bookmarkIcon from '../../../assets/icons/bookmark_putih.svg'

const Mobile = ({ nomorSurah, setNomorSurah }) => {
    const [allData, setallData] = useState([])
    const [ayat, setayat] = useState([])
    const [power, setpower] = useState(false)
    const [progress, setprogress] = useState('')
    const audio = document.getElementById('myAudio');
    const [dataPined, setDataPined] = useState(JSON.parse(localStorage.getItem('PINED')) || { surah: 'Al-Fatihah', ayat: '1', noSurah: '1' })
    const [dataBookmarked, setdataBookmarked] = useState(JSON.parse(localStorage.getItem('BOOKMARKED')))
    const [isBookmarked, setisBookmarked] = useState(false)

    useEffect(() => {
        const getData = async () => {
            const response = await getDetailSurah(nomorSurah);
            setallData(response.data)
            setayat(response.data.ayat)
        }

        getData()
    }, [])

    useEffect(() => {
        const dataStorage = localStorage.getItem('BOOKMARKED')
        if (dataStorage !== null) {
            const myAllData = JSON.parse(dataStorage)
            myAllData.forEach((data, index) => {
                if (data === nomorSurah) {
                    setisBookmarked(true)
                }
            })
        }
    }, [])


    const handleShareWa = (index) => {
        window.open(`https://api.whatsapp.com/send/?text=${ayat[index].ar + ayat[index].idn + ' ( QS. ' + allData.nama_latin
            + ' - ' + ayat[index].nomor + ' ).'}&app_absent=0`, '_blank')
    }

    const handlePinedUnpined = (index) => {
        localStorage.setItem('PINED', JSON.stringify({ surah: allData.nama_latin, ayat: ayat[index].nomor, noSurah: allData.nomor }))
        const mydata = localStorage.getItem('PINED')
        setDataPined(JSON.parse(mydata))

        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your last read have been added',
        })
    }

    const handlePlayAudio = () => {
        setpower(!power)
        audio.play()
    }

    const handlePauseAudio = () => {
        setpower(!power)
        audio.pause()
    }

    const handleNextAudio = () => {
        audio.currentTime = audio.currentTime + 5
    }

    const handlePrevAudio = () => {
        audio.currentTime = audio.currentTime - 5
    }

    const updateProgress = (e) => {
        const { duration, currentTime } = e.target
        const progressPercent = (currentTime / duration) * 100
        setprogress(progressPercent)
    }

    const setClickedProgress = (e) => {
        if (power === false) {
            handlePlayAudio()
            const width = e.target.clientWidth
            const clickX = e.nativeEvent.offsetX
            const duration = audio.duration

            audio.currentTime = (clickX / width) * duration
        } else {
            const width = e.target.clientWidth
            const clickX = e.nativeEvent.offsetX
            const duration = audio.duration

            audio.currentTime = (clickX / width) * duration
        }
    }

    const handleChangeBookmarked = () => {
        const data = localStorage.getItem('BOOKMARKED')
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your surah have been bookmarked',
        })
        setisBookmarked(true)
        if (data === null) {
            localStorage.setItem('BOOKMARKED', JSON.stringify([nomorSurah]))
        } else {
            const dataParser = JSON.parse(data)
            const myAllData = [
                ...dataParser, nomorSurah
            ]
            localStorage.setItem('BOOKMARKED', JSON.stringify(myAllData))
        }
    }

    const handleChangeUnBookmarked = () => {
        const dataStorage = localStorage.getItem('BOOKMARKED')
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Your surah have been unbookmarked',
        })
        setisBookmarked(false)
        const dataParser = JSON.parse(dataStorage)
        dataParser.forEach((data, index) => {
            if (data === nomorSurah) {
                dataParser.splice(index, 1)
                localStorage.setItem('BOOKMARKED', JSON.stringify(dataParser))
            }
        })
    }

    return (
        <div className='lt:hidden w-full min-h-full bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C] dark:text-white'>
            <NavbarMobile page={'Surah'} back={'/quran'} />

            <div className='text-white bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 mt-6 rounded-3xl'>
                <div className='flex flex-col justify-center items-center'>
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

                <div onClick={isBookmarked ? handleChangeUnBookmarked : handleChangeBookmarked} className='absolute top-[93px] right-[21px]'>
                    <img className='w-[30px] h-[30px] mx-2' src={isBookmarked ? bookmarkedIcon : bookmarkIcon} alt='sahre icon' />
                </div>
            </div>

            <div className='flex sticky top-2 justify-evenly items-center cursor-pointer bg-white mx-6 rounded-lg mt-3'>
                <audio onTimeUpdate={updateProgress} id='myAudio' src={allData.audio}></audio>

                <div className='bg-gray-700 w-[60%] cursor-pointer h-2 my-2 rounded-lg' onClick={setClickedProgress}>
                    <div className='bg-teal-600 h-2 w-0 rounded-lg' style={{ width: progress + '%' }}></div>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='w-fit h-[20px]' onClick={handlePrevAudio}>
                        <img className='w-[20px] h-[20px] bg-[#def7f5] rounded-[50%] p-1 origin-center rotate-180' src={navigationIcon} alt='navigation icon' />
                    </div>

                    <div className='w-fit my-3 bg-[#def7f5] p-2 rounded-[50%] mx-2' onClick={power ? handlePauseAudio : handlePlayAudio}>
                        {power ?
                            <img className='w-[20px] h-[20px]' src={pauseIcon} alt='pause icon' />
                            :
                            <img className='w-[20px] h-[20px]' src={playIcon} alt='play icon' />}
                    </div>

                    <div className='w-fit h-[20px]' onClick={handleNextAudio}>
                        <img className='w-[20px] h-[20px] bg-[#def7f5] rounded-[50%] p-1 ' src={navigationIcon} alt='navigation icon' />
                    </div>
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
                            <div className='flex justify-between items-center rounded-3xl bg-white mb-4 p-1'>
                                <div className='flex justify-center items-center rounded-[50%] bg-[#32B0A8] w-[22px] h-[22px] text-[0.7rem] text-white text-center'>
                                    <h1>{res.nomor}</h1>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <div onClick={() => handlePinedUnpined(index)}>
                                        <img className='w-[20px] h-[20px] mx-2' src={dataPined.surah === allData.nama_latin ? dataPined.ayat === res.nomor ? pinedIcon : pinIcon : pinIcon} alt='pined icon' />
                                    </div>

                                    <div onClick={() => handleShareWa(index)}>
                                        <img className='w-[20px] h-[20px] mx-2' src={shareIcon} alt='sahre icon' />
                                    </div>
                                </div>
                            </div>

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