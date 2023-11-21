import React , {useEffect} from "react";
import styles from "./menubar.module.css";
import logoImage from "./logo.jpeg";
import { useNavigate , useLocation } from "react-router-dom";
import axios from 'axios';


function MenuBar() {
  const navigate = useNavigate();

  const location = useLocation(); 
  
  useEffect (() => {
    console.log(location)
  },[])
  
  const onClickHome = () => {
    navigate("/home");
  };

  const onClickPlayList = () => {
    navigate("/playlist");
  };

  const onClickPlayListView = () => {
    navigate("/playlistview");
  };

  const onClickLogout = async () => {
    try {
     const  response = await axios.post('/logout_user'); // 서버의 로그아웃 엔드포인트를 가정
      // 로그아웃 성공 후 처리, 예: 로그인 페이지로 리디렉션
      if(response.status === 200){ 
        alert("로그인 성공")
        navigate("/");
      }
      
    } catch (error) {
      console.error('Logout failed:', error);
      // 에러 처리, 예: 사용자에게 로그아웃 실패 메시지 표시
    }
  };
  

  return (
    <nav className={styles.menuBar}>
      <div className={styles.logoContainer}>
        <img
          src={logoImage}
          alt="MML Logo"
          className={styles.logo}
          onClick={onClickHome}
        />
      </div>
      <div className={styles.menubox}>

        <a className={styles.menuItem} onClick={onClickHome}>
          Home
        </a>
        <a className={styles.menuItem} onClick={onClickPlayList}>
          PlayList
        </a>
        <a className={styles.menuItem} onClick={onClickPlayListView}>
          PlayLiseView
        </a>
        <a className={styles.menuItem} onClick={onClickLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
}

export default MenuBar;
