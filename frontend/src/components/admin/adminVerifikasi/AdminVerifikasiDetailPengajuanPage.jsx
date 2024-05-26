import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import { Button } from "@mui/material";
import arrowleftSvg from "../../../img/arrowleft.svg";
import downloadiconSvg from "../../../img/downloadicon.svg";
import { useNavigate } from "react-router-dom";

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const AdminVerifikasiDetailPengajuanPage = () => {
  const { id } = useParams();
  const [expert, setExpert] = useState(null);

  const navigate = useNavigate(); // to navigate

  // get Expert data by id
  useEffect(() => {
    const fetchExpert = async () => {
      const docRef = doc(db, "expert", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setExpert(docSnap.data());
      } else {
        console.error("Data Expert dengan ID tersebut tidak ditemukan!");
      }
    };

    fetchExpert();
  }, [id]);

  // untuk handle perubahan pada data Expert
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpert((prevExpert) => ({
      ...prevExpert,
      [name]: value,
    }));
  };

  const TolakPengajuan = async () => {
    alert("Pengajuan Expert ini berhasil kamu tolak!");
    await deleteExpert(id); // Pass the id to deleteExpert function
    navigate("/admin-verifikasi");
  };

  // Delete data pengajuan expert
  const deleteExpert = async (id) => {
    const expertDoc = doc(db, "expert", id);
    await deleteDoc(expertDoc);
  };

  const TerimaPengajuan = () => {
    alert("Pengajuan Expert ini berhasil kamu terima!")
  }

  // tampilan jika data Expert belum muncul alias masih loading
  if (!expert) {
    return <div>Loading...</div>;
  }

  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg}></img>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none", // Remove capitalization
          borderColor: "#C4084F",
          backgroundColor: "#FFFF", // Pink color
          color: "#C4084F", // White text color for contrast
          height: "40px", // Set the desired height for the button,
          "&:hover": {
            backgroundColor: "#C4084F", // Slightly lighter pink on hover
            color: "#FFFF",
          },
        }}
      >
        Unduh
      </Button>
    );
  };

  return (
    <div>
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarAdmin /> {/* Render the SideBar component */}
        
        <div className="feedback-interview-page">
          <div className="interview-page-container">
            {/*Header text "Feedback Interview"*/}
            <br />
            <div className="container-feedback-header">
              <Button href="/admin-verifikasi">
                <img
                  className="arrow-back-icon"
                  src={arrowleftSvg}
                  alt="Icon"
                  width={30}
                  height={30}
                />
              </Button>
            </div>

            <div className="container-feedback-title">
              <h1 className="latihan-interview-text">Detail Pengajuan</h1>
            </div>

            {/* Informasi sekilas */}

            <div className="form-input-container">
              <div className="text-interview-container">
                <span className="text-interview">ID Pengajuan: </span>
                <span className="text-interview-orange">{id}</span>
              </div>

              <br />

              <div className="form-container">
                <div className="form-field">
                  <label>Nama:</label>
                  <span className="text-interview-orange">{expert.nama}</span>
                </div>
                <div className="form-field">
                  <label>Tingkat Pendidikan:</label>
                  <span className="text-interview-orange">{expert.tingkatPendidikan}</span>
                </div>
                <div className="form-field">
                  <label>Universitas/Almamater:</label>
                  <span className="text-interview-orange">{expert.universitasAtauAlmamater}</span>
                </div>
              </div>

              <br />

              <div className="form-field">
                <label>Lihat KTP:</label>
                <DownloadButton href={expert.linkKTP}></DownloadButton>
              </div>

              <br />

              <div className="form-field">
                <label>Lihat CV:</label>
                <DownloadButton href={expert.linkCV}></DownloadButton>
              </div>

              <br />

              <div className="form-field">
                <label>
                  Lihat Deskripsi Diri dan Alasan Tertarik menjadi Expert:
                </label>
                <DownloadButton href={expert.linkEssay}></DownloadButton>
              </div>

              <br />

              <div className="button-terima-atau-tolak-container">
                <Button
                  variant="contained"
                  onClick={TolakPengajuan}
                  sx={{
                    fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                    textTransform: "none", // Remove capitalization
                    borderRadius: "20px", // Apply rounded edges
                    width: "200px",
                    height: "40px",
                    padding: "5px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #E75300, #121212)", // Gradient background
                    "&:hover": {
                      background: "linear-gradient(to right, #E75300, #121212)",
                    },

                    justifyContent: "center", // Centralized text and icon
                    px: 3, // Add some horizontal padding
                  }}
                >
                  Tolak Pengajuan
                </Button>

                <Button
                  variant="contained"
                  onClick={TerimaPengajuan}
                  sx={{
                    fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                    textTransform: "none", // Remove capitalization
                    borderRadius: "20px", // Apply rounded edges
                    width: "200px",
                    height: "40px",
                    padding: "5px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #009117, #121212)", // Gradient background
                    "&:hover": {
                      background: "linear-gradient(to right, #009117, #121212)",
                    },

                    justifyContent: "center", // Centralized text and icon
                    px: 3, // Add some horizontal padding
                  }}
                >
                  Terima Pengajuan
                </Button>
              </div>

              {/* Add your input form here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminVerifikasiDetailPengajuanPage;
