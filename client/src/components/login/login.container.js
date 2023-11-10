import LoginPageUI from "./login.presenter";
import React from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.css";
import idIcon from "../../img/id.png";
import imgIcon from '../../img/img2.png';
import psIcon from "../../img/lock.png";


export default function LoginPage() {
    const handleLoginSubmit = (event) => {
        event.preventDefault();
        // 로그인 했을때
    };

    const handleSignUpClick = () => {
        // 회원가입 할 때
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.imgBox}>
                <img src={imgIcon} className="imgIcon" alt="icon" />
            </div>
            <div className={styles.inputBox}>
                <div className={styles.idBox}>
                    <img src={idIcon} className={styles.idIcon} alt="id" />
                    <input
                        type="text"
                        id="ID"
                        placeholder="아이디를 입력해주세요"
                    />
                </div>
                <br />
                <div className={styles.psBox}>
                    <img src={psIcon} className={styles.psIcon} alt="ps" />
                    <input
                        type="password"
                        id="PASSWORD"
                        className={styles.input}
                        placeholder="비밀번호를 입력해주세요"
                    />
                </div>
            </div>
            <div className={styles.bBox}>
                <button type="submit" className={styles.button}>
                    <span className={styles.logSpan}>로그인</span>
                </button>
            </div>
            <div className={styles.signUpBox}>
                <button type="button" className={styles.signButton} onClick={handleSignUpClick}>
                    <span className={styles.signSpan}>회원가입하러 가기 →</span>
                </button>
            </div>
       </div>
    )
}