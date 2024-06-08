import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import downloadiconSvg from "../../../img/downloadicon.svg";

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const FeedbackDokumenPage = () => {
  const { id } = useParams();
  const [dokumen, setDokumen] = useState({
    hasilAnalisa: "",
    halYangBisaDirevisi: "",
    catatanTambahan: "",
    linkDokumen: "",
  });

  // untuk ambil 1 dokumen by id
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

  if (!dokumen) {
    return <div>Loading...</div>;
  }

  const DownloadButton = ({ href }) => {
    return (
      <Button
        variant="outlined"
        startIcon={<img src={downloadiconSvg} alt="Download Icon" />}
        href={href}
        sx={{
          textTransform: "none", 
          borderColor: "#C4084F",
          backgroundColor: "#FFFF", 
          color: "#C4084F", 
          "&:hover": {
            backgroundColor: "#C4084F", 
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
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Feedback Dokumen"*/}
          <div className="container-feedback-header">
            <br />
            <Button href="/daftar-hasil-analisis-dokumen">
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
            <h1 className="latihan-interview-text">
              Hasil Analisa Dokumen Kamu
            </h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <br />
            <div className="text-interview-container">
              <span className="text-interview">ID Dokumen: </span>
              <span className="text-interview-orange">{id}</span>
            </div>
            <br />
            <div className="text-interview-container">
              <span className="text-interview">Dokumen yang dikumpulkan:</span>
            </div>
            <div>
              <DownloadButton href={dokumen.linkDokumen}></DownloadButton>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Hasil Analisa</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.hasilAnalisa}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">Hal yang perlu direvisi</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.halYangBisaDirevisi}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan
              </span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid FF6C37 !important",
                  borderColor: "#FF6C37 !important",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{dokumen.catatanTambahan}</span>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDokumenPage;
