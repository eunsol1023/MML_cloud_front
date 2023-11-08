import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/home/home.container";
import SignupPage from "./components/signup/signup.container";
import Categories from "./components/menubar/menubar.js";
import styles from './App.module.css'

// import logo from './logo.svg';
// import './App.css';

function App() {
  
  return (
    <div className={styles.body}>
      
      <Router>
      <Categories />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<login />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/board" element={<board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
