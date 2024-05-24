import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import { db } from "../../../firebase";
import { getDoc, deleteDoc, doc } from "firebase/firestore";

const ScholarshipDetailItemPage = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);

  useEffect(() => {
    const fetchScholarship = async () => {
      const docRef = doc(db, "beasiswa", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setScholarship(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchScholarship();
  }, [id]);

  if (!scholarship) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Feedback Dokumen"*/}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/home">
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
            <h1 className="latihan-interview-text">{scholarship.nama}</h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa: </span>
              <span className="text-interview-orange">
                {scholarship.lingkup}
              </span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan: </span>
              <span className="text-interview-orange">
                {scholarship.tingkat}
              </span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Penyelenggara: </span>
              <span className="text-interview-orange">
                {scholarship.penyelenggara}
              </span>
            </div>

            <br />

            {/* Deskripsi */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F !important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{scholarship.deskripsi}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Manfaat */}
            <div className="text-interview-container">
              <span className="text-interview">Manfaat</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F !important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  {scholarship.manfaat}
                </div>
              </Card>
            </div>

            <br />

            {/* Syarat dan Keperluan */}
            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>{scholarship.syarat}</div>
                </div>
              </Card>
            </div>

            <br />

            {/* Daftar Sekarang! Lalu diarahkan ke website atau link pendaftarannya */}
            <div>
              <Button
                /* Jadi User nanti diarahkan ke link pendaftarannya, ini contoh aja */
                // harusnya, kalau admin input link, di sini linknya auto ke-update!
                href={scholarship.tautan}
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #C4084F, #FF6C37)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #C4084F, #FF6C37)",
                  },

                  justifyContent: "center", // Centralized text and icon
                }}
              >
                Daftar
              </Button>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailItemPage;
