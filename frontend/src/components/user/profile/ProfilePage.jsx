import React, { useState, useEffect } from "react";
import { auth, storage, db } from "../../../firebase"; // Import db
import "../../../App.css";
import TopBar from "../masterPage/TopBar";
import SideBar from "../masterPage/SideBar";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import pencilSvg from "../../../img/pencil.svg";
import noprofileSvg from "../../../img/noprofile.svg";
import Card from "@mui/material/Card";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState(noprofileSvg); // Default profile picture

  /*
  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setProfilePicUrl(currentUser.photoURL || noprofileSvg);
        
        // Fetch additional user info from Firestore
        const doc = await db.collection("userProfiles").doc(currentUser.uid).get();
        if (doc.exists) {
          const data = doc.data();
          setEducationLevel(data.educationLevel || "SMA");
          setDescription(data.description || "Tidak ada deskripsi");
        }
      }
    };
    fetchUserData();
  }, []);

  */
  return (
    <div className="profile-page">
      <TopBar /> {/* Render the TopBar component */}
      <div className="profile-page-container">
        <SideBar /> {/* Render the SideBar component */}
        <div className="profile-content">
          {/*Header text "Profil Kamu"*/}
          <div className="interview-header-container">
            <img
              className="rocket-icon"
              src={pencilSvg}
              alt="Icon"
              width={40}
              height={40}
            />
            <h1 className="latihan-interview-text">Profil Diri Kamu</h1>
          </div>

          <div className="profile-avatar-container">
            <Avatar
              src={profilePicUrl}
              sx={{ width: 120, height: 120 }}
            />
          </div>

          <div className="profile-form-container">
            <Card
              variant="outlined"
              sx={{
                borderRadius: "16px",
                padding: "10px",
                marginTop: "20px",
                alignItems: "center",
                backgroundColor: "#FFFFFF", // white background
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)", // soft shadow
                width: "1100px",
                marginLeft: "80px",
              }}
            >
              {/* Nama */}
              <div className="profile-form-group">
                <div className="profile-form-label">Nama:</div>
                <div className="profile-form-value">Amanda</div>
              </div>

              <hr className="solid" color="lightgrey" />

              {/* Tingkat Pendidikan */}
              <div className="profile-form-group">
                <div className="profile-form-label">Tingkat Pendidikan:</div>
                <div className="profile-form-value">SMA</div>
              </div>

              <hr className="solid" color="lightgrey" />

              {/* Deskripsi Diri */}
              <div className="profile-form-group">
                <div className="profile-form-label">
                  Deskripsi Diri (opsional):
                </div>
                <div className="profile-form-value">Tidak ada deskripsi</div>
              </div>
            </Card>

            {/* Ubah Button */}
            <div className="profile-button-container">
              <Button
                href="/change-profile"
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "100px",
                  fontWeight: "bold",
                  background: "linear-gradient(to right, #FA6339, #C73950)",
                  "&:hover": {
                    background: "linear-gradient(to right, #FA6339, #C73950)",
                  },
                  justifyContent: "center",
                }}
              >
                Ubah
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

