import React, { useEffect, useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Card from "@mui/material/Card";
import SearchBar from "../../SearchBar";
import DocumentCardItem from "./documentItem/documentCardItem";
import dokumenemotSvg from "../../../img/dokumenemot.svg";

import { db } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";

const DaftarHasilAnalisisDokumenPage = () => {
  const [dokumenList, setDokumenList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // add state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // add state for filtered daftar hasil analisis dokumen
  const [filteredDaftarDokumen, setFilteredDaftarDokumen] = useState([]); 

  useEffect(() => {
    const fetchDokumen = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "dokumen"));
        const documentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDokumenList(documentsData);
        // set filtered daftar dokumen data initially to all hasil analisis dokumen item
        setFilteredDaftarDokumen(documentsData); 
      } catch (err) {
        console.error("Error fetching dokumen: ", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDokumen();
  }, []);

  // to handle search bar input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // to search data hasil analisis dokumen data
  const handleSearch = () => {
    const filtered = dokumenList.filter(
      (dokumen) =>
        dokumen.id &&
        dokumen.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredDaftarDokumen(filtered);
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
          {/*Header text "Daftar hasil analisis dokumen"*/}
          <div className="interview-header-container">
            <br />
            <img
              className="rocket-icon"
              src={dokumenemotSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Daftar Hasil Analisis Dokumen</h1>
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
                <span className="text-filter">Semua Dokumen</span>
                <span className="text-filter-not-selected">Belum Dianalisis</span>
                <span className="text-filter-not-selected">Sudah Dianalisis</span>
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
            {filteredDaftarDokumen.map((dokumen) => (
              <DocumentCardItem key={dokumen.id} dokumen={dokumen} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default DaftarHasilAnalisisDokumenPage;
