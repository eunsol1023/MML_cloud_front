import LoginPageUI from "./login.presenter";
import React , {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function LoginPage() {
    const navigate = useNavigate();

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUserId = (event) => {
        /* 유저아이디 변경 */
        setUserId(event.target.value)
    }

    const onChangePassword = (event) => {
        /* 유저비밀번호  변경 */
        setPassword(event.target.value)
    }

    const onClickRegister = () => {
        navigate('/signup')
    }

    const onClickLogin = async () => {
        try{
            const response = await axios.post('백엔드에서 주는 API',{
                userId : '입력한 userId',
                password : '입력한 password'
            })
    
            if (response.status === 201){
                alert('로그인완료')
                navigate('/main')
            }else{
                alert(response.message)
            }

        }catch(error){
            console.log('ERROR',error)
        }
        
    }

    return (
    <LoginPageUI
        onClickRegister ={onClickRegister}
     />
    )
}
