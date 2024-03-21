import React from 'react'
import style from '../SCSS/pages/Admin_Organization.module.scss';
import Banner from '../components/Banner';
import Leftbar_min from '../components/Leftbar_min';
import Organization from '../components/Organization';
import Organization_Sub from '../components/Organization_Sub';

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
                            <div className={style.add_btn}>
                                부서 등록
                            </div>
                            <div className={style.add_btn}>
                                직급 등록
                            </div>
                        </div>
                        <hr />
                        <div className={style.folder_wrapper}>
                            {/* <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                대표
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                A 유닛
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                B 유닛
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                B1 팀
                            </div> */}

                            <Organization_Sub initialTreeData={SubTreeData} key='sub' />



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