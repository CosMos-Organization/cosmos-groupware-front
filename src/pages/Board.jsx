import React from 'react'
import Leftbar_min from '../components/Leftbar_min';
import style from "../SCSS/pages/Board.module.scss";
import Banner from '../components/Banner';

const Board = () => {
  return (
    <div className={style.main}>
        <Banner />

        
        <Leftbar_min />
    </div>
  )
}

export default Board