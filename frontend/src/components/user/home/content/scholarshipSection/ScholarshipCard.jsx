import React from "react";
import bcalogoSvg from "../../../../../img/bcalogo.svg";
import { Button } from "@mui/material";

const ScholarshipCard = () => {
  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-top">
          <img src={bcalogoSvg} alt="BCA" className="card-logo" />
          <div className="card-header-badge-container">
            <span className="card-header-badge national">Nasional</span>
            <span className="card-header-badge education-level">
              Beasiswa S1
            </span>
          </div>
        </div>
        <h2 className="card-title">Beasiswa PPTI BCA</h2>
        <p className="card-subtitle">
          Lingkup Beasiswa: Nasional <br /> Tingkat Pendidikan: S1 <br />{" "}
          Penyelenggara: PT. BCA
        </p>
        <Button
          className="card-button"
          href="/scholarship-detail-item"
          variant="contained"
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            width: "100px",
            padding: "5px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to right, #FA6339, #C73950)",
            },

            justifyContent: "center", // Centralized text and icon
            px: 3, // Add some horizontal padding
          }}
        >
          Daftar
        </Button>
      </div>
    </div>
  );
};

export default ScholarshipCard;
