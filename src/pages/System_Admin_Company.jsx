import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import style from '../SCSS/pages/System_Admin_Company.module.scss';
import axios from 'axios';

const System_Admin_Company = () => {


    /* 모달 */
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    /* 모달 */



    /* 회사 등록 */
    const [companyName, setCompanyName] = useState('')
    const [managerId, setManagerId] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')



    const handdleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            companyName: companyName,
            companyManagerEmail: managerId,
            companyPassword: password,
            companyPhone: phone
        }
        console.log(data);
        try {
            const response = await axios.post('http://localhost:8080/admin_system/company/insert_company', data)
            console.log(response)
        } catch (error) {
            console.error(error.response.data)
        }
    }

    /* 회사 등록 */

    /* 회사 조회 */
    const [conpanyList, setCompanyList] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/admin_system/company/get_company')
                console.log(response.data)
                setCompanyList(response.data)
            } catch (error) {
                console.error(error.response.data)
            }
        }
        fetchData()
    }, [])




    return (
        <div className={style.main}>
            <Banner />
            <Leftbar_min />
            <div className={style.container}>
                <div className={style.top_box}>
                    <div className={style.title_wrapper}>
                        <div className={`${style.title_box} ${style.active}`}>

                            <h1>
                                회사 관리
                            </h1>
                        </div>
                        <div className={style.title_box}>
                            <h1>
                                -
                            </h1>
                        </div>
                        <div className={style.title_box}>
                            <h1>
                                -
                            </h1>
                        </div>
                    </div>
                </div>
                <form action="">
                    <div className={style.search_wrapper}>
                        <select>
                            <option value="">회사명</option>
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
                                회사 도메인
                            </th>
                            <th>
                                관리자 아이디
                            </th>
                            <th>
                                사원 수
                            </th>
                            <th>
                                휴대폰 번호
                            </th>
                            <th>
                                생성 일자
                            </th>
                            <th>
                                삭제 일자
                            </th>
                            <th>
                                -
                            </th>
                            <th>
                                관리
                            </th>
                        </tr>
                        {conpanyList.map((company) => (
                            <tr>
                                <td>
                                    {company.companyName}
                                </td>
                                <td>
                                    {company.companyManagerEmail}
                                </td>
                                <td>
                                    {company.companyEmployeeCount}
                                </td>
                                <td>
                                    {company.companyPhone}
                                </td>
                                <td>
                                    {new Date(company.companyCreatedAt).toLocaleDateString('ko-KR')}
                                </td>
                                <td>
                                    {company.companyDeletedAt ? new Date(company.companyDeletedAt).toLocaleDateString('ko-KR') : 'N/A'}
                                </td>
                                <td>
                                    -
                                </td>
                                <td>
                                    <div className={style.manage_btn}>
                                        관리
                                    </div>
                                </td>
                            </tr>
                        ))}
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

                            <h2>회사 정보를 입력해 주세요.</h2>
                            <hr />
                            <div className={style.form_wrapper}>
                                <form>
                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>회사 도메인</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="text" placeholder="회사 도메인" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>관리자 아이디</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="text" placeholder="아이디" value={managerId} onChange={(e) => setManagerId(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>비밀번호</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>휴대폰</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="text" placeholder="휴대폰" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className={style.button_wrapper}>
                                        <button className={style.cancle_btn} onClick={closeModal}>취소</button>
                                        <button className={style.save_btn} onClick={handdleSubmit}>저장</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div >
    )
}

export default System_Admin_Company