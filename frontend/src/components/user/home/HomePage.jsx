import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../../TopBar";
import SideBar from "../../SideBar";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import InterviewHistory from "./content/interviewSection/InterviewHistory";
import DocumentHistory from "./content/documentSection/DocumentHistory";
import SearchBar from "../../SearchBar";
import ScholarshipCard from "../../ScholarshipCard";


const HomePage = () => {

  // placeholder data for the cards. Replace with your actual data.
  const scholarshipCardsData = Array(6).fill(0); // example for 6 cards

  
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="home-page">
        <SideBar /> {/* Render the SideBar component */}

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
