import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import HomePage from "./components/home/home.container";
import SignupPage from "./components/signup/signup.container";

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<HomePage />}/>
        <Route path = '/login' element = {<login/>}/>
        <Route path = '/signup' element = {<SignupPage />}/>
        <Route path = '/board' element = {<board/>}/>
      </Routes>
    </Router>
  );
}


export default App;
