import React from 'react';
import firebase from "firebase/compat/app";
import { GoogleOutlined} from "@ant-design/icons";
import {auth} from '../firebase'

function Login() {
  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return  <div id="login-page">
  <div id="login-card">
    <h2>Welcome to Dee Chat</h2>
    <div
      className="login-button google"
      onClick={signInWithGoogle}
    >
      <GoogleOutlined /> Login with google
    </div>
    
  </div>
</div>
}

export default Login;
