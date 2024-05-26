import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth, db, storage } from "../../../firebase"; // import storage from firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // import necessary functions for file upload

const ExpertSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nama, setNama] = useState("");
  const [tingkatPendidikan, setTingkatPendidikan] = useState("");
  const [universitasAtauAlmamater, setUniversitasAtauAlmamater] = useState("");
  const [cv, setCv] = useState(null);
  const [essay, setEssay] = useState(null);
  const [ktp, setKtp] = useState(null);
  const [fotoDiri, setFotoDiri] = useState(null);

  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate(); // to navigate

  // to upload the files
  const uploadFile = async (file) => {
    if (!file) return null;
    // upload to firebase storage bucket named "documents"
    const storageRef = ref(storage, `documents/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const signUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }
    setLoading(true); // Set loading to true
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const linkCV = await uploadFile(cv);
      const linkEssay = await uploadFile(essay);
      const linkKTP = await uploadFile(ktp);
      const linkFotoDiri = await uploadFile(fotoDiri);

      await addDoc(collection(db, "expert"), {
        // uid: user.uid,
        // email,
        nama,
        tingkatPendidikan,
        universitasAtauAlmamater,
        linkCV,
        linkEssay,
        linkKTP,
        linkFotoDiri,
      });

      alert("Pengajuan diri kamu sebagai expert telah kami terima! Tunggu verifikasi dari Admin");
      // TODO : kosongin lagi semua fieldnya setelah submit
      
      
    } catch (error) {
      alert(error);
    }
    setLoading(false); // Set loading to false
  };

  // Handlers for file inputs
  const handleCvChange = (e) => {
    setCv(e.target.files[0]);
  };

  const handleKTPChange = (e) => {
    setKtp(e.target.files[0]);
  };

  const handleEssayChange = (e) => {
    setEssay(e.target.files[0]);
  };

  const handlePhotoChange = (e) => {
    setFotoDiri(e.target.files[0]);
  };

  return (
    <div className="login-page">
      <div className="daftar-expert-container">
        <form onSubmit={signUp}>
          <h1 className="daftar-expert-heading">Daftar sebagai Expert</h1>
          <h2 className="daftar-expert-h2">
            Kewajiban seorang Expert : Interview Pengguna, Analisa Dokumen
            Pengguna, Upload Informasi Beasiswa Terbaru
          </h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Konfirmasi Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <i className="fas fa-user input-icon"></i>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Tingkat Pendidikan"
              value={tingkatPendidikan}
              onChange={(e) => setTingkatPendidikan(e.target.value)}
            />
            <i className="fas fa-graduation-cap input-icon"></i>
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Universitas / Almamater"
              value={universitasAtauAlmamater}
              onChange={(e) => setUniversitasAtauAlmamater(e.target.value)}
            />
            <i className="fas fa-university input-icon"></i>
          </div>

          <span className="text-biasa-di-expert-signup-page">
            Masukan CV kamu disini (.pdf) :
          </span>
          <div className="input-group">
            <input type="file" onChange={handleCvChange} />
            <i className="fas fa-upload input-icon"></i>
          </div>

          <span className="text-biasa-di-expert-signup-page">Foto KTP :</span>
          <div className="input-group">
            <input type="file" placeholder="KTP" onChange={handleKTPChange} />
            <i className="fas fa-id-card input-icon"></i>
          </div>

          <span className="text-biasa-di-expert-signup-page">
            Masukan Essay berisi deskripsi diri dan alasan ingin bergabung
            menjadi Expert di BeaScholar (.docx / .doc / .docs) :
          </span>
          <div className="input-group">
            <input type="file" onChange={handleEssayChange} />
            <i className="fas fa-upload input-icon"></i>
          </div>

          <span className="text-biasa-di-expert-signup-page">Foto diri :</span>
          <div className="input-group">
            <input type="file" onChange={handlePhotoChange} />
            <i className="fas fa-upload input-icon"></i>
          </div>

          <div className="baru-di-beascholar-container">
            <label className="baru-di-beascholar">
              Sudah punya akun sebagai Expert?{" "}
            </label>
            <a className="daftar-disini-text" href="/expert-signin">
              Login sebagai Expert disini!
            </a>{" "}
            {/* Jangan lupa di href nya nanti simpan link untuk ke page Sign Up*/}
          </div>

          <button type="submit" onClick={signUp} disabled={loading}>
          {loading ? "Loading..." : "Daftar sebagai Expert"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpertSignUp;
