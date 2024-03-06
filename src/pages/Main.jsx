import React from 'react';
import style from '../SCSS/pages/main.module.scss';
import Leftbar from '../components/Leftbar';
import Leftbar_min from '../components/Leftbar_min';
import Banner from '../components/Banner';

const Main = () => {

    return (
        <div className={style.main}>
            <Banner/>
            {/* <Leftbar /> */}
            <Leftbar_min/>
            Main
        </div>
    )
}

export default Main