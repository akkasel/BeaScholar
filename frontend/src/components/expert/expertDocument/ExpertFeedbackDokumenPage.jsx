import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../../TopBar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../../img/homelogo.svg";
import miclogoSvg from "../../../img/miclogo.svg";
import personlogoSvg from "../../../img/personlogo.svg";
import documentlogoSvg from "../../../img/documentlogo.svg";
import rocketSvg from "../../../img/rocket.svg";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import arrowrightSvg from "../../../img/arrowright.svg";
import arrowleftSvg from "../../../img/arrowleft.svg";
import TopBarExpert from "../../TopBarExpert";
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
        Download
      </Button>
    );
  };

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
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
              <Link className="link-menu-item" to="/expert-home">
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
              <Link
                className="link-menu-item"
                to="/expert-daftar-jadwal-interview"
              >
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
              <Link
                className="link-menu-item"
                to="/expert-daftar-hasil-analisis-dokumen"
              >
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
              <Link className="link-menu-item" to="/expert-profile">
                Profile
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>

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
                endIcon={<img src={arrowrightSvg} />}
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "10px", // Apply rounded edges
                  width: "200px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to right, #FA6339, #C73950)",
                  },

                  justifyContent: "space-between", // Distribute space between text and icon
                  position: "absolute",
                  right: 200,
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
