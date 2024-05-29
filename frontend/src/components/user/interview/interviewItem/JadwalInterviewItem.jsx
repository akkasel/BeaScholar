import React from "react";
import { Card, CardHeader, Avatar, Button } from "@mui/material";
import contohprofileimageSvg from "../../../../img/contohprofileimage.svg";
import noprofileSvg from "../../../../img/noprofile.svg";

const JadwalInterviewItem = ({ interview }) => {
  if (!interview) {
    return <div>Loading...</div>;
  }

  // Convert Firestore timestamp to JavaScript Date
  const convertTimestampToDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      return new Date(timestamp.seconds * 1000);
    }
    return null;
  };

  const interviewDate = convertTimestampToDate(interview.WaktuInterview);
  const formattedDate = interviewDate ? interviewDate.toLocaleString() : "N/A";

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
        width: "1130px",
        marginLeft: "80px",
        height: "120px",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            alt="Profile Image"
            src={noprofileSvg}
            style={{ width: "80px", height: "80px" }}
          />
        }
      ></CardHeader>

      {/* Untuk tampilin nama
      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Nama:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{interview.Nama}</span>
        </div>
      </div>
      */}

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Tingkat Pendidikan:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{interview.TingkatBeasiswa}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Lingkup Beasiswa:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{interview.LingkupBeasiswa}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Jenis Interview:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">
            Beasiswa {interview.JenisInterview}
          </span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Tanggal, Waktu:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{formattedDate}</span>
        </div>
      </div>

      <div className="container-button-jadwal-interview-item">
        <Button
          href={`/feedback-interview/${interview.id}`}
          variant="contained"
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            width: "160px",
            padding: "0px",
            fontSize: "13px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to right, #FA6339, #C73950)",
            },

            justifyContent: "center", // Centralized text and icon
          }}
        >
          Lihat Umpan Balik
        </Button>
      </div>

      <div className="container-button-jadwal-interview-item-zoom">
        <Button
          href={interview.ZoomJoinUrl}
          target="_blank" // to open the new tab for zoom join meeting room url
          rel="noopener noreferrer"
          variant="contained"
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            fontSize: "13px",
            width: "200px",
            padding: "0px",
            fontWeight: "bold",
            background: "linear-gradient(to bottom, #940566, #C70E4E)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to bottom, #940566, #C70E4E)",
            },

            justifyContent: "center", // Centralized text and icon
          }}
        >
          Masuk Ruang Interview
        </Button>
      </div>
    </Card>
  );
};

export default JadwalInterviewItem;
