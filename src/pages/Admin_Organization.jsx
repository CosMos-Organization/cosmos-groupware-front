import React from 'react'
import style from '../SCSS/pages/Admin_Organization.module.scss';
import Banner from '../components/Banner';
import Leftbar_min from '../components/Leftbar_min';

const Admin_Organization = () => {
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
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                대표
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                사업 1팀
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                사업 2팀
                            </div>
                            <div className={style.folder_box}>
                                <img src="/svg/folder_svg.svg" alt="folder" />
                                사업 3팀
                            </div>
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
                            <div>
                                내용
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Admin_Organization