import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../img/arrowleft.svg";

import { db } from "../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const FeedbackInterviewPage = () => {
  const { id } = useParams();
  const [interview, setInterview] = useState({
    MasukanPositif: "",
    HalYangPerluDitingkatkan: "",
    CatatanTambahan: "",
  });

  // untuk ambil 1 interview data by id
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

  // show loading kalo misalnya datanya belum keluar / lagi loading
  if (!interview) {
    return <div>Loading...</div>;
  }

  // to convert Firestore timestamp to JavaScript Date
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
      <TopBar /> 
      <div className="feedback-interview-page">
        <SideBar />

        <div className="interview-page-container">
     
          <div className="container-feedback-header">
            <br />
            <Button href="/daftar-jadwal-interview">
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
            <h1 className="latihan-interview-text">Feedback Interview</h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">

          <div className="text-interview-container">
              <span className="text-interview">ID Interview: </span>
              <span className="text-interview-orange">{id}</span>
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tanggal, Waktu Interview: </span>
              <span className="text-interview-orange">{formattedDate}</span>
            </div>

            <br />

            {/* Masukan Positif */}
            <div className="text-interview-container">
              <span className="text-interview">Masukan Positif</span>
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
                {/* harusny ga perlu pake div sama span lagi juga bisa, tinggal pakai <br /> */}
                <div className="text-container-feedback">
                  <div>
                    <span>{interview.MasukanPositif}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Hal yang perlu ditingkatkan */}
            <div className="text-interview-container">
              <span className="text-interview">
                Hal yang perlu ditingkatkan
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
                    <span>{interview.HalYangPerluDitingkatkan}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Catatan tambahan dari Interviewer */}
            <div className="text-interview-container">
              <span className="text-interview">
                Catatan tambahan dari Interviewer
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
                    <span>{interview.CatatanTambahan}</span>
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

export default FeedbackInterviewPage;
