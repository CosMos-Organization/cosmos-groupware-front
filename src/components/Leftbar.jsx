import React from 'react'
import style from '../SCSS/components/leftbar.module.scss';

const Leftbar = () => {
    return (
        <div className={style.left_main}>
            <div className={style.logo_wrapper}>
                <div className={style.logo_box}>
                    <img src='/logo.svg' />
                </div>
                <div className={style.logo_title}>
                    <h1>
                        CosMos
                    </h1>
                    <h2>
                        Office
                    </h2>
                </div>

            </div>
        </div>
    )
}

export default Leftbar