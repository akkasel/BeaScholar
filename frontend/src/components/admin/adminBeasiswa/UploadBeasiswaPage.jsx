import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import togaiconSvg from "../../../img/togaicon.svg";

const UploadBeasiswaPage = () => {
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
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarAdmin /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <br />
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={togaiconSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">
              Unggah Informasi Beasiswa
            </h1>
          </div>

          <br />

          <div className="container-feedback-title">
            <div className="text-interview-container">
              <span className="text-interview">
                Nama atau Judul Program Beasiswa
              </span>
            </div>
            <div>
            <TextField
                label="Tuliskan nama atau judul beasiswa di sini..."
                fullWidth
                id="outlined-textfield-nama"
                variant="outlined"
                width="200px"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              />
            </div>
          </div>

          <br />

          <div className="form-input-container">
            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Lingkup Beasiswa</span>
              </div>
              <TextField
                fullWidth
                id="outlined-select-lingkup-beasiswa"
                select
                defaultValue="Dalam Negeri"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              >
                {lingkupBeasiswa.map((option) => (
                  <MuiMenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MuiMenuItem>
                ))}
              </TextField>
            </div>

            <br />

            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Tingkat Pendidikan</span>
              </div>
              <TextField
                fullWidth
                id="outlined-select-lingkup-beasiswa"
                select
                defaultValue="SMA"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              >
                {tingkatPendidikan.map((option) => (
                  <MuiMenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MuiMenuItem>
                ))}
              </TextField>
            </div>

            <br />

            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Penyelenggara</span>
              </div>
              <div>
                <TextField
                  label="Tuliskan penyelenggara beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                />
              </div>
            </div>

            <br />

            {/* Deskripsi */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                label="Tuliskan deskripsi beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            {/* Manfaat */}
            <div className="text-interview-container">
              <span className="text-interview">Manfaat</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                  label="Jabarkan manfaat beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            {/* Syarat dan Keperluan */}
            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                  label="Jabarkan syarat dan keperluan beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tautan Pendaftaran</span>
            </div>
            <div className="card-link-pendaftaran">
                <TextField
                  label="Sertakan tautan pendaftaran beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                />
            </div>

            <br />

            {/* Unggah Button */}
            <div>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #FA63396, #C73950)",
                  },

                  justifyContent: "center", // Centralized text and icon
                  px: 3, // Add some horizontal padding,
                }}
              >
                Unggah
              </Button>
            </div>
            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBeasiswaPage;
