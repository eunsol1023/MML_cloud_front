import SignupPageUI from "./signup.presenter";
// import { useRecoilState } from "recoil";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import styles from "./signup.module.css";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleBirthYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const handleBirthMonthChange = (e) => {
    setBirthMonth(e.target.value);
  };

  const handleBirthDayChange = (e) => {
    setBirthDay(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm || !gender) {
      setPasswordMismatch(true);
    } else {
      setPasswordMismatch(false);
      navigate("/nextPage");
    }
  };

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
      <form className={styles.sWrapper} onSubmit={handleSubmit}>
        <h2>회원가입</h2>
        <div className={styles.inputBox}>
          <div className={styles.idBox}>
            <input type="text" id="userId" placeholder="아이디" />
          </div>
          <br />
          <div className={styles.psBox}>
            <input
              type="password"
              id="password"
              className={styles.input}
              placeholder="비밀번호"
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              id="passwordConfirm"
              className={styles.input}
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
            />
          </div>
          <div className={styles.genderBox}>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={handleGenderChange}
              />
              남자
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={handleGenderChange}
              />
              여자
            </label>
          </div>
          <div className={styles.birthBox}>
            <select
              id="birthYear"
              className={styles.input}
              onChange={handleBirthYearChange}
              value={birthYear}
            >
              <option value="">년도</option>
              {yearOptions}
            </select>
            <select
              id="birthMonth"
              className={styles.input}
              onChange={handleBirthMonthChange}
              value={birthMonth}
            >
              <option value="">월</option>
              {monthOptions}
            </select>
            <select
              id="birthDay"
              className={styles.input}
              onChange={handleBirthDayChange}
              value={birthDay}
            >
              <option value="">일</option>
              {dayOptions}
            </select>
          </div>

          {passwordMismatch && (
            <p className={styles.errorText}>비밀번호가 일치하지 않습니다.</p>
          )}

          <button type="submit">다음 페이지</button>
        </div>
      </form>
    </div>
  );
}
