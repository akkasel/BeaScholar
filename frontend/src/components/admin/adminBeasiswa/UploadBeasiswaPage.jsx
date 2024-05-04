import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../../TopBarAdmin";
import SideBarAdmin from "../../SideBarAdmin";
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

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Nama Beasiswa</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                label="Ketik nama beasiswa disini..."
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

            {/* Lingkup Beasiswa */}
            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa</span>
            </div>
            <div>
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

            {/* Jenis Interview*/}
            <div className="text-interview-container">
              <span className="text-interview">Jenis Tingkatan Beasiswa</span>
            </div>
            <div>
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #C4084F !important",
                  borderColor: "#C4084F !important",
                }}
              >
                <FormGroup sx={{ marginLeft: "10px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S2"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S3"
                  />
                </FormGroup>
              </Card>
            </div>

            <br />

            {/* Pihak Penyelenggara */}
            <div className="text-interview-container">
              <span className="text-interview">
                Pihak Penyelenggara Beasiswa
              </span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                label="Tulis pihak penyedia beasiswa disini..."
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

            {/* Deskripsi dan Syarat */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi dan Syarat</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                label="Tulis deskripsi serta syarat beasiswa disini..."
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

            {/* Link atau Website Pendaftaran */}
            <div className="text-interview-container">
              <span className="text-interview">Link atau Website Pendaftaran</span>
            </div>
            <div className="">
              <TextField
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
            <br />

            {/* Unggah Button */}
            <div>
              <Button
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "10px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #FA63396, #C73950)",
                  },

                  justifyContent: "center", // Centralized text and icon
                  px: 3, // Add some horizontal padding
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
