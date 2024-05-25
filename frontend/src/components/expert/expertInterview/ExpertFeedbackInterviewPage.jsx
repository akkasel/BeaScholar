import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";
import TopBarExpert from "../expertMasterPage/TopBarExpert";
import SideBarExpert from "../expertMasterPage/SideBarExpert";

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const ExpertFeedbackInterviewPage = () => {
  const { id } = useParams();
  const [interview, setInterview] = useState({
    MasukanPositif: "",
    HalYangPerluDitingkatkan: "",
    CatatanTambahan: "",
  });

  // get interview data by id
  useEffect(() => {
    const fetchInterview = async () => {
      const docRef = doc(db, "interview", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setInterview(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchInterview();
  }, [id]);

  // to update 3 fields on the interview entity, which is :
  // interview.MasukanPositif, interview.HalYangPerluDitingkatkan, interview.CatatanTambahan
  const handleUpdate = async () => {
    const docRef = doc(db, "interview", id);
    await updateDoc(docRef, {
      MasukanPositif: interview.MasukanPositif,
      HalYangPerluDitingkatkan: interview.HalYangPerluDitingkatkan,
      CatatanTambahan: interview.CatatanTambahan,
    });
    alert("Feedback terkait Interview ini berhasil dikirim!");
  };

  // untuk handle perubahan pada interview data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInterview((prevInterview) => ({
      ...prevInterview,
      [name]: value,
    }));
  };

  // tampilan jika data interview belum muncul alias masih loading
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


  // untuk textfield tingkat pendidikan
  const tingkatPendidikan = [
    {
      value: "SMA",
      label: "SMA",
    },
    {
      value: "SMK",
      label: "SMK",
    },
    {
      value: "S1",
      label: "S1",
    },
    {
      value: "S2",
      label: "S2",
    },
    {
      value: "S3",
      label: "S3",
    },
  ];

  // untuk textfield lingkup beasiswa
  const lingkupBeasiswa = [
    {
      value: "Dalam Negeri",
      label: "Dalam Negeri",
    },
    {
      value: "Luar Negeri",
      label: "Luar Negeri",
    },
  ];

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Feedback Interview"*/}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/expert-daftar-jadwal-interview">
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
            <h1 className="latihan-interview-text">Umpan Balik Interview</h1>
          </div>

          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Tanggal, Waktu Interview: </span>
              <span className="text-interview-orange">{formattedDate}</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Identitas Peserta: </span>
              <span className="text-interview-orange">{interview.Nama}</span>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Masukan Positif</span>
            </div>

            <div className="text-field-feedback-expert-container">
              <TextField
                label="Berikan masukan positif Anda terkait Interview yang telah dilakukan..."
                fullWidth
                name="MasukanPositif"
                value={interview.MasukanPositif}
                onChange={handleChange}
                variant="outlined"
                width="200px"
                multiline // Add this prop to enable multiple lines
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
              />
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">
                Hal yang perlu ditingkatkan
              </span>
            </div>
            <div className="text-field-feedback-expert-container">
              <TextField
                label="Berikan umpan balik Anda terkait Interview yang telah dilakukan..."
                fullWidth
                name="HalYangPerluDitingkatkan"
                value={interview.HalYangPerluDitingkatkan}
                onChange={handleChange}
                variant="outlined"
                width="200px"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
                multiline // Add this prop to enable multiple lines
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
                label="Berikan catatan tambahan Anda terkait Interview yang telah dilakukan..."
                fullWidth
                name="CatatanTambahan"
                value={interview.CatatanTambahan}
                onChange={handleChange}
                variant="outlined"
                width="200px"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderWidth: "2px",
                      borderColor: "#FF6C37",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiOutlinedInput-input": {
                    color: "#121212",
                  },
                  width: "1000px", // Adjust the width value as needed
                }}
                multiline // Add this prop to enable multiple lines
              />
            </div>

            <br />


            {/* Simpan Button */}
            <div>
              <Button
                variant="contained"
                onClick={handleUpdate}
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

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertFeedbackInterviewPage;
