import React, { useState } from "react";
import "../../../App.css";
import TopBarAdmin from "../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../adminMasterPage/SideBarAdmin";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import togaiconSvg from "../../../img/togaicon.svg";

import { auth, db } from "../../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const UploadBeasiswaPage = () => {
  const [user] = useAuthState(auth); // Using react-firebase-hooks to manage auth state

  // untuk upload masing-masing fieldnya ke database.
  const [nama, setNama] = useState("");
  const [lingkup, setLingkup] = useState("Dalam Negeri");
  const [tingkat, setTingkat] = useState("SMA");
  const [penyelenggara, setPenyelenggara] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [manfaat, setManfaat] = useState("");
  const [syarat, setSyarat] = useState("");
  const [tautan, setTautan] = useState("");
  const [beasiswaList, setBeasiswaList] = useState([]);

  // untuk alertnya
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  // untuk READ data beasiswa yang ada // ga dipake disini, dipake nanti di page lain
  /*
  useEffect(() => {
    fetchBeasiswa();
  }, []);
  */

  // untuk READ data beasiswa yang ada // ga dipake disini, dipake nanti di page lain
  /*
  const fetchBeasiswa = async () => {
    const querySnapshot = await getDocs(collection(db, "beasiswa"));
    setBeasiswaList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  */

  // untuk CREATE data beasiswa baru (ini dipake di page ini)
  const createBeasiswa = async () => {
    if (!user) {
      alert("You must be logged in to create a beasiswa.");
      return;
    }
    try {
      await addDoc(collection(db, "beasiswa"), {
        nama,
        lingkup,
        tingkat,
        penyelenggara,
        deskripsi,
        manfaat,
        syarat,
        tautan,
      });
      // alert("Beasiswa created successfully!");
      // for success alert
      setAlert({
        show: true,
        type: "success",
        message: "Data Beasiswa telah berhasil diupload!",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to create beasiswa. Check console for details.");
    }
  };

  // untuk UPDATE data beasiswa baru (ngga dipake disini, ini template aja, buat nanti di page lain)
  /*
  const updateBeasiswa = async (id) => {
    const beasiswaDoc = doc(db, "beasiswa", id);
    await updateDoc(beasiswaDoc, {
      nama,
      lingkup,
      tingkat,
      penyelenggara,
      deskripsi,
      manfaat,
      syarat,
      tautan,
    });
    fetchBeasiswa();
  };
  */

  // untuk DELETE data beasiswa, ini template aja, dipakenya nanti di page lain.
  /*
  const deleteBeasiswa = async (id) => {
    const beasiswaDoc = doc(db, "beasiswa", id);
    await deleteDoc(beasiswaDoc);
    fetchBeasiswa();
  };
  */

  // untuk textfield tingkat pendidikan
  const tingkatPendidikan = [
    {
      value: "SMA",
      label: "SMA",
    },
    {
      value: "SMK",
      label: "SMK",
    },
    {
      value: "S1",
      label: "S1",
    },
    {
      value: "S2",
      label: "S2",
    },
    {
      value: "S3",
      label: "S3",
    },
  ];

  // untuk textfield lingkup beasiswa
  const lingkupBeasiswa = [
    {
      value: "Dalam Negeri",
      label: "Dalam Negeri",
    },
    {
      value: "Luar Negeri",
      label: "Luar Negeri",
    },
  ];

  return (
    <div>
      <TopBarAdmin /> {/* Render the TopBar component */}
      <div className="daftar-jadwal-interview-page">
        <SideBarAdmin /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <br />
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={togaiconSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">
              Unggah Informasi Beasiswa
            </h1>
          </div>

          <br />

          <div className="container-feedback-title">
            <div className="text-interview-container">
              <span className="text-interview">
                Nama atau Judul Program Beasiswa
              </span>
            </div>
            <div>
              <TextField
                label="Tuliskan nama atau judul beasiswa di sini..."
                fullWidth
                id="outlined-textfield-nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                variant="outlined"
                width="200px"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              />
            </div>
          </div>

          <br />

          <div className="form-input-container">
            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Lingkup Beasiswa</span>
              </div>
              <TextField
                fullWidth
                id="outlined-select-lingkup-beasiswa"
                value={lingkup}
                onChange={(e) => setLingkup(e.target.value)}
                select
                defaultValue="Dalam Negeri"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              >
                {lingkupBeasiswa.map((option) => (
                  <MuiMenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MuiMenuItem>
                ))}
              </TextField>
            </div>

            <br />

            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Tingkat Pendidikan</span>
              </div>
              <TextField
                fullWidth
                id="outlined-select-lingkup-beasiswa"
                value={tingkat}
                onChange={(e) => setTingkat(e.target.value)}
                select
                defaultValue="SMA"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              >
                {tingkatPendidikan.map((option) => (
                  <MuiMenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MuiMenuItem>
                ))}
              </TextField>
            </div>

            <br />

            <div className="text-interview-container">
              <div className="text-interview-container">
                <span className="text-interview">Penyelenggara</span>
              </div>
              <div>
                <TextField
                  label="Tuliskan penyelenggara beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  value={penyelenggara}
                  onChange={(e) => setPenyelenggara(e.target.value)}
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                />
              </div>
            </div>

            <br />

            {/* Deskripsi */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                  label="Tuliskan deskripsi beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            {/* Manfaat */}
            <div className="text-interview-container">
              <span className="text-interview">Manfaat</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                  label="Jabarkan manfaat beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  value={manfaat}
                  onChange={(e) => setManfaat(e.target.value)}
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            {/* Syarat dan Keperluan */}
            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <div className="card-feedback-interview">
              <div className="text-field-feedback-expert-container">
                <TextField
                  label="Jabarkan syarat dan keperluan beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
                  value={syarat}
                  onChange={(e) => setSyarat(e.target.value)}
                  variant="outlined"
                  width="200px"
                  sx={{
                    // Root class for the input field
                    "& .MuiOutlinedInput-root": {
                      // Class for the border around the input field
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#C4084F",
                        borderWidth: "2px",
                      },
                    },
                    // Class for the label of the input field
                    "& .MuiInputLabel-outlined": {
                      color: "#121212",
                    },
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tautan Pendaftaran</span>
            </div>
            <div className="card-link-pendaftaran">
              <TextField
                label="Sertakan tautan pendaftaran beasiswa di sini..."
                fullWidth
                id="outlined-textfield-nama"
                value={tautan}
                onChange={(e) => setTautan(e.target.value)}
                variant="outlined"
                width="200px"
                sx={{
                  // Root class for the input field
                  "& .MuiOutlinedInput-root": {
                    // Class for the border around the input field
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  // Class for the label of the input field
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              />
            </div>

            <br />

            {/* Unggah Button */}
            <div>
              <Button
                variant="contained"
                onClick={createBeasiswa} // jalanin function createBeasiswa
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #FA63396, #C73950)",
                  },

                  justifyContent: "center", // Centralized text and icon
                  px: 3, // Add some horizontal padding,
                }}
              >
                Unggah
              </Button>
            </div>

            <br />

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

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBeasiswaPage;
