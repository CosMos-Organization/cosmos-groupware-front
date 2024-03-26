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
            <div className={style.leftbar_calendar}>
                <div className={style.title_wrapper}>
                    <img src="/svg/list.svg" alt="list" />
                    <h1>
                        캘린더
                    </h1>
                </div>

                <div className={style.checkbox_wrapper}>
                    <div className={style.checkbox_box}>
                        <input type="checkbox" name="" id="all" />
                        <label htmlFor="all">전체</label>
                    </div>
                    <div className={style.checkbox_box}>
                        <input type="checkbox" name="" id="depart" />
                        <label htmlFor="depart">부서</label>
                    </div>
                    <div className={style.checkbox_box}>
                        <input type="checkbox" name="" id="myself" />
                        <label htmlFor="myself">내 일정</label>
                    </div>
                </div>

            </div>
            <div className={style.container}>
                <_Calendar />
            </div>
        </div>
    )
}

export default React_Callendar