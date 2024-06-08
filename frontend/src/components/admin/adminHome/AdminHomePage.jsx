import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import SearchScholarshipBar from "../../SearchScholarshipBar.jsx";
import ScholarshipCardForAdmin from "../adminBeasiswa/scholarshipItem/ScholarshipCardForAdmin";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const AdminHomePage = () => {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // add state for filtered scholarships
  const [filteredScholarships, setFilteredScholarships] = useState([]); 

  // to get all beasiswa data
  useEffect(() => {
    const fetchScholarships = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "beasiswa"));
        const scholarshipsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
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

  // to handle DELETE beasiswa data operation
  const handleDelete = (id) => {
    setScholarships(
      scholarships.filter((scholarship) => scholarship.id !== id)
    );
     // update filtered scholarships too when deleting
    setFilteredScholarships(scholarships.filter((scholarship) => scholarship.id !== id));
  };

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
      <TopBarAdmin />
      <div className="home-page">
        <SideBarAdmin />
        <div className="home-content">
          <div style={{ margin: "20px" }}>
            <div className="welcome-section">
              <div className="welcome-content">
                <div className="welcome-text">
                  <h1 className="selamat-datang">Selamat datang,</h1>
                  <p className="nama-user">di Beascholar for Admin</p>
                </div>
                <div className="illustration">
                  <img src={gambarheaderSvg} alt="Illustration" />
                </div>
              </div>
            </div>
          </div>
          <div className="admin-text-beasiswa-container">
            <img
              className="logo-kaca-pembesar"
              src={kacaPembesarSvg}
              alt="Illustration"
            />
            <h1 className="admin-beasiswa-text">
              Daftar Informasi Beasiswa yang telah Kamu Upload
            </h1>
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
              <ScholarshipCardForAdmin key={scholarship.id} scholarship={scholarship} onDelete={handleDelete} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
