import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Leftbar_min from '../components/Leftbar_min'
import style from '../SCSS/pages/Admin_Employee.module.scss';
import axios from 'axios';

const Admin_Employee = () => {


    /* 모달 */
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    /* 모달 */



    /* 사원등록 */
    const [memberId, setMemberId] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [department, setDepartment] = useState('사업 1팀')
    const [position, setPosition] = useState('사원')


    const handdleSubmit = async (e) => {
        e.preventDefault()
        let member = {
            memberId: memberId,
            password: password,
            name: name,
            phone: phone,
            department: department,
            position: position,
        }
        try {
            console.log('멤버확인', member);
            const response = await axios.post('http://localhost:8080/member/insert', member)
            console.log(response.data)
        } catch (error) {

        }
    }
    /* 사원등록 */

    const [memberList, setMemberList] = useState([]);

    const getMemberList = async (e) => {
        try {
            const response = await axios.get('http://localhost:8080/member/list');
            console.log(response.data);
            setMemberList(response.data);
        } catch (error) {

        }
    }

    useEffect(() => {
        getMemberList();
    }, []);

    /* 사원조회  */





    /* 사원조회  */

    return (
        <div className={style.main}>
            <Banner />


            <Leftbar_min />
            <div className={style.container}>
                <div className={style.top_box}>
                    <div className={style.title_wrapper}>
                        <div className={`${style.title_box} ${style.active}`}>

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
                        {memberList.map((member) => (
                            <tr key={member.memberId}>
                                <td>{member.memberId}</td>
                                <td>{member.name}</td>
                                <td>{member.department}</td>
                                <td>{member.position}</td>
                                <td>{member.phone}</td>
                                <td>-</td>
                                <td>{/* 이메일 값 추가 필요 */}</td>
                                <td>-</td>
                                <td className={style.table_btn_wrapper}>
                                    <div className={style.table_btn_box}>
                                        <div>수정</div>
                                        <div>삭제</div>
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

                            <h2>사원 정보를 입력해 주세요.</h2>
                            <hr />
                            <div className={style.form_wrapper}>
                                <form>
                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>아이디</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="text" placeholder="아이디" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
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
                                    <div className={style.input_grid_2}>
                                        <div className={style.input_wrapper}>
                                            <div className={style.label_box}>
                                                <p>이름</p>
                                            </div>
                                            <div className={style.input_box}>
                                                <input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} />
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
                                    </div>

                                    <div className={style.input_grid_2}>
                                        <div className={style.input_wrapper}>
                                            <div className={style.label_box}>
                                                <p>부서</p>
                                            </div>
                                            <div className={style.input_box}>
                                                <select value={department} onChange={(e) => setDepartment(e.target.value)}>
                                                    <option value="사업1팀">사업1팀</option>
                                                    <option value="사업2팀">사업2팀</option>
                                                    <option value="전략기획본부">전략기획본부</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className={style.input_wrapper}>
                                            <div className={style.label_box}>
                                                <p>직급</p>
                                            </div>
                                            <div className={style.input_box}>
                                                <select value={position} onChange={(e) => setPosition(e.target.value)}>
                                                    <option value="사원">사원</option>
                                                    <option value="대리">대리</option>
                                                    <option value="과장">과장</option>
                                                    <option value="차장">차장</option>
                                                    <option value="부장">부장</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={style.input_wrapper}>
                                        <div className={style.label_box}>
                                            <p>사진</p>
                                        </div>
                                        <div className={style.input_box}>
                                            <input type="text" placeholder="사진" />
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

export default Admin_Employee