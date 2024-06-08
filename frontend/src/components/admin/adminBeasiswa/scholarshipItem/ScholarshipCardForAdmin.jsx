import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { db } from "../../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const ScholarshipCardForAdmin = ({ scholarship, onDelete }) => {
  // untuk alertnya
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const deleteBeasiswa = async (id) => {
    try {
      const docRef = doc(db, "beasiswa", id);
      await deleteDoc(docRef);
      // alert("Beasiswa berhasil dihapus");
      // for success alert
      setAlert({
        show: true,
        type: "success",
        message: "Beasiswa ini berhasil dihapus!",
      });
      if (onDelete) {
        onDelete(id);
      }
    } catch (error) {
      console.error("Error deleting scholarship: ", error);
    }
  };

  return (
    <div className="card-container">
      <div className="card-header">
        <div className="card-header-top">
          {/* // gajadi pake gambar, kaya gaperlu
          <img src={bcalogoSvg} alt="BCA" className="card-logo" />
          */}
          <div className="card-header-badge-container">
            <span className="card-header-badge national">
              {scholarship.lingkup}
            </span>
            <span className="card-header-badge education-level">
              Beasiswa {scholarship.tingkat}
            </span>
          </div>
        </div>
        <h2 className="card-title">{scholarship.nama}</h2>
        <p className="card-subtitle">
          Lingkup Beasiswa: {scholarship.lingkup} <br />
          Tingkat Pendidikan: {scholarship.tingkat} <br />
          Penyelenggara: {scholarship.penyelenggara} <br />
        </p>
        <div className="card-buttons">
          <Button
            className="card-button"
            variant="contained"
            onClick={() => deleteBeasiswa(scholarship.id)}
            sx={{
              fontFamily: "'Poppins', sans-serif",
              textTransform: "none",
              borderRadius: "20px",
              width: "110px",
              padding: "5px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #E75300, #121212)",
              "&:hover": {
                background: "linear-gradient(to right, #E75300, #121212)",
              },
              justifyContent: "center",
              px: 3,
              left: 2,
            }}
          >
            Hapus
          </Button>

          <Button
            href={`/admin-scholarship-detail-item/${scholarship.id}`}
            className="card-button"
            variant="contained"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              textTransform: "none",
              borderRadius: "20px",
              width: "110px",
              padding: "5px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #009117, #121212)",
              "&:hover": {
                background: "linear-gradient(to right, #009117, #121212)",
              },
              justifyContent: "center",
              px: 3,
              left: 10,
            }}
          >
            Perbaharui
          </Button>
        </div>

        
      </div>
      {/* This is to show the alert*/}
      {alert.show && (
          <Alert
            icon={
              alert.type === "success" ? (
                <CheckIcon fontSize="inherit" />
              ) : undefined
            }
            severity={alert.type}
            onClose={() => setAlert({ show: false, type: "", message: "" })}
          >
            {alert.message}
          </Alert>
        )}
    </div>
    
  );
};

export default ScholarshipCardForAdmin;
