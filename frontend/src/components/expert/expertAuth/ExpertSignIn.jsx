import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import "../../../App.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ExpertSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const [error, setError] = useState("");
  const [activeField, setActiveField] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/expert-home"); // Navigate to home on success
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
          <h1 className="login-heading">Login sebagai Expert</h1>
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

          <div className="baru-di-beascholar-container">
            <label className="belum-punya-akun-expert">
              Belum punya akun sebagai Expert?{" "}
            </label>
            <a className="daftar-disini-expert-text" href="/expert-signup">
              Daftar sebagai Expert disini!
            </a>{" "}
          </div>

          <button type="submit" class="submit-button" onClick={signIn}>
            Login sebagai Expert
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertSignIn;
