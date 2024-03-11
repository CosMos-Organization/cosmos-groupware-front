import React, { useState } from 'react'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import style from '../SCSS/pages/admin_Employee.module.scss';

const Admin_Employee = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };




    return (
        <div className={style.main}>
            <Banner />


            <Leftbar_min />
            <div className={style.container}>
                <div className={style.top_box}>
                    <div className={style.title_wrapper}>
                        <div className={style.title_box}>
                            <h1>
                                사원 관리
                            </h1>
                        </div>
                        <div className={style.title_box}>
                            <h1>
                                조직도
                            </h1>
                        </div>
                        <div className={style.title_box}>
                            <h1>
                                게시판 관리
                            </h1>
                        </div>
                    </div>
                </div>
                <form action="">
                    <div className={style.search_wrapper}>
                        <select>
                            <option value="">사원명</option>
                        </select>
                        <input type="text" />
                        <div className={style.search_btn}>
                            <img src='/svg/search_glass.svg' alt='search_glass' />
                        </div>
                    </div>
                </form>

                <div className={style.employee_table_wrapper}>
                    <table>
                        <tr>
                            <th>
                                아이디
                            </th>
                            <th>
                                사원명
                            </th>
                            <th>
                                부서
                            </th>
                            <th>
                                직급
                            </th>
                            <th>
                                휴대폰 번호
                            </th>
                            <th>
                                사진
                            </th>
                            <th>
                                이메일
                            </th>
                            <th>
                                권한
                            </th>
                            <th>
                                관리
                            </th>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                csh
                            </td>
                            <td>
                                최수환
                            </td>
                            <td>
                                사업 1팀
                            </td>
                            <td>
                                사원
                            </td>
                            <td>
                                010-1111-2222
                            </td>
                            <td>
                                -
                            </td>
                            <td>
                                csh@naver.com
                            </td>
                            <td>
                                -
                            </td>
                            <td className={style.table_btn_wrapper}>
                                <div className={style.table_btn_box}>
                                    <div>
                                        수정
                                    </div>
                                    <div>
                                        삭제
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div className={style.employee_plus_btn_wrapper}>
                        <div className={style.employee_plus_btn} onClick={openModal}>
                            사원등록
                        </div>
                    </div>
                    <div className={style.table_page_wrapper}>
                        <img src='/svg/left_arrow.svg' alt='left_arrow' />
                        <div className={style.page_number_box}>
                            1
                        </div>
                        <img src='/svg/right_arrow.svg' alt='right_arrow' />
                    </div>
                </div>
                {showModal && (
                    <div className={style.modal}>
                        <div className={style.modal_content}>
                            <h2>Modal Title</h2>
                            <p>Modal content goes here...</p>
                            <button onClick={closeModal}>Close Modal</button>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Admin_Employee