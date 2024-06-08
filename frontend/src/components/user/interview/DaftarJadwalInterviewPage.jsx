import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import headphoneSvg from "../../../img/headphone.svg";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import JadwalInterviewItem from "./interviewItem/JadwalInterviewItem";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const DaftarJadwalInterviewPage = () => {
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // add state for filtered jadwal interview
  const [filteredJadwalInterview, setFilteredJadwalInterview] = useState([]);

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
        // set filtered jadwal interview initially to all jadwal interview item
        setFilteredJadwalInterview(documentsData);
      } catch (err) {
        console.error("Error fetching data interview: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, []);

  // to handle search bar input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // to search scholarship data
  const handleSearch = () => {
    const filtered = interviewList.filter(
      (interview) =>
        interview.Nama &&
        interview.Nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJadwalInterview(filtered);
  };

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
                borderRadius: "16px",
                padding: "15px",
                marginBottom: "20px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF", // white background
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // soft shadow
                position: "relative", // to position the circle
                width: "1100px",
                marginLeft: "80px",
              }}
            >
              <span className="text-filter">Semua Interview</span>
              <span className="text-filter-not-selected">Interview Live</span>
              <span className="text-filter-not-selected">
                Interview Selesai
              </span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar
              value={searchQuery}
              onChange={handleSearchInputChange}
              onSearch={handleSearch} // Pass handleSearch to SearchBar
            />
          </div>

          <div>
            {filteredJadwalInterview.map((interview) => (
              <JadwalInterviewItem key={interview.id} interview={interview} />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DaftarJadwalInterviewPage;
