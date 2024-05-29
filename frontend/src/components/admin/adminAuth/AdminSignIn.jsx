import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "../../../App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import facebookSvg from "../../../img/facebook.svg";
import microsoftSvg from "../../../img/microsoft.svg";
import googleSvg from "../../../img/google.svg";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // to navigate

  const [error, setError] = useState("");
  const [activeField, setActiveField] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/admin-home"); // Navigate to home on success
      })
      .catch((error) => {
        // Handle errors here.
        console.log(error);
      });
  };

  return (
    <div className="login-page">
      <div className="sign-in-container">
        <form onSubmit={signIn}>
          <h1 className="login-heading">Login sebagai Admin</h1>
          <h2>Selamat datang kembali di BeaScholar!</h2>

          <div
            className={`input-group ${activeField === "email" ? "active" : ""}`}
          >
            <input
              type="email"
              placeholder="Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setActiveField("email")}
              onBlur={() => setActiveField("")}
            />
            <i className="fas fa-envelope input-icon"></i>
          </div>

          <div
            className={`input-group ${
              activeField === "password" ? "active" : ""
            }`}
          >
            <input
              type="password"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setActiveField("password")}
              onBlur={() => setActiveField("")}
            />
            <i className="fas fa-lock input-icon"></i>
          </div>

          <div className="apakah-kamu-expert-container">
            <label className="apakah-kamu-expert">
              Belum punya akun sebagai Admin?{" "}
            </label>
            <a className="login-sebagai-expert" href="/admin-signup">
              Daftar disini!
            </a>{" "}
            {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
          </div>

          <button type="submit" class="submit-button" onClick={signIn}>
            Login sebagai admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignIn;
