import React from 'react'
import style from '../SCSS/components/leftbar_min.module.scss';

const Leftbar_min = () => {
    return (
        <div className={style.left_main}>
            <div className={style.profile_wrapper}>
                <div className={style.profile_box}>
                    <img src='/프로필_예시.png' />

                </div>
            </div>
            <div className={style.name_box}>
                <h2>김지홍</h2>
            </div>

            <div className={style.category_wrapper}>
                <div className={style.category_box}>
                    <div className={style.svg_box}>
                        <img src='/category_mail.svg' alt='mail_svg' />
                    </div>
                    <div className={style.title_box}>
                        <h3>메일</h3>
                    </div>
                </div>
                <div className={style.category_box}>
                    <div className={style.svg_box}>
                        <img src='/category_board.svg' alt='board_svg' />
                    </div>
                    <div className={style.title_box}>
                        <h3>게시판</h3>
                    </div>
                </div>
                <div className={style.category_box}>
                    <div className={style.svg_box}>
                        <img src='/category_schedule.svg' alt='schedule_svg' />
                    </div>
                    <div className={style.title_box}>
                        <h3>일정관리</h3>
                    </div>
                </div>
                <div className={style.category_box}>
                    <div className={style.svg_box}>
                        <img src='/category_attendance.svg' alt='attendance_svg' />
                    </div>
                    <div className={style.title_box}>
                        <h3>근태관리</h3>
                    </div>
                </div>
                <div className={style.category_box}>
                    <div className={style.svg_box}>
                        <img src='/category_admin.svg' alt='admin_svg' />
                    </div>
                    <div className={style.title_box}>
                        <h3>관리자</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar_min