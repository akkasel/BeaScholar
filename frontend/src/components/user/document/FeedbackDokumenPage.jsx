import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../../TopBar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../../img/homelogo.svg";
import miclogoSvg from "../../../img/miclogo.svg";
import personlogoSvg from "../../../img/personlogo.svg";
import documentlogoSvg from "../../../img/documentlogo.svg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";

const FeedbackDokumenPage = () => {
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        {/* Render the SideBar component */}
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
          <Menu
            menuItemStyles={{
              button: {
                // Styling for the active menu item
                "&.active": {
                  backgroundColor: "#772F32", // Change this to the desired color
                  color: "#FFFFFF", // Change this to the desired color
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
              <Link className="link-menu-item" to="/home">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={miclogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/interview">
                Interview
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={documentlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/document">
                Dokumen
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
              <Link className="link-menu-item" to="/profile">
                Profile
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>

        <div className="interview-page-container">
          {/*Header text "Feedback Dokumen"*/}
          <div className="container-feedback-header">
            <br />
            <Button href="/daftar-hasil-analisis-dokumen">
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
            <h1 className="latihan-interview-text">
              Hasil Analisa Dokumen Kamu
            </h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Tanggal Pengumpulan: </span>
              <span className="text-interview-orange">1 Maret 2024</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Waktu: </span>
              <span className="text-interview-orange">11.00</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Interviewer / Expert: </span>
              <span className="text-interview-orange">Ms. Leony</span>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Hasil Analisa</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>
                      Pemohon memiliki pemahaman yang mendalam tentang topik
                      yang dibahas, menunjukkan komitmen yang kuat terhadap
                      pendidikan, serta kemampuan untuk mengemukakan gagasan
                      secara jelas dan persuasif.
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">Hal yang perlu direvisi</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>
                      1. Kehalusan dan Konsistensi: Memastikan keseluruhan
                      tulisan memiliki alur yang lancar dan konsisten dalam
                      penggunaan bahasa dan gagasan.
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan dari Interviewer
              </span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>Tidak ada</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDokumenPage;
