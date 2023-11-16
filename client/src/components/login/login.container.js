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

    const onClickLogin = async () => {
        try {
            const response = await axios.post('백엔드에서 주는 API', {
                userId: userId, // 사용자가 입력한 userId 사용
                password: password // 사용자가 입력한 password 사용
            });

            if (response.status === 201) {
                alert('로그인완료');
                navigate('/main');
            } else {
                alert(response.message);
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
        />
    );
}
