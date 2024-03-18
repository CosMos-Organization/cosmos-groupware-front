import React from 'react'
import style from '../SCSS/pages/React_Calendar.module.scss'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import _Calendar from '../components/_Calendar'


const React_Callendar = () => {



    return (
        <div className={style.main}>
            <Banner />
            <Leftbar_min />
            <div className={style.container}>
                <_Calendar />
            </div>
        </div>
    )
}

export default React_Callendar