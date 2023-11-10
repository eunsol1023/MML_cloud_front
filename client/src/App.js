import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import Categories from "./components/menubar/menubar.js";
import HomePage from "./components/home/home.container.js";
import SignupPage from "./components/signup/signup.container.js";
import Playlist from "./components/playlist/playlist.container.js";
import styles from "./App.module.css";
import Login from "./components/login/login.container";
import ArtistFavorite from "./components/artistfavorite/artistfavorite.container.js";
import GenreFavorite from "./components/genrefavorite/genrefavorite.container.js";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div className={styles.body}>
      <Router>
        <Categories />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/artistfavorite" element = {<ArtistFavorite/>} />
          <Route path="/genrefavorite" element = {<GenreFavorite/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
