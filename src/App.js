import React from "react"; 
import './App.css';

import 'bulma/css/bulma.min.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Home from './pages/Home';
import Newsfeed from './pages/Newsfeed';
import Meetup from './pages/Meetup';
import About from './pages/About';
import Login from './pages/Login';

import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

import { BrowserRouter as Router, Routes, Route, Link}
    from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <div class="header-wrapper">
        <Header />
      </div>
      
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path='/Newsfeed' element={<Newsfeed/>} />
            <Route path="/Meetup" element={<Meetup/>} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
            {/* <Route path='/Newsfeed' element={<Newsfeed isAuth={isAuth}/>} /> */}
            {/* <Route path="/Meetup" element={<Meetup isAuth={isAuth} />} /> */}
            {/* <Route path="/user" element={<UserInfo isAuth={isAuth} /> }/> */}


        </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
