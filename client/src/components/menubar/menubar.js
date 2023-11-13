import React from "react";
import styles from "./menubar.module.css";
import logoImage from "./logo.jpeg";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const navigate = useNavigate();

  const onClickHome = () => {
    navigate("/");
  };

  const onClickRedirectMain = () => {
    navigate("/home");
  };

  const onClickRedirectPlaylist = () => {
    navigate("/playlist");
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
        <a className={styles.menuItem} onClick={onClickRedirectMain}>
          Home
        </a>
        <a className={styles.menuItem} onClick={onClickRedirectPlaylist}>
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
