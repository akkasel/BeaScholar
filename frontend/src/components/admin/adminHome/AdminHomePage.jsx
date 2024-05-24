import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import gambarheaderSvg from "../../../img/gambarheader.svg";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import SearchBar from "../../SearchBar";
import ScholarshipCardForAdmin from "../adminBeasiswa/scholarshipItem/ScholarshipCardForAdmin";
import { db } from '../../../firebase';
import { collection, getDocs } from "firebase/firestore";

const AdminHomePage = () => {
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

  const handleDelete = (id) => {
    setScholarships(scholarships.filter(scholarship => scholarship.id !== id));
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
                  <p className="nama-user">Daniel</p>
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
            <SearchBar />
          </div>

          <div className="list-of-scholarship-card-container">
            {scholarships.map((scholarship) => (
              <ScholarshipCardForAdmin key={scholarship.id} scholarship={scholarship} onDelete={handleDelete} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;



