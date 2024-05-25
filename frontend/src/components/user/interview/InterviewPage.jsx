import React, { useState } from "react";
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import rocketSvg from "../../../img/rocket.svg";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import "dayjs/locale/en-gb";

import { auth } from "../../../firebase"; // import auth from firebase
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const InterviewPage = () => {
  const [user] = useAuthState(auth); // Using react-firebase-hooks to manage auth state

  const navigate = useNavigate();

  // State for interview form fields
  const [nama, setNama] = useState("");
  const [tingkat, setTingkat] = useState("S1");
  const [lingkup, setLingkup] = useState("Dalam Negeri");
  const [jenisInterview, setJenisInterview] = useState("");
  const [deskripsiDiri, setDeskripsiDiri] = useState("");
  const [waktuInterview, setWaktuInterview] = useState(null);
  const [zoomMeetingId, setZoomMeetingId] = useState("");
  const [zoomMeetingPassword, setZoomMeetingPassword] = useState("");
  const [zoomJoinUrl, setZoomJoinUrl] = useState("");
  const [zoomStartUrl, setZoomStartUrl] = useState("");

  // Options for tingkat pendidikan
  const tingkatPendidikan = [
    { value: "SMA", label: "SMA" },
    { value: "SMK", label: "SMK" },
    { value: "S1", label: "S1" },
    { value: "S2", label: "S2" },
    { value: "S3", label: "S3" },
  ];

  // Options for lingkup beasiswa
  const lingkupBeasiswa = [
    { value: "Dalam Negeri", label: "Dalam Negeri" },
    { value: "Luar Negeri", label: "Luar Negeri" },
  ];

  // Checkbox state for single selection
  const [selectedTingkatBeasiswa, setSelectedTingkatBeasiswa] = useState("");

  // Handle checkbox for tingkat mahasiswa
  const handleChecklistTingkatMahasiswa = (value) => {
    setSelectedTingkatBeasiswa(value);
    setTingkat(value);
  };

  // Create interview by calling the backend API
  const createInterview = async () => {
    if (!user) {
      alert("You must be logged in to create an Interview.");
      return;
    }

    const interviewData = {
      nama,
      lingkup,
      tingkat,
      jenisInterview,
      deskripsiDiri,
      waktuInterview: waktuInterview ? waktuInterview.toISOString() : null,
    };

    try {
      const response = await fetch("http://localhost:8080/interview", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interviewData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to create Interview");
      }

      setZoomMeetingId(data.zoomMeetingId);
      setZoomMeetingPassword(data.zoomMeetingPassword);
      setZoomJoinUrl(data.zoomJoinUrl);
      setZoomStartUrl(data.zoomStartUrl);

      alert("Interview created successfully!");
      navigate('/daftar-jadwal-interview')
    } catch (error) {
      console.error("Error creating interview:", error);
      alert("Failed to create Interview. Check console for details.");
    }
  };

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="interview-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Latihan Interview"*/}
          <div className="interview-header-container">
            <br />
            <img
              className="rocket-icon"
              src={rocketSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Latihan Interview</h1>
          </div>

          {/* Nama */}
          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Nama</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                label="Masukkan nama di sini..."
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

            {/* Tingkat Pendidikan */}
            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan</span>
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-select-tingkat-pendidikan"
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

            {/* Lingkup Beasiswa */}
            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa</span>
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

            {/* Jenis Interview*/}
            <div className="text-interview-container">
              <span className="text-interview">Jenis Interview</span>
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

            {/* Deskripsi Diri */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi Diri (opsional)</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-deskripsiDiri"
                label="Tuliskan deskripsi dirimu di sini..."
                value={deskripsiDiri}
                onChange={(e) => setDeskripsiDiri(e.target.value)}
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

            {/* Pilih waktu interview */}
            <div className="text-interview-container">
              <span className="text-interview">Pilih Waktu Interview</span>
            </div>
            <div>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="en-gb"
              >
                <DateTimePicker
                  value={waktuInterview}
                  onChange={(newValue) => setWaktuInterview(newValue)}
                  renderInput={(params) => <TextField {...params} />}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      width: "1000px",
                      "& fieldset": {
                        border: "2px solid",
                        borderColor: "#C4084F", // Change the border color
                      },
                      "&:hover fieldset": {
                        border: "2px solid",
                        borderColor: "#C4084F", // Change the border color on hover
                      },
                      "&.Mui-focused fieldset": {
                        border: "2px solid",
                        borderColor: "#C4084F", // Change the border color on focus
                      },
                    },
                    "& .MuiCalendarPicker-root": {
                      border: "2px solid",
                      color: "#C4084F", // Change the color of the calendar
                    },
                    "& .MuiClockPicker-root": {
                      border: "2px solid",
                      color: "#C4084F", // Change the color of the time picker
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            <br />
            <br />

            {/* Kumpul Button */}
            <div>
              <Button
                variant="contained"
                onClick={createInterview}
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

                  justifyContent: "center", // Centralized text and icon
                  px: 3, // Add some horizontal padding
                }}
              >
                Kumpul
              </Button>
            </div>

            {/* Display Zoom meeting details if available 
            {zoomJoinUrl && (
              <div className="zoom-details">
                <h3>Zoom Meeting Details:</h3>
                <p><strong>Meeting ID:</strong> {zoomMeetingId}</p>
                <p><strong>Password:</strong> {zoomMeetingPassword}</p>
                <p><strong>Join URL:</strong> <a href={zoomJoinUrl} target="_blank" rel="noopener noreferrer">{zoomJoinUrl}</a></p>
                <p><strong>Start URL:</strong> <a href={zoomStartUrl} target="_blank" rel="noopener noreferrer">{zoomStartUrl}</a></p>
              </div>
            )}
            */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewPage;


