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
                        2
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Admin_Organization