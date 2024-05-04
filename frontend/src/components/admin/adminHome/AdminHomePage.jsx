import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../../TopBarAdmin";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../../img/homelogo.svg";
import miclogoSvg from "../../../img/miclogo.svg";
import personlogoSvg from "../../../img/personlogo.svg";
import documentlogoSvg from "../../../img/documentlogo.svg";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import SearchBar from "../../SearchBar";
import ScholarshipCardForAdmin from "../../ScholarshipCardForAdmin";
import verifikasilogoSvg from "../../../img/verifikasilogo.svg";
import uploadbeasiswalogoSvg from "../../../img/uploadbeasiswalogo.svg";

const AdminHomePage = () => {
  // placeholder data for the cards. Replace with your actual data.
  const scholarshipCardsData = Array(9).fill(0); // example for 6 cards

  return (
    <div>
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="home-page">
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

        {/* Start admin homepage content */}
        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">Jessica</p>
                </div>
                <div class="illustration">
                  <img src={gambarheaderSvg} alt="Illustration" />
                </div>
              </div>
            </div>
          </div>
          <div class="admin-text-beasiswa-container">
            <img
              className="logo-kaca-pembesar"
              src={kacaPembesarSvg}
              alt="Illustration"
            />
            <h1 class="admin-beasiswa-text">
              Daftar Informasi Beasiswa yang telah Kamu Upload
            </h1>
          </div>

          <div>
            <SearchBar />
          </div>

          {/* Container for the ScholarshipCard components */}
          <div className="list-of-scholarship-card-container">
            {scholarshipCardsData.map((_, index) => (
              <ScholarshipCardForAdmin key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
