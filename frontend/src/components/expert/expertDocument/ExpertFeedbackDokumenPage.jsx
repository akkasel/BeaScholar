import React, { useState } from "react";
import "../../../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import TopBarExpert from "../../TopBarExpert";
import SideBarExpert from "../../SideBarExpert";
import downloadiconSvg from "../../../img/downloadicon.svg";

const ExpertFeedbackDokumenPage = () => {
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
          width: "1000px",
          height: "50px", // Set the desired height for the button,
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
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Feedback Interview"*/}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/expert-daftar-hasil-analisis-dokumen">
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
            <h1 className="latihan-interview-text">Analisa Dokumen Terkait</h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            {/* Hal yang perlu direvisi */}
            <div className="text-interview-container">
              <span className="text-interview">Dokumen Terkait:</span>
            </div>

            <DownloadButton></DownloadButton>

            <br />
            <br />

            {/* Hasil Analisa */}
            <div className="text-interview-container">
              <span className="text-interview">Hasil Analisa</span>
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

            {/* Hal yang perlu direvisi */}
            <div className="text-interview-container">
              <span className="text-interview">Hal yang perlu direvisi</span>
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
              <span className="text-interview">Catatan tambahan</span>
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

export default ExpertFeedbackDokumenPage;
