import styles from "./login.module.css";
import React, { useState, useEffect } from "react";
import idIcon from "./id.png";
import imgIcon from "./img2.png";
import psIcon from "./lock.png";

export default function LoginPageUI(props) {
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {}, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    props.onClickLogin(event, csrfToken);
  };

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.imgBox}>
          <img src={imgIcon} className={styles.imgIcon} alt="icon" />
        </div>
        <form onSubmit={handleLoginSubmit} className={styles.inputBox}>
          <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
          <div className={styles.idBox}>
            <img src={idIcon} className={styles.idIcon} alt="id" />
            <input
              className={styles.inputtext}
              type="text"
              id="ID"
              placeholder="아이디를 입력해주세요"
              onChange={props.onChangeUserId}
              value={props.username}
            />
          </div>
          <br />
          <div className={styles.psBox}>
            <img src={psIcon} className={styles.psIcon} alt="ps" />
            <input
              type="password"
              id="PASSWORD"
              className={styles.inputtext}
              placeholder="비밀번호를 입력해주세요"
              onChange={props.onChangePassword}
              value={props.password}
            />
          </div>
          <div className={styles.bBox}>
            <button type="submit" className={styles.button}>
              <span className={styles.logSpan}>로그인</span>
            </button>
          </div>
        </form>

        <div className={styles.signUpBox}>
          <button
            type="button"
            className={styles.signButton}
            onClick={props.handleSignUpClick}
          >
            <span onClick={props.onClickRegister} className={styles.signSpan}>
              회원가입하러 가기 →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

