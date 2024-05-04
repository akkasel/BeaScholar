import React, { useState } from "react";
import "../../../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import TopBarExpert from "../../TopBarExpert";
import SideBarExpert from "../../SideBarExpert";

const ExpertFeedbackInterviewPage = () => {
  // untuk textfield tingkat pendidikan
  const tingkatPendidikan = [
    {
      value: "SMA",
      label: "SMA",
    },
    {
      value: "SMK",
      label: "SMK",
    },
    {
      value: "S1",
      label: "S1",
    },
    {
      value: "S2",
      label: "S2",
    },
    {
      value: "S3",
      label: "S3",
    },
  ];

  // untuk textfield lingkup beasiswa
  const lingkupBeasiswa = [
    {
      value: "Dalam Negeri",
      label: "Dalam Negeri",
    },
    {
      value: "Luar Negeri",
      label: "Luar Negeri",
    },
  ];

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Feedback Interview"*/}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/expert-daftar-jadwal-interview">
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
            <h1 className="latihan-interview-text">Feedback Interview</h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Tanggal Interview: </span>
              <span className="text-interview-orange">1 Maret 2024</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Waktu: </span>
              <span className="text-interview-orange">11.00</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Identitas Peserta: </span>
              <span className="text-interview-orange">Amanda</span>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Masukan Positif</span>
            </div>

            <div className="text-field-feedback-expert-container">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "auto",
                    fontSize: "1.2rem", // Increase font size to match the increased height
                    alignItems: "left",
                    border: "2px solid #FF6C37",
                    borderRadius: "10px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px", // Adjust the padding to position the text correctly
                    alignItems: "left",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
                multiline // Add this prop to enable multiple lines
              />
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">
                Hal yang perlu ditingkatkan
              </span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "auto",
                    fontSize: "1.2rem", // Increase font size to match the increased height
                    alignItems: "left",
                    border: "2px solid #FF6C37",
                    borderRadius: "10px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px", // Adjust the padding to position the text correctly
                    alignItems: "left",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
                multiline // Add this prop to enable multiple lines
              />
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan dari Interviewer
              </span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "auto",
                    fontSize: "1.2rem", // Increase font size to match the increased height
                    alignItems: "left",
                    border: "2px solid #FF6C37",
                    borderRadius: "10px",
                  },
                  "& .MuiOutlinedInput-input": {
                    padding: "10px", // Adjust the padding to position the text correctly
                    alignItems: "left",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
                multiline // Add this prop to enable multiple lines
              />
            </div>

            <br />

            {/* Simpan Button */}
            <div>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "10px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to right, #FA6339, #C73950)",
                  },

                  justifyContent: "center", // Centralized text and icon
                  position: "absolute",
                  right: 100,
                }}
              >
                Simpan
              </Button>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertFeedbackInterviewPage;
