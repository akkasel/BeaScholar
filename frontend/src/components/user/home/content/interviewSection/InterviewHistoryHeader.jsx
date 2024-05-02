import React from "react";
import bulbSvg from "../../../../../img/bulb.svg";

const InterviewHistoryHeader = () => {
  const headerStyle = {
    padding: "20px",
    backgroundColor: "#FFFFFF", 
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
    marginLeft: "140px",
  };

  return (
    <div style={headerStyle}>
      <img src={bulbSvg} alt="Icon" width={40} height={40} />
      <h2 style={titleStyle}>Interview Sebelumnya</h2>
      <a href="#" style={allLinkStyle}>
        Lihat semuanya →
      </a>
    </div>
  );
};

export default InterviewHistoryHeader;
