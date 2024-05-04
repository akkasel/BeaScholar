import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../../firebase";

import facebookSvg from '../../../img/facebook.svg';
import microsoftSvg from '../../../img/microsoft.svg';
import googleSvg from '../../../img/google.svg';

const AdminSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Add methods to handle social SignUp here
  const handleGoogleSignUp = () => {
    // Google sign-in logic
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
        <h1 className="daftar-sebagai-admin-heading">Daftar sebagai Admin</h1>

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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Konfirmasi Password"
          ></input>
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="baru-di-beascholar-container"> 
          <label className="baru-di-beascholar">Sudah punya akun sebagai Admin? </label>
          <a className="daftar-disini-text" href="/admin-signin">Login disini!</a> {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
        </div>

        <button type="submit">Daftar sebagai Admin</button>

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

export default AdminSignUp;