import React, { useState } from "react";
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import facebookSvg from '../../../img/facebook.svg';
import microsoftSvg from '../../../img/microsoft.svg';
import googleSvg from '../../../img/google.svg';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    // Tambah logic validasi Password (?)
    // if (validatePassword(password, passwordConfirmation) == true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home"); // navigate to home screen
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Validate whether password and passwordConfirmation are the same
  const validatePassword = (password, passwordConfirmation) => {
    if (password == passwordConfirmation){
      return true;
    }
    return false
  }

  // Add methods to handle social SignUp here
  const handleGoogleSignUp = () => {
    // Google sign-up logic
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home"); // navigate to home screen
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookSignUp = () => {
    // Facebook sign-in logic
  };

  const handleMicrosoftSignUp = () => {
    // Microsoft sign-in logic
  };

  return (
    <div className="login-page">
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1 className="login-heading">Daftar</h1>
        <h2>Siap untuk meraih masa depanmu?</h2>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <i className="fas fa-envelope input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Konfirmasi Kata Sandi"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          ></input>
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="baru-di-beascholar-container"> 
          <label className="baru-di-beascholar">Sudah punya akun BeaScholar? </label>
          <a className="daftar-disini-text" href="/signin">Masuk di sini!</a>
        </div>

        <button type="submit">Daftar</button>

        <div className="social-login">
          <button onClick={handleGoogleSignUp}>
          <img src={googleSvg} alt="Google" className="social-icon" />
          </button>
          <button onClick={handleFacebookSignUp}>
          <img src={facebookSvg} alt="Facebook" className="social-icon" />
          </button>
          <button onClick={handleMicrosoftSignUp}>
          <img src={microsoftSvg} alt="Microsoft" className="social-icon" />
          </button>
        </div>
        
      </form>
    </div>
    </div>
  );
};

export default SignUp;
