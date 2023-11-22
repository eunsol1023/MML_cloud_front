import React from "react";
import styles from "./menubar.module.css";
import logoImage from "./logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function getCsrfToken() {
  const cookies = document.cookie.split("; ");
  const csrfCookie = cookies.find((cookie) => cookie.startsWith("csrftoken="));
  if (!csrfCookie) {
    console.warn("CSRF token cookie not found in document.cookie");
  }
  return csrfCookie ? decodeURIComponent(csrfCookie.split("=")[1]) : null;
}

function MenuBar() {
  const navigate = useNavigate();

  const location = useLocation();

  // useEffect (() => {
  //   console.log(location)
  // },[])

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
    const refreshToken = localStorage.getItem("refresh_token");
    try {
      await axios.post("https://api.cloudmml.com/logout", {
        // Ensure correct API endpoint
        refresh_token: refreshToken,
      });

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      // 성공적으로 로그아웃 처리 후 UI 업데이트
    } catch (error) {
      console.error("Logout failed:", error);
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
        {/* <a className={styles.menuItem} onClick={onClickPlayListView}>
          PlayListView
        </a> */}
        <a className={styles.menuItem} onClick={onClickLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
}

export default MenuBar;
