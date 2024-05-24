import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import InterviewHistory from "./content/interviewSection/InterviewHistory";
import DocumentHistory from "./content/documentSection/DocumentHistory";
import SearchBar from "../../SearchBar";
import ScholarshipCard from "./content/scholarshipSection/ScholarshipCard";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";


const HomePage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "beasiswa"));
        const scholarshipsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setScholarships(scholarshipsData);
      } catch (error) {
        console.error("Error fetching scholarships: ", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchScholarships();
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
      <div className="home-page">
        <SideBar /> {/* Render the SideBar component */}

        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div class="welcome-section">
              <div class="welcome-content">
                <div class="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">Amanda</p>
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
            <SearchBar />
          </div>

          {/* Container for the ScholarshipCard components */}
          <div className="list-of-scholarship-card-container">
            {scholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.id} scholarship={scholarship}/>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
