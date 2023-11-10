import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/home/home.container";
import SignupPage from "./components/signup/signup.container.js";
import Categories from "./components/menubar/menubar.js";
import Playlist from './components/playlist/playlist.container.js'
import styles from './App.module.css'
import Login from './components/login/login.container'

// import logo from './logo.svg';
// import './App.css';

function App() {
  
  return (
    <div className={styles.body}>
      <Router>
      <Categories />
        <Routes>
          <Route path="/main" element={<HomePage />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/playlist" element={<Playlist />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
