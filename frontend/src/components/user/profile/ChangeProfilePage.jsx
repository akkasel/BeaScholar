// BELUM KEPAKAI, KARNA BELUM 100% WORKS

import React, { useState, useEffect } from "react";
import { auth, storage, db } from "../../../firebase"; // Import db instead of firestore
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for react-router-dom v6
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import TextField from "@mui/material/TextField";
import MuiMenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import pencilSvg from "../../../img/pencil.svg";
import Avatar from "@mui/material/Avatar";
import contohprofileimageSvg from "../../../img/contohprofileimage.svg";
import noprofileSvg from "../../../img/noprofile.svg";

const ChangeProfilePage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("SMA"); // Default value
  const [description, setDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicUrl, setProfilePicUrl] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate hook

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

  useEffect(() => {
    const fetchUser = () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setProfilePicUrl(currentUser.photoURL || "");
        // Fetch user profile from Firestore
        db.collection("userProfiles")
          .doc(currentUser.uid)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              setEducationLevel(data.educationLevel || "SMA");
              setDescription(data.description || "");
            }
          });
      }
    };
    fetchUser();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleProfilePicChange = (e) => {
    if (e.target.files[0]) {
      setProfilePic(e.target.files[0]);
    }
  };

  const handleEducationLevelChange = (e) => {
    setEducationLevel(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const updateProfile = async () => {
    try {
      let photoURL = profilePicUrl;

      if (profilePic) {
        const uploadTask = storage.ref(`documents/${user.uid}`).put(profilePic);
        await uploadTask;
        photoURL = await storage
          .ref("documents")
          .child(user.uid)
          .getDownloadURL();
      }

      await user.updateProfile({
        displayName: name,
        photoURL,
      });

      // Save additional user info (e.g., education level) to Firestore
      await db.collection("userProfiles").doc(user.uid).set({
        displayName: name,
        photoURL,
        educationLevel,
        description,
      });

      navigate("/profile"); // Navigate to profile page after saving
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="interview-page">
        <SideBar /> {/* Render the SideBar component */}
        <div className="interview-page-container">
          {/*Header text "Profil Kamu"*/}
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={pencilSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Ubah Profil Diri Kamu</h1>
          </div>

          <div className="container-avatar">
            <Avatar src={noprofileSvg} sx={{ width: 120, height: 120 }} />
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
                label="Masukan nama disini..."
                variant="outlined"
                value={name}
                onChange={handleNameChange}
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
            <br></br>

            {/* Tingkat Pendidikan */}
            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan</span>
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-select-tingkat-pendidikan"
                select
                value={educationLevel}
                onChange={handleEducationLevelChange}
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

            {/* Deskripsi Diri */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi Diri (opsional)</span>
            </div>
            <div className="">
              <TextField
                fullWidth
                id="outlined-textfield-description"
                label="Tulis deskripsi dirimu disini..."
                variant="outlined"
                value={description}
                onChange={handleDescriptionChange}
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

            {/* Simpan Button */}
            <div>
              <Button
                variant="contained"
                onClick={updateProfile} // Handle the update profile function
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #FA6339, #C73950)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to right, #FA6339, #C73950)",
                  },
                  justifyContent: "center", // Centralized text and icon
                }}
              >
                Simpan
              </Button>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeProfilePage;

