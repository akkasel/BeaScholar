import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import '../../App.css';
import facebookSvg from '../../img/facebook.svg';
import microsoftSvg from '../../img/microsoft.svg';
import googleSvg from '../../img/google.svg';


const ExpertSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed in
      })
      .catch((error) => {
        // Handle errors here.
      });
  };

  // Add methods to handle social login here
  const handleGoogleSignIn = () => {
    // Google sign-in logic
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
      <h1 className="login-heading">Login sebagai Expert</h1>
        <h2>Selamat datang kembali di BeaScholar!</h2>
        
        <div className="input-group">
          <input
            type="email"
            placeholder="Masukan Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i className="fas fa-envelope input-icon"></i>
        </div>
        
        <div className="input-group">
          <input
            type="password"
            placeholder="Masukan Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <i className="fas fa-lock input-icon"></i>
        </div>

        <div className="baru-di-beascholar-container"> 
          <label className="belum-punya-akun-expert">Belum punya akun sebagai Expert? </label>
          <a className="daftar-disini-expert-text" href="/expert-signup">Daftar sebagai Expert disini!</a> {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
        </div>

        <button type="submit">Login sebagai Expert</button>
        
        <div className="social-login">
          <button onClick={handleGoogleSignIn}>
          <img src={googleSvg} alt="Facebook" className="social-icon" />
          </button>
          <button onClick={handleFacebookSignIn}>
          <img src={facebookSvg} alt="Facebook" className="social-icon" />
          </button>
          <button onClick={handleFacebookSignIn}>
          <img src={microsoftSvg} alt="Facebook" className="social-icon" />
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default ExpertSignIn;