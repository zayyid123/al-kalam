import React, { useState, useEffect } from 'react'
import NavbarMobile from '../../../components/navbarMobile'
import { getKota, getAdzan } from '../../../service/axios'
import moment from 'moment'

// img
import memorizeIcon from '../../../assets/img/bulan.png'

const Mobile = () => {
    const [dataKota, setdataKota] = useState([])
    const [dataAdzan, setdataAdzan] = useState([])
    const [todayAdzan, settodayAdzan] = useState({})
    const [time, settime] = useState(moment().format('LTS'))
    const [today, settoday] = useState('')
    const [myCity, setmyCity] = useState('ambarawa')
    const year = moment().format('YYYY');
    const month = moment().format('MM');
    const day = moment().format('DD');
    const [submitCity, setsubmitCity] = useState(myCity)

    useEffect(() => {
        const getDataKota = async () => {
            const allData = await getKota()
            setdataKota(allData.data)
        }

        getDataKota()
    }, [])


    useEffect(() => {
        const getDataAdzan = async (city) => {
            const allData = await getAdzan(city, year, month)
            setdataAdzan(allData.data)
        }

        getDataAdzan(submitCity)
    }, [month, submitCity, year])


    useEffect(() => {
        const nowDate = `${year}-${month}-${day}`;
        dataAdzan.forEach((res, index) => {
            if (res.tanggal === nowDate) {
                settodayAdzan(res)
            }
        })
    }, [dataAdzan, day, month, year])

    const refreshTime = () => {
        settime(moment().format('LTS'))
    }

    const handleChangeCity = (e) => {
        setmyCity(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setsubmitCity(myCity)
    }

    useEffect(() => {
        settoday(moment().format('dddd, DD MMMM  YYYY'))
    }, [])

    useEffect(() => {
        const timerId = setInterval(refreshTime, 1000);
        return function cleanup() {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className='lt:hidden w-full min-h-[100vh] bg-gradient-to-t from-[#a2ebfc] via-[#bfecf7] to-[#e8fbff] dark:from-[#22282C] dark:via-[#22282C] dark:to-[#22282C]'>
            <NavbarMobile page={'Memorize'} back={'/'} />
            <div className='flex flex-col justify-center items-center text-white bg-gradient-to-r from-[#2AB2AF] to-[#7DC694] dark:from-[#19b1ae] dark:to-[#45fffc] mx-4 p-3 mt-6 rounded-3xl'>
                <div className='flex flex-col justify-center items-center bg-white p-1 rounded-lg shadow-sm'>
                    <img className='w-[40px] h-[40px]' src={memorizeIcon} alt='icon penanda putih' />
                </div>

                <div className='mt-2 text-center'>
                    <h1 className='font-bold text-3xl'>{time}</h1>
                    <p className='font-thin text-2xl'>Adzan Sholat</p>
                    <p className='font-thin'>{today}</p>
                </div>
            </div>

            <div className='flex justify-center mt-3'>
                <form className='flex' onSubmit={handleSubmit}>
                    <input onChange={handleChangeCity} className='p-1 rounded-lg w-full mr-1 capitalize ' list="Places" name="Place" id="Place" placeholder='Choose your city...' required />
                    <datalist id="Places">
                        {
                            dataKota.map((city) =>
                                <option className='capitalize ' key={city} value={city}></option>
                            )
                        }
                    </datalist>
                    <button type='submit' className='bg-white dark:bg-teal-600 dark:text-white rounded-lg p-2'>Submit</button>
                </form>
            </div>


            <div className='text-center mt-3 mx-4 p-3 rounded-3xl bg-white'>
                <h1 className='mb-2 w-full text-white bg-teal-600 p-2 font-bold text-xl rounded-lg capitalize '>{submitCity}</h1>
                <div className='flex justify-evenly'>
                    <div className='px-2 text-left'>
                        <p className='py-2 px-2'>Subuh :</p>
                        <p className='py-2 px-2'>Dzuhur :</p>
                        <p className='py-2 px-2'>Ashr :</p>
                        <p className='py-2 px-2'>Magrib :</p>
                        <p className='py-2 px-2'>Isya :</p>
                    </div>
                    <div className='px-2'>
                        <p className='py-2 px-2'>{todayAdzan.shubuh}</p>
                        <p className='py-2 px-2'>{todayAdzan.dzuhur}</p>
                        <p className='py-2 px-2'>{todayAdzan.ashr}</p>
                        <p className='py-2 px-2'>{todayAdzan.magrib}</p>
                        <p className='py-2 px-2'>{todayAdzan.isya}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mobile