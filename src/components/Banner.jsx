import React from 'react'
import style from '../SCSS/components/Banner.module.scss';

const Banner = () => {
    return (
        <div className={style.banner_main}>
            <div className={style.banner_box}>
                <img src='/svg/banner.svg' alt='banner_svg' />
            </div>

        </div>
    )
}

export default Banner