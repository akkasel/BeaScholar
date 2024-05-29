import React, { useState } from "react";
import "../../../App.css";
import TopBarExpert from "../expertMasterPage/TopBarExpert";
import SideBarExpert from "../expertMasterPage/SideBarExpert";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import InterviewHistory from "./content/expertInterviewSection/InterviewHistory";
import DocumentHistory from "./content/expertDocumentSection/DocumentHistory";

const ExpertHomePage = () => {
  
  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="home-page">
        <SideBarExpert /> {/* Render the SideBar component */}

        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">di Beascholar for Expert</p>
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

        </div>
      </div>
    </div>
  );
};

export default ExpertHomePage;