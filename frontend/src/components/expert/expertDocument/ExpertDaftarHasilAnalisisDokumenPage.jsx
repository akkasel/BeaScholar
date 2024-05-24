import React, { useEffect, useState } from "react";
import "../../../App.css";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import ExpertDocumentCardItem from "./expertDocumentItem/expertDocumentCardItem";
import dokumenemotSvg from "../../../img/dokumenemot.svg";
import TopBarExpert from "../expertMasterPage/TopBarExpert";
import SideBarExpert from "../expertMasterPage/SideBarExpert";
import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const ExpertDaftarHasilAnalisisDokumenPage = () => {
  const [dokumenList, setDokumenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDokumen = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dokumen"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDokumenList(documentsData);
      } catch (err) {
        console.error("Error fetching dokumen: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDokumen();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <TopBarExpert /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarExpert /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Daftar hasil analisis dokumen"*/}
          <div className="interview-header-container">
            <br />
            <br />
            <img
              className="rocket-icon"
              src={dokumenemotSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Daftar Dokumen dari User</h1>
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
              <span className="text-filter">Semua Dokumen</span>
              <span className="text-filter-not-selected">Belum Dianalisis</span>
              <span className="text-filter-not-selected">Sudah Dianalisis</span>
            </Card>
          </div>

          <div className="search-bar-daftar-jadwal-interview">
            <SearchBar></SearchBar>
          </div>

          <div>
            {dokumenList.map((dokumen) => (
              <ExpertDocumentCardItem key={dokumen.id} dokumen={dokumen} />
            ))}
          </div>

          {/* Add your input form here */}
        </div>
      </div>
    </div>
  );
};

export default ExpertDaftarHasilAnalisisDokumenPage;
