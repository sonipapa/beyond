import React from 'react';
import { auth, provider} from '../firebase-config'
import {applyActionCode, signInWithPopup} from 'firebase/auth';
import { useNavigate} from "react-router-dom";
import GoogleButton from 'react-google-button';
import logo from '../img/tcs-color.png';


function Login({ setIsAuth}) {
 
  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      
      localStorage.setItem("isAuth", true);
       setIsAuth(true); 
       navigate("/Newsfeed");
    })
  };
  return (
    <div className="loginPage primary-background">
      <div class="box is-centered">
        <div class="section">
        <img 
          src={logo} width="100" height="100"
          alt="TCS Beyond"
        />
        </div>
        <p>Sign In With Google to Continue</p>
        <GoogleButton type="light" onClick={signInWithGoogle}/>
        {/* <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with google</button> */}
      </div>
    </div>
    
  );
}

export default Login;