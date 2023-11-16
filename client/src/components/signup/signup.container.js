import styles from "./signup.module.css";
import SignupPageUI from "./signup.presenter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [userid, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

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

  const onClickSubmit = async () => {
    if (!userid) {
      alert("이메일을 입력해주세요");
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordMismatch(true);
      alert("비밀번호가 일치하지 않습니다");
      return;
    }
    if (!gender) {
      alert("성별을 입력해주세요");
      return;
    }
    if (!birthYear || !birthMonth || !birthDay) {
      alert("생년월일을 전부 입력해주세요");
      return;
    }

    // API 가 있을때
    try {
      const response = await axios.post('백엔드에서 받는 회원가입 API', {
          userid,
          password,
          gender,
          birthYear,
          birthMonth,
          birthDay,
      });

        if(response.status === 201){
            navigate('/genrefavorite')
        }
    }catch(error){
        console.log('error',error)
    }

    // navigate("/genrefavorite");
  };

  return (
    <SignupPageUI 
        userid={userid}
        password={password}
        passwordConfirm={passwordConfirm}
        passwordMismatch={passwordMismatch}
        gender={gender}
        birthYear={birthYear}
        birthMonth={birthMonth}
        birthDay={birthDay}
        handlePasswordChange={handlePasswordChange}
        handlePasswordConfirmChange={handlePasswordConfirmChange}
        handleGenderChange={handleGenderChange}
        handleBirthYearChange={handleBirthYearChange}
        handleBirthMonthChange={handleBirthMonthChange}
        handleBirthDayChange={handleBirthDayChange}
        onClickSubmit={onClickSubmit}
        onChangeUserId={onChangeUserId}
    />
);
}
