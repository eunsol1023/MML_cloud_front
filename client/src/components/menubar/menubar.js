import React from "react";
import styles from "./menubar.module.css";
import logoImage from "./logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function getCsrfToken() {
  const cookies = document.cookie.split("; ");
  const csrfCookie = cookies.find((cookie) => cookie.startsWith("csrftoken="));
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
    try {
      const csrfToken = getCsrfToken();
      if (!csrfToken) {
        console.error("CSRF token not found");
        alert("CSRF token not found. Unable to logout.");
        return;
      }
      console.log("CSRF Token:", csrfToken);

      const response = await axios.post(
        "http://api.cloudmml.com:8000/user/logout/",
        {}, // 요청 본문 (빈 객체)
        {
          withCredentials: true,
          headers: {
            "X-CSRFToken": csrfToken,
          },
        }
      );

      if (response.status === 200) {
        alert("로그아웃 성공");
        navigate("/");
      }
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
        <a className={styles.menuItem} onClick={onClickPlayListView}>
          PlayListView
        </a>
        <a className={styles.menuItem} onClick={onClickLogout}>
          Logout
        </a>
      </div>
    </nav>
  );
}

export default MenuBar;
