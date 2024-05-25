import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import kacaPembesarSvg from "../../../img/kacapembesar.svg";
import { Box, Typography } from "@mui/material";
import pinmerahSvg from "../../../img/pinmerah.svg";
import robotSvg from "../../../img/robot.svg";

import { auth, db, storage } from "../../../firebase"; // import storage from firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // import necessary functions for file upload
import { useNavigate } from "react-router-dom";

const DocumentPage = () => {
  const [user] = useAuthState(auth); // Using react-firebase-hooks to manage auth state

  const navigate = useNavigate();

  // untuk upload masing-masing fieldnya ke database.
  const [jenisDoc, setjenisDoc] = useState("Essay");
  const [lingkup, setLingkup] = useState("Dalam Negeri");
  const [tingkat, setTingkat] = useState("S1");
  const [jenisAnalisa, setJenisAnalisa] = useState("");
  const [file, setFile] = useState(null);
  const [hasilAnalisa, setHasilAnalisa] = useState("");
  const [halYangBisaDirevisi, setHalYangBisaDirevisi] = useState("");
  const [catatanTambahan, setCatatanTambahan] = useState("");
  const [dokumenList, setDokumenList] = useState([]);

  // untuk textfield jenis dokumen
  const jenisDokumen = [
    {
      value: "Essay",
      label: "Essay",
    },
    {
      value: "CV",
      label: "CV",
    },
    {
      value: "Dokumen lainnya",
      label: "Dokumen lainnya",
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

  // Checkbox state for single selection
  const [selectedTingkatBeasiswa, setSelectedTingkatBeasiswa] = useState("");

  // Handle ceklis tingkat mahasiswa - agar cuma bisa pilih salah satu saja
  const handleChecklistTingkatMahasiswa = (value) => {
    setSelectedTingkatBeasiswa(value);
    setTingkat(value);
  };

  // Checkbox state for single selection
  const [selectedAnalysis, setSelectedAnalysis] = useState("");

  // Handle analysis selection
  const handleAnalysisSelection = (value) => {
    setSelectedAnalysis(value);
    setJenisAnalisa(value);
  };

  // Handle analysis submission
  const handleSubmit = (documentId) => {
    if (selectedAnalysis === "AI") {
      runAIAnalysis(documentId);
    } else if (selectedAnalysis === "Human") {
      runHumanAnalysis();
    }
  };

  const runAIAnalysis = (documentId) => {
    console.log("Running AI analysis...");
    // Navigate to the feedback-dokumen-by-ai page with the document ID
    navigate(`/feedback-dokumen-by-ai/${documentId}`);
  };

  const runHumanAnalysis = () => {
    // Your Human analysis logic here
    console.log("Running Human analysis...");
    // TODO : Kosongin lagi si form nya setelah ada tulisan "Document upload successfully"
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // untuk CREATE data dokumen baru (ini dipake di page ini)
  const createDokumen = async () => {
    if (!user) {
      alert("You must be logged in to create a document.");
      return;
    }
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }
    try {
      const fileRef = ref(storage, `documents/${file.name}`);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.error("Error uploading file: ", error);
          alert("Failed to upload file. Check console for details.");
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          const docRef = await addDoc(collection(db, "dokumen"), {
            jenisDoc,
            lingkup,
            tingkat,
            jenisAnalisa,
            linkDokumen: downloadURL,
            hasilAnalisa,
            halYangBisaDirevisi,
            catatanTambahan,
          });
          alert("Document created successfully!");
          handleSubmit(docRef.id); // Pass the document ID to handleSubmit
        }
      );
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to create dokumen. Check console for details.");
    }
  };

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="document-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <div className="interview-header-container">
            <br />
            <img
              className="rocket-icon"
              src={pinmerahSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Analisa Dokumen</h1>
          </div>

          <div className="form-input-container">
            {/* Jenis Dokumen */}
            <div className="text-interview-container">
              <span className="text-interview">Jenis Dokumen</span>
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-select-tingkat-pendidikan"
                value={jenisDoc}
                onChange={(e) => setjenisDoc(e.target.value)}
                select
                defaultValue="Essay"
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
                {jenisDokumen.map((option) => (
                  <MuiMenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MuiMenuItem>
                ))}
              </TextField>
            </div>

            <br />

            {/* Lingkup Beasiswa */}
            <div className="text-interview-container">
              <span className="text-interview">
                Lingkup Beasiswa (Nasional / Luar Negeri)
              </span>
            </div>
            <div>
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

            {/* Jenis Tingkatan Beasiswa */}
            <div className="text-interview-container">
              <span className="text-interview">Jenis Tingkatan Beasiswa</span>
            </div>
            <div>
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #C4084F !important",
                  borderColor: "#C4084F !important",
                }}
              >
                <FormGroup sx={{ marginLeft: "10px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedTingkatBeasiswa === "S1"}
                        onChange={() => handleChecklistTingkatMahasiswa("S1")}
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S1"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedTingkatBeasiswa === "S2"}
                        onChange={() => handleChecklistTingkatMahasiswa("S2")}
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S2"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedTingkatBeasiswa === "S3"}
                        onChange={() => handleChecklistTingkatMahasiswa("S3")}
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label="Beasiswa S3"
                  />
                </FormGroup>
              </Card>
            </div>

            <br />

            {/* Pilih Jenis Analisa */}
            <div className="text-interview-container">
              <span className="text-interview">Pilih Jenis Analisa</span>
            </div>
            <div>
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #C4084F !important",
                  borderColor: "#C4084F !important",
                }}
              >
                <FormGroup sx={{ marginLeft: "10px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedAnalysis === "AI"}
                        onChange={() => handleAnalysisSelection("AI")}
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={robotSvg}
                          alt="Image 2"
                          style={{ marginRight: "10px" }}
                          width="20px"
                        />
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          fontFamily="Poppins"
                          fontSize="15px"
                        >
                          Analisa Dokumen oleh AI (Instant)
                        </Typography>
                      </Box>
                    }
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={selectedAnalysis === "Human"}
                        onChange={() => handleAnalysisSelection("Human")}
                        sx={{
                          color: "#C4084F", // Change the checkbox color
                          "&.Mui-checked": {
                            color: "#C4084F", // Change the color of the checked state
                          },
                        }}
                      />
                    }
                    label={
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={kacaPembesarSvg}
                          alt="Image 2"
                          style={{ marginRight: "10px" }}
                          width="20px"
                        />
                        <Typography
                          variant="body2"
                          fontWeight="bold"
                          fontFamily="Poppins"
                          fontSize="15px"
                        >
                          Analisa Dokumen oleh Human Expert (1-2 Hari)
                        </Typography>
                      </Box>
                    }
                  />
                </FormGroup>
              </Card>
            </div>

            <br />

            {/* Masukan file */}
            <div className="text-interview-container">
              <span className="text-interview">Masukan file kamu disini</span>
            </div>
            <div>
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #C4084F !important",
                  borderColor: "#C4084F !important",
                  padding: "20px"
                }}
              >
                <input type="file" onChange={handleFileChange} />
              </Card>
            </div>

            <br />

            {/* Kumpul Button */}
            <div>
              <Button
                variant="contained"
                onClick={createDokumen}
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #940566, #C70E4E)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #940566, #C70E4E)",
                  },
                  justifyContent: "center", // Centralized icon and text
                  px: 3, // Add some horizontal padding
                }}
              >
                Kumpul
              </Button>
            </div>
            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
