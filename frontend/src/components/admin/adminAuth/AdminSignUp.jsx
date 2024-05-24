import React, { useState } from "react";
import { auth } from "../../../firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const AdminSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate(); // to navigate

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      navigate("/admin-home"); // navigate to home screen
      // Further processing for file uploads goes here
    } catch (error) {
      console.log(error);
    }
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
              value={confirmPassword}
              type="password"
              placeholder="Konfirmasi Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            >
            </input>
            <i className="fas fa-lock input-icon"></i>
          </div>

          <div className="baru-di-beascholar-container">
            <label className="baru-di-beascholar">
              Sudah punya akun sebagai Admin?{" "}
            </label>
            <a className="daftar-disini-text" href="/admin-signin">
              Login disini!
            </a>{" "}
            {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
          </div>

          <button type="submit" onClick={signUp}>
            Daftar sebagai Admin
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminSignUp;
