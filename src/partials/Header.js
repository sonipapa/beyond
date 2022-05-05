import React from "react"; 
import 'bulma/css/bulma.min.css';
import logo from '../img/tcs-color.png';
import { Button, Navbar, Section } from 'react-bulma-components';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut} from "firebase/auth";

function Header(){
    const [isActive, setisActive] = React.useState(false);
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const auth = getAuth();

    
    // const createEntry = () => {
    //     window.location.href = "/createpost";
    // }
    const signUserOut = () => {
        signOut(auth).then(() => {
          localStorage.clear();
          setIsAuth(false);
          window.location.pathname = "/login";
        });
      };

    // get user display name and other information
    const [currentUser, setCurrentUser] = useState();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setCurrentUser(user);
            const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });
    return (
      
        <Navbar>
        <Navbar.Brand>
          <Navbar.Item renderAs="a" href="/">
            <img 
              src={logo} width="50" height="50"
              alt="TCS Beyond"
            />
          </Navbar.Item>
          <a
            onClick={() => {
              setisActive(!isActive)
              }} 
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu" aria-expanded="false" data-target="navbarMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
        </Navbar.Brand>

        <div id="navbarMenu" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <Navbar.Container>
            <Navbar.Item href="Newsfeed">NEWSFEED</Navbar.Item>
            <Navbar.Item href="Meetup">MEETUP</Navbar.Item>
            <Navbar.Item href="About">ABOUT</Navbar.Item>
          </Navbar.Container>
          <Navbar.Container class="navbar-end">
              
              {!isAuth ? (
                <Navbar.Item>
                <Link to="Login">
                <Button color="is-light">LOG IN OR SIGN UP</Button>
                </Link>
                </Navbar.Item>
              ) : (
                <><Navbar.Item href="User">
                  {currentUser && <p>{currentUser.displayName}</p>}
                </Navbar.Item>
                <Navbar.Item>
                <Button color="is-light" onClick={signUserOut}>Log Out</Button>
                </Navbar.Item>
                </>
              )}
              </Navbar.Container>
        </div>
      </Navbar>
    );
};

export default Header;