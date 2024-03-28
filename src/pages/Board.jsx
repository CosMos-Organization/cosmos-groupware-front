import React from "react";

import style from "../SCSS/pages/Board.module.scss";
import Banner from "../components/Banner";
import Leftbar_min from "../components/Leftbar_min";
import Board_leftBar from "../components/Board_leftBar";

const Board = () => {
  return (
    <div className={style.main}>
      <Banner />
      <div className={style.flex_wrap}>
        <Leftbar_min />
        <Board_leftBar />
      </div>
    </div>
  );
};

export default Board;
