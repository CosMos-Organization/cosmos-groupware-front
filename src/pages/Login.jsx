import React from "react";
import style from "../SCSS/pages/Login.module.scss";

const Login = () => {
  return (
    <div className={style.main}>
      <div className={style.left_img}>
        <span>
          <img src="/svg/login.png" alt="login_img" />
        </span>
      </div>
      <div className={style.right_text}>
        <img src="/svg/logo_title_new.svg" alt="logo" />
        <h4>코스모스 그룹웨어 시작하기</h4>
        <p>
          구성원 전체의 협업 및 팀 플레이를 위해 가장 강력한 도구에
          액세스하십시오.
        </p>

        <div className={style.input_wrap}>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <button type="submit">
            <a href="#">로그인</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
