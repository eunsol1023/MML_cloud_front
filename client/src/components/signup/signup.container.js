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
      alert("아이디를 입력해주세요");
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

    try {
      const age_range = `${birthYear}-${birthMonth.padStart(2,"0")}-${birthDay.padStart(2,"0")}`;

      const response = await axios.post(
        "http://15.164.46.35:8000/user/signup/",
        {
          username: userid,
          password:password,
          gender:gender,
          age_range:age_range
        }
      );

      if (response.status === 201) {
        navigate("/genrefavorite");
      }


    } catch (error) {
      if (error.response) {
        // 서버로부터의 응답이 있는 경우
        console.log("Error Response Data:", error.response.data);
        console.log("Error Response Status:", error.response.status);
        console.log("Error Response Headers:", error.response.headers);

        // 에러 메시지를 사용자에게 표시
        alert(
          `An error occurred: ${error.response.status} ${error.response.data.message}`
        );
      } else if (error.request) {
        // 요청이 이루어졌으나 응답을 받지 못한 경우
        console.log("Error Request:", error.request);
      } else {
        // 요청 설정 중에 문제가 발생한 경우
        console.log("Error", error.message);
      }

      console.log(error.config);
    }

    //  navigate("/genrefavorite");
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
