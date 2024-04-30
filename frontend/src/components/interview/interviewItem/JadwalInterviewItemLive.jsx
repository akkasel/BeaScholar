import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import contohprofileimageSvg from "../../../img/contohprofileimage.svg"; // Import your profile image
import arrowrightSvg from "../../../img/arrowright.svg";

const JadwalInterviewItemLive = () => {
  return (
    <Card
      className="checkbox-card-container"
      variant="outlined"
      sx={{
        borderRadius: "16px",
        padding: "10px",
        marginBottom: "20px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF", // white background
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // soft shadow
        position: "relative", // to position the circle
        width: "1100px",
        marginLeft: "80px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Profile Image"
            src={contohprofileimageSvg}
            style={{ width: "80px", height: "80px" }}
          />
        }
      ></CardHeader>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Nama:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">Amanda</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Tingkat Pendidikan:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">S1</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Lingkup Beasiswa:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">Internasional</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Jenis Beasiswa:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">Beasiswa S2</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Tanggal/Waktu:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">29 Feb/11.00 WIB</span>
        </div>
      </div>

      <div className="container-button-jadwal-interview-item">
        <Button
          variant="contained"
          endIcon={<img src={arrowrightSvg} />}
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            width: "200px",
            padding: "0px",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #940566, #C70E4E)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to bottom, #940566, #C70E4E)",
            },

            justifyContent: "space-between", // Distribute space between text and icon
            px: 3, // Add some horizontal padding
          }}
        >
          Interview Sekarang
        </Button>
      </div>
    </Card>
  );
};

export default JadwalInterviewItemLive;
