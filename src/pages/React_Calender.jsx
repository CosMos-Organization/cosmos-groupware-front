import React from 'react'
import Calendar from 'react-calendar'
import style from '../SCSS/pages/React_Calender.module.scss'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import 'react-calendar/dist/Calendar.css'


const React_Callender = () => {



    return (
        <div className={style.main}>
            <Banner />
            <Leftbar_min />
            <div className={style.container}>
                <Calendar />
            </div>
        </div>
    )
}

export default React_Callender