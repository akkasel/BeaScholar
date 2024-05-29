import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import TopBarExpert from "../expertMasterPage/TopBarExpert";
import SideBarExpert from "../expertMasterPage/SideBarExpert";
import downloadiconSvg from "../../../img/downloadicon.svg";
import { db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const ExpertFeedbackDokumenPage = () => {
  const { id } = useParams();
  const [dokumen, setDokumen] = useState({
    hasilAnalisa: "",
    halYangBisaDirevisi: "",
    catatanTambahan: "",
    linkDokumen: "",
  });

  // untuk alertnya
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // get dokumen by id
  useEffect(() => {
    const fetchDokumen = async () => {
      const docRef = doc(db, "dokumen", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDokumen(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchDokumen();
  }, [id]);

  // to update 3 fields on the dokumen entity, which is :
  // dokumen.hasilAnalisa, dokumen.halYangBisaDirevisi, dokumen.catatanTambahan
  const handleUpdate = async () => {
    const docRef = doc(db, "dokumen", id);
    await updateDoc(docRef, {
      hasilAnalisa: dokumen.hasilAnalisa,
      halYangBisaDirevisi: dokumen.halYangBisaDirevisi,
      catatanTambahan: dokumen.catatanTambahan,
    });
    // alert("Feedback terkait dokumen ini berhasil dikirim!");
    // for success alert
    setAlert({
      show: true,
      type: "success",
      message: "Feedback terkait dokumen ini berhasil dikirim!",
    });
  };

  // untuk handle perubahan pada dokumen
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDokumen((prevDokumen) => ({
      ...prevDokumen,
      [name]: value,
    }));
  };

  // tampilan jika data dokumen belum muncul alias masih loading
  if (!dokumen) {
    return <div>Loading...</div>;
  }

  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg} alt="Download Icon" />}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none", // Remove capitalization
          borderColor: "#C4084F",
          backgroundColor: "#FFFF", // Pink color
          color: "#C4084F", // White text color for contrast
          width: "1000px",
          height: "50px", // Set the desired height for the button,
          "&:hover": {
            backgroundColor: "#C4084F", // Slightly lighter pink on hover
            color: "#FFFF",
          },
          width: "1000px",
        }}
      >
        Unduh
      </Button>
    );
  };

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/* Header text "Feedback Interview" */}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/expert-daftar-hasil-analisis-dokumen">
              <img
                className="arrow-back-icon"
                src={arrowleftSvg}
                alt="Icon"
                width={30}
                height={30}
              />
            </Button>
          </div>

          <div className="container-feedback-title">
            <h1 className="latihan-interview-text">Analisa Dokumen</h1>
          </div>

          <div className="form-input-container">
            {/* Dokumen yang dikumpulkan */}
            <div className="text-interview-container">
              <span className="text-interview">Dokumen yang dikumpulkan:</span>
            </div>
            <div>
              <DownloadButton
                href={dokumen.linkDokumen}
                target="_blank" // to open the new tab after click
                rel="noopener noreferrer"
              ></DownloadButton>
            </div>

            <br />

            {/* Hasil Analisa */}
            <div className="text-interview-container">
              <span className="text-interview">Hasil Analisa</span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                label="Jabarkan hasil analisa terkait dokumen yang dikumpulkan..."
                fullWidth
                name="hasilAnalisa"
                value={dokumen.hasilAnalisa}
                onChange={handleChange}
                variant="outlined"
                multiline // Add this prop to enable multiple lines
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
              />
            </div>

            <br />

            {/* Hal yang perlu direvisi */}
            <div className="text-interview-container">
              <span className="text-interview">Hal yang perlu direvisi</span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                label="Jabarkan hal-hal yang perlu direvisi terkait dokumen yang dikumpulkan..."
                fullWidth
                name="halYangBisaDirevisi"
                value={dokumen.halYangBisaDirevisi}
                onChange={handleChange}
                variant="outlined"
                multiline // Add this prop to enable multiple lines
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
              />
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan dari Interviewer
              </span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                label="Berikan catatan tambahan Anda terkait dokumen yang dikumpulkan..."
                fullWidth
                name="catatanTambahan"
                value={dokumen.catatanTambahan}
                onChange={handleChange}
                variant="outlined"
                multiline // Add this prop to enable multiple lines
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
              />
            </div>

            <br />

            {/* Simpan Button */}
            <div>
              <Button
                onClick={handleUpdate}
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to right, #FA6339, #C73950)",
                  },
                  justifyContent: "center", // Centralized text and icon
                }}
              >
                Simpan
              </Button>
            </div>

            {/* This is to show the alert*/}
            {alert.show && (
              <Alert
                icon={
                  alert.type === "success" ? (
                    <CheckIcon fontSize="inherit" />
                  ) : undefined
                }
                severity={alert.type}
                onClose={() => setAlert({ show: false, type: "", message: "" })}
              >
                {alert.message}
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertFeedbackDokumenPage;
