// import { useRecoilState } from "recoil";
import React from "react";

// import axios from "axios";
import styles from "./signup.module.css";

export default function SignupPageUI(props) {

  const yearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = 1940; year <= currentYear; year++) {
    yearOptions.push(
      <option key={year} value={year}>
        {year}년
      </option>
    );
  }

  const monthOptions = [];
  for (let month = 1; month <= 12; month++) {
    monthOptions.push(
      <option key={month} value={month}>
        {month}월
      </option>
    );
  }

  const dayOptions = [];
  for (let day = 1; day <= 31; day++) {
    dayOptions.push(
      <option key={day} value={day}>
        {day}일
      </option>
    );
  }

  return (
    <div className={styles.body}>
      <div className={styles.sWrapper}>
        <h2>회원가입</h2>
        <div className={styles.inputBox}>
          <div className={styles.idBox}>
            <input onChange={props.onChangeUserId} type="text" id="userId" placeholder="아이디" />
          </div>
          <br />
          <div className={styles.psBox}>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="비밀번호"
              value={props.password}
              onChange={props.handlePasswordChange}
            />
            <input
              type="password"
              id="passwordConfirm"
              className={styles.input}
              placeholder="비밀번호 확인"
              value={props.passwordConfirm}
              onChange={props.handlePasswordConfirmChange}
            />
          </div>
          <div className={styles.genderBox}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={props.handleGenderChange}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={props.handleGenderChange}
              />
              여자
            </label>
          </div>
          <div className={styles.birthBox}>
            <select
              id="birthYear"
              className={styles.input}
              onChange={props.handleBirthYearChange}
              value={props.birthYear}
            >
              <option value="">년도</option>
              {yearOptions}
            </select>
            <select
              id="birthMonth"
              className={styles.input}
              onChange={props.handleBirthMonthChange}
              value={props.birthMonth}
            >
              <option value="">월</option>
              {monthOptions}
            </select>
            <select
              id="birthDay"
              className={styles.input}
              onChange={props.handleBirthDayChange}
              value={props.birthDay}
            >
              <option value="">일</option>
              {dayOptions}
            </select>
          </div>

          {props.passwordMismatch && (
            <p className={styles.errorText}>비밀번호가 일치하지 않습니다.</p>
          )}

          <button onClick={props.onClickSubmit} >다음 페이지</button>
        </div>
      </div>
    </div>
  );
}
