import React, { useState } from "react";
import "../../../App.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../../img/homelogo.svg";
import personlogoSvg from "../../../img/personlogo.svg";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import arrowrightSvg from "../../../img/arrowright.svg";
import pencilSvg from "../../../img/pencil.svg";
import Avatar from "@mui/material/Avatar";
import contohprofileimageSvg from "../../../img/contohprofileimage.svg";
import TopBarExpert from "../../TopBarExpert";
import miclogoSvg from "../../../img/miclogo.svg";
import documentlogoSvg from "../../../img/documentlogo.svg";

const ExpertProfilePage = () => {
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

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
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
              <Link className="link-menu-item" to="/expert-daftar-jadwal-interview">
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
          {/*Header text "Profil Kamu"*/}
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={pencilSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Profil Diri Kamu</h1>
          </div>

          <div className="container-avatar">
            <Avatar
              src={contohprofileimageSvg}
              sx={{ width: 120, height: 120 }}
            />
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Nama</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                label="Masukan nama disini..."
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
            <br></br>

            {/* Tingkat Pendidikan */}
            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan</span>
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-select-tingkat-pendidikan"
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

            {/* Deskripsi Diri */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi Diri (opsional)</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                label="Tulis deskripsi dirimu disini..."
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

            {/* Simpan Button */}
            <div>
              <Button
                variant="contained"
                endIcon={<img src={arrowrightSvg} />}
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

export default ExpertProfilePage;