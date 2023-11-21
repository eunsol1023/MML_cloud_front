import LoginPageUI from "./login.presenter";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeUserId = (event) => {
        setUserId(event.target.value);
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const onClickRegister = () => {
        navigate('/signup');
    }

    const onHandleSignUpClick = () => {
        // 회원가입 할 때
      };

    const onClickLogin = async () => {
        try {
            const response = await axios.post('http://15.164.46.35:8000/user/login/', {
                username: userId, // 사용자가 입력한 userId 사용
                password: password // 사용자가 입력한 password 사용
            }, {
                withCredentials: true  // 쿠키를 포함하도록 설정
            });

            if (response.status === 200) {
                console.log(response)
                navigate('/home');
            }

        } catch (error) {
            console.log('ERROR', error);
        }
    }

    return (
        <LoginPageUI
            userId={userId}
            password={password}
            onChangeUserId={onChangeUserId}
            onChangePassword={onChangePassword}
            onClickLogin={onClickLogin}
            onClickRegister={onClickRegister}
            onHandleSignUpClick={onHandleSignUpClick}
        />
    );
}
