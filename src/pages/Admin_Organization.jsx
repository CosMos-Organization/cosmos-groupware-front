import React, { useEffect, useRef, useState } from 'react';
import style from '../SCSS/pages/Admin_Organization.module.scss';
import Banner from '../components/Banner';
import Leftbar_min from '../components/Leftbar_min';
import Organization from '../components/Organization';
import Organization_Sub from '../components/Organization_Sub';
import axios from 'axios';

const Admin_Organization = () => {


    const initialTreeData = [
        {
            id: '1',
            label: '(주)코스모스오피스',
            depth: 0,
            type: 'root',
            expand: true,
            children: [
                {
                    id: '2',
                    label: '대표',
                    depth: 1,
                    type: 'department',
                    expand: false,
                    children: [
                        {
                            id: '3',
                            label: '김철수 대표',
                            depth: 2,
                            type: 'employee',
                            expand: false,
                            children: []
                        }
                    ]
                },
                {
                    id: '4',
                    label: 'A 유닛',
                    depth: 1,
                    type: 'department',
                    expand: false,
                    children: []
                },
                {
                    id: '5',
                    label: 'B 유닛',
                    depth: 1,
                    type: 'department',
                    expand: false,
                    children: [
                        {
                            id: '6',
                            label: 'B1 팀',
                            depth: 2,
                            type: 'department',
                            expand: false,
                            children: [
                                {
                                    id: '7',
                                    label: '홍길동 팀장',
                                    depth: 3,
                                    type: 'employee',
                                    expand: false,
                                    children: []
                                },
                                {
                                    id: '8',
                                    label: '이순신 팀원',
                                    depth: 3,
                                    type: 'employee',
                                    expand: false,
                                    children: []
                                },
                            ]
                        }
                    ]
                },
            ]
        }
    ];

    const SubTreeData = [
        {
            id: '2',
            label: '대표',
            depth: 1,
            type: 'department',
            expand: true,
        },
        {
            id: '4',
            label: 'A 유닛',
            depth: 1,
            type: 'department',
            expand: true,
            children: []
        },
        {
            id: '5',
            label: 'B 유닛',
            depth: 1,
            type: 'department',
            expand: true,
            children: [
                {
                    id: '6',
                    label: 'B1 팀',
                    depth: 0.8,
                    type: 'department',
                    expand: true,
                    children: [
                        {
                            id: '7',
                            label: 'B2 팀',
                            depth: 0.8,
                            type: 'department',
                            expand: true,
                            children: []
                        }
                    ]
                }
            ]
        }
    ];



    /* 모달 */


    const inputRef = useRef(null); // ref 생성

    const [showModal_1, setShowModal_1] = useState(false);
    const openModal_1 = () => {
        setShowModal_1(true);
    };

    const closeModal_1 = () => {
        setShowModal_1(false);
    };


    const [showModal_2, setShowModal_2] = useState(false);
    const openModal_2 = () => {
        setShowModal_2(!showModal_2);

    };

    useEffect(() => {
        if (showModal_2) {
            inputRef.current.focus();
        }
    }, [showModal_2]);

    const closeModal_2 = () => {
        setShowModal_2(false);
    };

    /* 모달 */

    const [parentDepart, setParentDepart] = useState('대표');
    const [childDepart, setChildDepart] = useState('');
    const [rank, setRank] = useState('');


    const handdleSubmit_department = async (e) => {
        e.preventDefault();

        const depart = {
            parentDepart: parentDepart,
            childDepart: childDepart,
        }



        try {
            const response = await axios.post('http://localhost:8080/department/insert', depart);
            console.log(response.data);
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
                        <div className={`${style.title_box}`}>
                            <h1>
                                사원 관리
                            </h1>
                        </div>
                        <div className={`${style.title_box} ${style.active}`}>
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
                <div className={style.content_box}>
                    <div className={style.left_box}>
                        <div className={style.button_wrapper}>
                            <div className={style.add_btn} onClick={openModal_1}>
                                부서 등록
                            </div>

                            {showModal_1 && (
                                <div className={style.modal}>
                                    <div className={style.modal_content}>
                                        <div className={style.parent_box}>
                                            <p>상위 부서</p>
                                            <select value={parentDepart} onChange={(e) => setParentDepart(e.target.value)}>
                                                <option value="대표">대표</option>
                                                <option value="A 유닛">A 유닛</option>
                                                <option value="B 유닛">B 유닛</option>
                                            </select>
                                        </div>

                                        <div className={style.child_box}>
                                            <p>부서명</p>
                                            <input type="text" placeholder='부서명' value={childDepart} onChange={(e) => setChildDepart(e.target.value)} />

                                        </div>

                                        <div className={style.button_wrapper}>
                                            <button className={style.cancle_btn} onClick={closeModal_1}>취소</button>
                                            <button className={style.save_btn} onClick={handdleSubmit_department}>저장</button>
                                        </div>


                                    </div>
                                </div>
                            )}



                        </div>
                        <hr />
                        <div className={style.folder_wrapper}>

                            <Organization_Sub initialTreeData={SubTreeData} key='sub' />
                        </div>
                        <hr />
                        <div className={style.button_wrapper}>

                            <div className={style.add_btn} onClick={openModal_2}>
                                직급 등록
                            </div>



                        </div>
                        <hr />
                        <div className={style.rank_wrapper}>
                            <div className={style.rank_box}>
                                <div className={style.rank_title}>
                                    <img src='/org/human.svg' alt='human' />
                                    대표
                                </div>
                            </div>
                            <div className={style.rank_box}>
                                <div className={style.rank_title}>
                                    <img src='/org/human.svg' alt='human' />
                                    A 유닛
                                </div>
                            </div>
                            <div className={style.rank_box}>
                                <div className={style.rank_title}>
                                    <img src='/org/human.svg' alt='human' />
                                    B 유닛
                                </div>
                            </div>
                            <div className={style.rank_box}>
                                <div className={style.rank_title}>
                                    <img src='/org/human.svg' alt='human' />
                                    B1 팀
                                </div>
                            </div>
                            {showModal_2 && (
                                <div className={style.rank_box_add}>
                                    <div className={style.rank_title}>
                                        <img src='/org/human.svg' alt='human' />
                                        <input type="text" value={rank} onChange={(e) => setRank(e.target.value)} />
                                    </div>
                                    <div className={style.button_wrapper_rank}>
                                        <button className={style.cancle_btn} onClick={closeModal_2}>취소</button>
                                        <button className={style.save_btn} >저장</button>
                                    </div>
                                </div>
                            )}
                        </div>


                    </div>

                    <div className={style.right_box}>
                        <div className={style.right_box_top}>
                            <div className={style.fold_wrapper}>
                                <div className={style.fold_title}>
                                    전체펼침
                                </div>
                                <div className={style.fold_title}>
                                    전체접힘
                                </div>
                            </div>
                        </div>
                        <div className={style.right_box_content}>
                            <div className={style.search_wrapper}>
                                <div className={style.depart_btn}>
                                    부서만
                                </div>
                                <div className={style.comb_btn}>
                                    부서 + 사용자
                                </div>
                                <div>
                                    <input type="text" name="" id="" placeholder='검색어입력' />
                                </div>
                            </div>
                            <div className={style.org_component_wrapper}>
                                <Organization initialTreeData={initialTreeData} key='main' />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Admin_Organization