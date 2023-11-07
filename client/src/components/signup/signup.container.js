import { useNavigate } from "react-router-dom";
import SignupPageUI from "./signup.presenter";
// import axios from "axios";
// import { useState } from "react";

export default function SignupPage() {
  const navigate = useNavigate();

  // const [nickname, setNickname] = useState('')

  const onClickHome = () => {
    navigate("/");
  };

  // const onChangeNickname = (event) => {
  //   setNickname(event.target.value)
  // }

  // const onClickSubmit = async (nickname) => { // nickname을 인자로 받습니다.
  //   try {
  //     const response = await axios.post('http://43.201.172.183/signup/', { 
  //       nickname: nickname
  //     });
  
  //     console.log(response);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  return <SignupPageUI onClickHome = {onClickHome}/>;
}
