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

const DocumentPage = () => {
  // ini untuk nampung file nya
  const [file, setFile] = useState(null);

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

  // untuk handle input file dokumen
  const handleInputFile = (e) => {
    setFile(e.target.files[0]);
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

            {/* Jenis Interview*/}
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
            {/* warna bordernya masih perlu diatur */}
            <div className="text-interview-container">
              <span className="text-interview">
                Masukan file kamu disini (.pdf):
              </span>
            </div>
            <div className="input-group">
              <input
                type="file"
                placeholder="KTP"
                value={file}
                onChange={handleInputFile}
              />
            </div>

            <br />

            {/* Kumpul Button */}
            <div>
              <Button
                variant="contained"
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
