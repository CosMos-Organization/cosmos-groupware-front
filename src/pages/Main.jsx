import React from 'react';
import style from '../SCSS/pages/Main.module.scss';
import Banner from '../components/Banner';
import Leftbar from '../components/Leftbar';

const Main = () => {

    return (
        <div className={style.main}>
            {/* <Banner /> */}
            <Leftbar />

        </div>
    )
}

export default Main