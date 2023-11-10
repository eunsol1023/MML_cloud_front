import styles from "./signup.module.css";
import SignupPageUI from "./signup.presenter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");

  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }
  
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

    const onClickSubmit =  () => {
        if(!email) {
            alert('이메일을 입력해주세요')
            return
        }
        if(!password) {
            alert('패스워드를 입력해주세요')
            return
        }
        if(!gender) {
            alert('성별을 입력해주세요')
            return
        }
        if(!birthYear || !birthMonth || !birthDay) {
            alert('생년월일을 전부 입력해주세요')
            return
        }

        // API 가 있을때
        // try{
        //     const response = await axios.post('백엔드에서 받는 회원가입 API',{
        //         email ,
        //         password ,
        //         gender ,
        //         birthYear,
        //         birthMonth,
        //         birthDay,
        //     })

        //     if(response.status === 201){
        //         navigate('/다음페이지')
        //     }
        // }catch(error){
        //     console.log('error',error)
        // }

        navigate('/main')
    }  

  return (<SignupPageUI 
    email = {email}
    password = {password}
    passwordConfirm = {passwordConfirm}
    passwordMismatch = {passwordMismatch}
    gender = {gender}
    birthYear = {birthYear}
    birthMonth = {birthMonth}
    birthDay = {birthDay}
    handlePasswordChange = {handlePasswordChange}
    handlePasswordConfirmChange = {handlePasswordConfirmChange}
    handleGenderChange = {handleGenderChange}
    handleBirthYearChange = {handleBirthYearChange}
    handleBirthMonthChange = {handleBirthMonthChange}
    handleBirthDayChange ={handleBirthDayChange}
    onClickSubmit = {onClickSubmit}
    onChangeEmail = {onChangeEmail}
  />
  )
}
