import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../../TopBarAdmin";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../../img/homelogo.svg";
import miclogoSvg from "../../../img/miclogo.svg";
import personlogoSvg from "../../../img/personlogo.svg";
import documentlogoSvg from "../../../img/documentlogo.svg";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import AjuanJadiExpertItem from "./itemVerifikasiExpert/AjuanJadiExpertItem";
import dokumenemotSvg from "../../../img/dokumenemot.svg";
import verifikasilogoSvg from "../../../img/verifikasilogo.svg";
import uploadbeasiswalogoSvg from "../../../img/uploadbeasiswalogo.svg";
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
        {/* Render the SideBar component */}
        {/* Sidebar */}
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
          <Menu
            menuItemStyles={{
              button: {
                // Styling for the active menu item
                "&.active": {
                  backgroundColor: "#772F32",
                  color: "#FFFFFF",
                },
                // Styling for the hover state
                "&:hover": {
                  backgroundColor: "#772F32", // Dark red color
                  color: "#FFFFFF", // White color
                },
              },
            }}
          >
            <MenuItem className="menu-item">
              <img
                src={homelogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-home">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={verifikasilogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-verifikasi">
                Verifikasi
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={uploadbeasiswalogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-upload-beasiswa">
                Beasiswa
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={personlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-profile">
                Profile
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>

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
                <span className="text-interview-orange">1 Maret 2024</span>
              </div>

              <div className="text-interview-container">
                <span className="text-interview">Waktu Pengajuan: </span>
                <span className="text-interview-orange">11.00</span>
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
                    width: "300px",
                    height: "70px",
                    padding: "5px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #E75300, #121212)", // Gradient background
                    "&:hover": {
                      background: "linear-gradient(to right, #E75300, #121212)",
                    },
                  }}
                >
                  Tolak Pengajuan
                </Button>

                <Button
                  variant="contained"
                  endIcon={<img src={arrowrightSvg} />}
                  sx={{
                    fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                    textTransform: "none", // Remove capitalization
                    borderRadius: "20px", // Apply rounded edges
                    width: "300px",
                    height: "70px",
                    padding: "5px",
                    fontWeight: "bold",
                    background: "linear-gradient(to right, #009117, #121212)", // Gradient background
                    "&:hover": {
                      background: "linear-gradient(to right, #009117, #121212)",
                    },

                    justifyContent: "space-between", // Distribute space between text and icon
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
