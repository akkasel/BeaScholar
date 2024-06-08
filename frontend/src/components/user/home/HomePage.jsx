import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import InterviewHistory from "./content/interviewSection/InterviewHistory";
import DocumentHistory from "./content/documentSection/DocumentHistory";
import SearchScholarshipBar from "../../SearchScholarshipBar";
import ScholarshipCard from "./content/scholarshipSection/ScholarshipCard";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";


const HomePage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // add state for filtered scholarships
  const [filteredScholarships, setFilteredScholarships] = useState([]); 

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "beasiswa"));
        const scholarshipsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScholarships(scholarshipsData);
        // set filtered scholarships initially to all scholarships
        setFilteredScholarships(scholarshipsData); 
      } catch (error) {
        console.error("Error fetching scholarships: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
  }, []);

  // to handle search bar input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // to search scholarship data
  const handleSearch = () => {
    const filtered = scholarships.filter(
      (scholarship) =>
        scholarship.nama &&
        scholarship.nama.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredScholarships(filtered);
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
      <div className="home-page">
        <SideBar /> {/* Render the SideBar component */}

        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">di Beascholar</p>
                </div>
                <div class="illustration">
                  <img src={gambarheaderSvg} alt="Illustration" />
                </div>
              </div>
            </div>

            <div className="interview-history-container">
              <InterviewHistory />
              <DocumentHistory />
            </div>
          </div>
          <div class="cari-beasiswa-container">
            <img
              className="logo-kaca-pembesar"
              src={kacaPembesarSvg}
              alt="Illustration"
            />
            <h1 class="cari-beasiswa-text">Cari Beasiswa :</h1>
          </div>

          <div>
            <SearchScholarshipBar 
              value={searchQuery} 
              onChange={handleSearchInputChange} 
              onSearch={handleSearch} // Pass handleSearch to SearchBar
            /> 
          </div>

          <div className="list-of-scholarship-card-container">
            {filteredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship}/>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
