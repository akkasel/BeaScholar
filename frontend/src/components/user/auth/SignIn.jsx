import React, { useState } from "react";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "../../../firebase";

import '../../../App.css';
import facebookSvg from '../../../img/facebook.svg';
import microsoftSvg from '../../../img/microsoft.svg';
import googleSvg from '../../../img/google.svg';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/home"); // Navigate to home on success
      })
      .catch((error) => {
        // Handle errors here.
        console.log(error);
      });
  };

  // Sign in with Google
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/home"); // Navigate to home on success
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFacebookSignIn = () => {
    // Facebook sign-in logic
  };

  const handleMicrosoftSignIn = () => {
    // Microsoft sign-in logic
  };

  return (
    <div className="login-page">
    <div className="sign-in-container">
      <form onSubmit={signIn}>
      <h1 className="login-heading">Masuk</h1>
        <h2>Selamat datang kembali di BeaScholar!</h2>
        
        <div className="input-group">
          <input
            type="email"
            placeholder="Masukkan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fas fa-envelope input-icon"></i>
        </div>
        
        <div className="input-group">
          <input
            type="password"
            placeholder="Masukkan Kata Sandi"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="baru-di-beascholar-container"> 
          <label className="baru-di-beascholar">Baru di BeaScholar? </label>
          <a className="daftar-disini-text" href="/signup">Daftar di sini!</a> {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
        </div>

        <div className="apakah-kamu-expert-container"> 
          <label className="apakah-kamu-expert">Kamu seorang Expert? </label>
          <a className="login-sebagai-expert" href="/expert-signin">Masuk sebagai Expert!</a>
        </div>

        <button type="submit">Login</button>
        
        <div className="social-login">
          <button onClick={handleGoogleSignIn}>
          <img src={googleSvg} alt="Google" className="social-icon" />
          </button>
          <button onClick={handleFacebookSignIn}>
          <img src={facebookSvg} alt="Facebook" className="social-icon" />
          </button>
          <button onClick={handleMicrosoftSignIn}>
          <img src={microsoftSvg} alt="Microsoft" className="social-icon" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignIn;
