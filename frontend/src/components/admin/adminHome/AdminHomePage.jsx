import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import SearchBar from "../../SearchBar";
import ScholarshipCardForAdmin from "../adminBeasiswa/scholarshipItem/ScholarshipCardForAdmin";

const AdminHomePage = () => {
  // placeholder data for the cards. Replace with your actual data.
  const scholarshipCardsData = Array(9).fill(0); // example for 6 cards

  return (
    <div>
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="home-page">
        <SideBarAdmin /> {/* Render the SideBar component */}

        {/* Start admin homepage content */}
        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">Daniel</p>
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
