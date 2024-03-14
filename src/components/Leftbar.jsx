import React from 'react'
import style from '../SCSS/components/leftbar.module.scss';

const Leftbar = () => {
    return (
        <div className={style.left_main}>
            <div className={style.logo_box}>
                <img src='/svg/logo_title_new.svg' />
            </div>

            <div className={style.date_box}>
                <h3>2024.02.27 (화)</h3>
            </div>

            <div className={style.profile_img_box}>
                <img src='/프로필_예시.png' />
            </div>

            <div className={style.department_wrapper}>
                <h2>김지홍</h2>
                <div className={style.department_box}>
                    <span>사업 1팀 / 사원</span>
                    <div className={style.logout_button}>
                        로그아웃
                    </div >
                </div>
            </div>

            <div className={style.brief_schedule_wrapper}>
                <div className={style.left_box}>
                    <p>잔여 연차</p>
                    <p>새 메일</p>
                    <p>오늘의 일정</p>

                </div>
                <div className={style.righgt_box}>
                    <p>8</p>
                    <p>0</p>
                    <p>1</p>
                </div>
            </div>

            <div className={style.category_wrapper}>
                <div className={`${style.category_box} ${style.active}`}>
                    <div className={style.active_bar}></div>
                    <h1>메일 / 채팅</h1>
                </div>
                <div className={style.category_box}>
                    <h1>게시판</h1>
                </div>
                <div className={style.category_box}>
                    <h1>일정관리</h1>
                </div>
                <div className={style.category_box}>
                    <h1>근태관리</h1>
                </div>
                <div className={style.category_box}>
                    <h1>시설관리</h1>
                </div>
            </div>

            <div className={style.customer_service_wrapper}>
                <p>1:1 문의</p>
                <p>고장 접수</p>
            </div>

        </div>
    )
}

export default Leftbar