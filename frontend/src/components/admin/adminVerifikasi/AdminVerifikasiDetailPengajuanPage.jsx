import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../../TopBarAdmin";
import SideBarAdmin from "../../SideBarAdmin";
import { Button } from "@mui/material";
import arrowleftSvg from "../../../img/arrowleft.svg";
import arrowrightSvg from "../../../img/arrowright.svg";
import downloadiconSvg from "../../../img/downloadicon.svg";

const AdminVerifikasiDetailPengajuanPage = () => {
  const DownloadButton = () => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg}></img>}
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
        Download
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
                <span className="text-interview-orange">20219211</span>
              </div>
              <div className="text-interview-container">
                <span className="text-interview">Tanggal Pengajuan: </span>
                <span className="text-interview-orange">28 Februari 2024</span>
              </div>

              <div className="text-interview-container">
                <span className="text-interview">Waktu Pengajuan: </span>
                <span className="text-interview-orange">15:00</span>
              </div>

              <br />

              <div className="form-container">
                <div className="form-field">
                  <label>Nama:</label>
                  <input type="text" placeholder="Rico" />
                </div>
                <div className="form-field">
                  <label>Tingkat Pendidikan:</label>
                  <input type="text" placeholder="S2" />
                </div>
                <div className="form-field">
                  <label>Universitas:</label>
                  <input type="text" placeholder="BINUS University" />
                </div>
              </div>

              <br />

              <div className="form-field">
                <label>Lihat KTP:</label>
                <DownloadButton></DownloadButton>
              </div>

              <br />

              <div className="form-field">
                <label>Lihat CV:</label>
                <DownloadButton></DownloadButton>
              </div>

              <br />

              <div className="form-field">
                <label>
                  Lihat Deskripsi Diri dan Alasan Tertarik menjadi Expert:
                </label>
                <DownloadButton></DownloadButton>
              </div>

              <br />

              <div className="button-terima-atau-tolak-container">
                <Button
                  variant="contained"
                  sx={{
                    fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                    textTransform: "none", // Remove capitalization
                    borderRadius: "20px", // Apply rounded edges
                    width: "200px",
                    height: "50px",
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
                  sx={{
                    fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                    textTransform: "none", // Remove capitalization
                    borderRadius: "20px", // Apply rounded edges
                    width: "200px",
                    height: "50px",
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
