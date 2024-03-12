import React, { useState } from 'react'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import style from '../SCSS/pages/admin_Employee.module.scss';
import axios from 'axios';

const Admin_Employee = () => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [department, setDepartment] = useState('')
    const [position, setPosition] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const handdleSubmit = async (e) => {
        e.preventDefault()

        let member = {
            memberid: id,
            name: name,
            department: department,
            position: position,
            phone: phone,
            email: email
        }
        try {

            console.log('멤버확인', member);
            const response = await axios.post('http://localhost:8080/member/', member)
            console.log(response.data)
        } catch (error) {

        }

    }

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
                            <form>
                                <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
                                <input type="text" placeholder="사원명" value={name} onChange={(e) => setName(e.target.value)} />
                                <input type="text" placeholder="부서" value={department} onChange={(e) => setDepartment(e.target.value)} />
                                <input type="text" placeholder="직급" value={position} onChange={(e) => setPosition(e.target.value)} />
                                <input type="text" placeholder="휴대폰 번호" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <input type="text" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <button onClick={handdleSubmit}>저장</button>
                                <button onClick={closeModal}>닫기</button>
                            </form>
                        </div>
                    </div>
                )}
            </div>


        </div>
    )
}

export default Admin_Employee