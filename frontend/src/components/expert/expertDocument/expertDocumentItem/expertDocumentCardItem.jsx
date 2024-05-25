import React from "react";
import downloadiconSvg from "../../../../img/downloadicon.svg";
import { Card, CardHeader, Avatar, Button } from "@mui/material";
import contohprofileimageSvg from "../../../../img/contohprofileimage.svg";

const ExpertDocumentCardItem = ({ dokumen }) => {
  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg} alt="Download Icon" />}
        href={href}
        sx={{
          textTransform: "none", // Remove capitalization
          borderColor: "#C4084F",
          backgroundColor: "#FFFF", // Pink color
          color: "#C4084F", // White text color for contrast
          "&:hover": {
            backgroundColor: "#C4084F", // Slightly lighter pink on hover
            color: "#FFFF",
          },
        }}
      >
        Unduh
      </Button>
    );
  };

  if (!dokumen) {
    return <div>Loading...</div>;
  }

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
      />
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
          <span className="text-content-item">{dokumen.tingkat}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Lingkup Beasiswa:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{dokumen.lingkup}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Jenis Beasiswa:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{dokumen.tingkat}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Dokumen yang dikumpulkan:</span>
        </div>
        <div className="container-text-content-item">
          <DownloadButton href={dokumen.linkDokumen} />
        </div>
      </div>

      <div className="container-button-document-item">
        <Button
          href={`/expert-feedback-dokumen/${dokumen.id}`}
          variant="contained"
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            width: "200px",
            padding: "0px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to right, #FA6339, #C73950)",
            },

            justifyContent: "center", // Centralized text and icon
            px: 3, // Add some horizontal padding
          }}
        >
          Lihat Umpan Balik
        </Button>
      </div>
    </Card>
  );
};

export default ExpertDocumentCardItem;

