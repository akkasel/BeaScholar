import React from "react";
import pinSvg from "../../../../../img/pin.svg";

const DocumentHistoryHeader = () => {
  const headerStyle = {
    padding: "20px",
    display: "flex",
    alignItems: "left",
    borderRadius: "16px 16px 0 0", // rounded corners on the top
    justifyContent: "space-between",
  };

  const titleStyle = {
    color: "#333333", // dark text color
    fontWeight: "bold",
    fontSize: "16px",

  };

  const allLinkStyle = {
    textDecoration: "none",
    color: "#727272", 
    fontWeight: "bold",
    marginLeft: "20px",
  };

  return (
    <div style={headerStyle}>
      <img src={pinSvg} alt="Icon" width={40} height={40} />
      <h2 style={titleStyle}>Hasil Analisis Dokumen Sebelumnya</h2>
      <a href="/daftar-hasil-analisis-dokumen" style={allLinkStyle}>
        Lihat semuanya →
      </a>
    </div>
  );
};

export default DocumentHistoryHeader;