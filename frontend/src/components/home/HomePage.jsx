import React, { useState } from "react";
import "../../App.css";
import TopBar from "../TopBar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../../img/homelogo.svg";
import miclogoSvg from "../../img/miclogo.svg";
import personlogoSvg from "../../img/personlogo.svg";
import documentlogoSvg from "../../img/documentlogo.svg";
import gambarheaderSvg from "../../img/gambarheader.svg";
import kacaPembesarSvg from "../../img/kacapembesar.svg";
import InterviewHistory from "./content/interviewSection/InterviewHistory";
import DocumentHistory from "./content/documentSection/DocumentHistory";
import SearchBar from "./content/SearchBar";
import ScholarshipCard from "./content/ScholarshipCard";

const HomePage = () => {

  // Placeholder data for the cards. Replace with your actual data.
  const scholarshipCardsData = Array(6).fill(0); // Example for 10 cards

  
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="home-page">
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

        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">Amanda</p>
                </div>
                <div class="illustration">
                  <img src={gambarheaderSvg} alt="Illustration" />
                </div>
              </div>
            </div>

            <div className="interview-history-container">
              <InterviewHistory />
              <DocumentHistory />
            </div>
          </div>
          <div class="cari-beasiswa-container">
            <img
              className="logo-kaca-pembesar"
              src={kacaPembesarSvg}
              alt="Illustration"
            />
            <h1 class="cari-beasiswa-text">Cari Beasiswa :</h1>
          </div>

          <div>
            <SearchBar />
          </div>

          {/* Container for the ScholarshipCard components */}
          <div className="list-of-scholarship-card-container">
            {scholarshipCardsData.map((_, index) => (
              <ScholarshipCard key={index} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
