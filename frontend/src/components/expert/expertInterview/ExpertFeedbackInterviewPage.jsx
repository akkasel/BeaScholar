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
              <Link className="link-menu-item" to="/expert-daftar-hasil-analisis-dokumen">
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

export default ExpertFeedbackInterviewPage;
