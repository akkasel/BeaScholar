import React, { useState } from "react";
import "../../../App.css";
import TopBarExpert from "../expertMasterPage/TopBarExpert";
import SideBarExpert from "../expertMasterPage/SideBarExpert";
import headphoneSvg from "../../../img/headphone.svg";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import ExpertJadwalInterviewItem from "./expertInterviewItem/ExpertJadwalInterviewItem";
import ExpertJadwalInterviewItemLive from "./expertInterviewItem/ExpertJadwalInterviewItemLive";

const ExpertDaftarJadwalInterviewPage = () => {
  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}
        
        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <div className="interview-header-container">
            <br />
            <img
              className="rocket-icon"
              src={headphoneSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Daftar Sesi Interview</h1>
          </div>

          <div>
          <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                    borderRadius: '16px',
                    padding: '15px',
                    marginBottom: '20px',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF', // white background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // soft shadow
                    position: 'relative', // to position the circle
                    width:'1100px',
                    marginLeft:'80px',
                }}
              >
                <span className="text-filter">Semua Interview</span>
                <span className="text-filter-not-selected">Interview Live</span>
                <span className="text-filter-not-selected">Interview Selesai</span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar >

            </SearchBar>
          </div>

          {/* Ini contoh frontend dari jadwal interview untuk yang Live (saat ini bisa zoom sekarang)
          & yang biasa (yang bukan live, yang bukan live itu artinya belum jam nya) */}
          <ExpertJadwalInterviewItemLive />
          <ExpertJadwalInterviewItem />
          <ExpertJadwalInterviewItem />
          <ExpertJadwalInterviewItem />
          <ExpertJadwalInterviewItem />
         

          {/* Add your input form here */}
        </div>
      </div>
    </div>
  );
};

export default ExpertDaftarJadwalInterviewPage;