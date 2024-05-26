import React from "react";
import { Card, Button } from "@mui/material";
import downloadiconSvg from "../../../../img/downloadicon.svg";
import Avatar from "@mui/material/Avatar";
import ricoSVG from "../../../../img/rico.svg";

const AjuanJadiExpertItem = ({ expert }) => {
  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg}></img>}
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
          height: "30px"
        }}
      >
        Unduh
      </Button>
    );
  };

  if (!expert) {
    return <div>Loading...</div>;
  }

  return (
    <Card
      className="checkbox-card-container"
      variant="outlined"
      sx={{
        borderRadius: "16px",
        padding: "5px",
        marginBottom: "20px",
        marginTop: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#FFFFFF", // white background
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // soft shadow
        position: "relative", // to position the circle
        width: "1150px",
        marginLeft: "80px",
      }}
    >
      <div className="container-all-text-item">
        <Avatar variant="square" src={expert.linkFotoDiri} sx={{ width: 80, height: 100 }} />
      </div>
      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Nama</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{expert.nama}</span>
        </div>
      </div>
      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Tingkat Pendidikan:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{expert.tingkatPendidikan}</span>
        </div>
      </div>

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">Universitas/Almamater:</span>
        </div>
        <div className="container-text-content-item">
          <span className="text-content-item">{expert.universitasAtauAlmamater}</span>
        </div>
      </div>

      {/* tambah deskripsi (?) */}

      <div className="container-all-text-item">
        <div className="container-text-header-item">
          <span className="text-header-item">CV yang dikumpulkan:</span>
        </div>
        <div className="container-text-content-item">
            <DownloadButton href={expert.linkCV} />
        </div>
      </div>

      <div className="container-button-pengajuan-expert-item">
        <Button
          href={`/admin-verifikasi-detail-pengajuan/${expert.id}`}
          variant="contained"
          sx={{
            fontFamily: "'Poppins', sans-serif", // Use the Poppins font
            textTransform: "none", // Remove capitalization
            borderRadius: "20px", // Apply rounded edges
            width: "190px",
            padding: "0px",
            marginTop:"10px",
            fontWeight: "bold",
            background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
            "&:hover": {
              background: "linear-gradient(to right, #FA6339, #C73950)",
            },

            justifyContent: "center", // Centralized text and icon
            px: 3, // Add some horizontal padding
          }}
        >
          Periksa Pengajuan
        </Button>
      </div>
    </Card>
  );
};

export default AjuanJadiExpertItem;
