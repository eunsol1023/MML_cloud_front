import React from "react";
import styles from "./menubar.module.css";
import logoImage from "./logo.jpeg";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
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
        <a href="/main" className={styles.menuItem}>
          Home
        </a>
        <a href="/playlist" className={styles.menuItem}>
          Playlsit
        </a>
        {/* <a href="#services" className={styles.menuItem}>
          Services
        </a>
        <a href="#contact" className={styles.menuItem}>
          Contact
        </a> */}
      </div>
    </nav>
  );
}

export default MenuBar;
