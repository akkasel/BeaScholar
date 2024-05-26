import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import headphoneSvg from "../../../img/headphone.svg";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import JadwalInterviewItem from "./interviewItem/JadwalInterviewItem";
import JadwalInterviewItemLive from "./interviewItem/JadwalInterviewItemLive";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const DaftarJadwalInterviewPage = () => {

  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // get all interview data
  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "interview"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setInterviewList(documentsData);
      } catch (err) {
        console.error("Error fetching data interview: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-document-by-ai-page">
        <SideBar /> {/* Render the SideBar component */}

        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <div className="interview-header-container">
            <br />
            <img
              className="rocket-icon"
              src={headphoneSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Daftar Sesi Interview</h1>
          </div>

          <div>
          <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                    borderRadius: '16px',
                    padding: '15px',
                    marginBottom: '20px',
                    marginTop: '20px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF', // white background
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // soft shadow
                    position: 'relative', // to position the circle
                    width:'1100px',
                    marginLeft:'80px',
                }}
              >
                <span className="text-filter">Semua Interview</span>
                <span className="text-filter-not-selected">Interview Live</span>
                <span className="text-filter-not-selected">Interview Selesai</span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar >

            </SearchBar>
          </div>

          {/* Display all interview data */}
          <div>
            {interviewList.map((interview) => (
              <JadwalInterviewItem key={interview.id} interview={interview} />
            ))}
          </div>

          {/* Add your input form here */}
        </div>
      </div>
    </div>
  );
};

export default DaftarJadwalInterviewPage;
