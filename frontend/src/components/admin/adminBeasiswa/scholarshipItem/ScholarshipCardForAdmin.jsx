import React from "react";
import bcalogoSvg from "../../../../img/bcalogo.svg";
import { Button } from "@mui/material";
import { db } from "../../../../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const ScholarshipCardForAdmin = ({ scholarship, onDelete }) => {

  const deleteBeasiswa = async (id) => {
    try {
      const docRef = doc(db, "beasiswa", id);
      await deleteDoc(docRef);
      alert("Beasiswa berhasil dihapus");
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
          <img src={bcalogoSvg} alt="BCA" className="card-logo" />
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
              left: 2
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
    </div>
  );
};

export default ScholarshipCardForAdmin;

