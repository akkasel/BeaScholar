import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";

const FeedbackDokumenPage = () => {
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBar /> {/* Render the SideBar component */}

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
              <span className="text-interview-orange">28 Februari 2024</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Waktu: </span>
              <span className="text-interview-orange">15:00</span>
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
