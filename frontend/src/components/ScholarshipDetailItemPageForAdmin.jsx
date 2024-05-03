import React, { useState } from "react";
import "../App.css";
import TopBar from "./TopBar";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import homelogoSvg from "../img/homelogo.svg";
import miclogoSvg from "../img/miclogo.svg";
import personlogoSvg from "../img/personlogo.svg";
import documentlogoSvg from "../img/documentlogo.svg";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../img/arrowleft.svg";
import arrowrightSvg from "../img/arrowright.svg";
import { TextField } from "@mui/material";
import MuiMenuItem from "@mui/material/MenuItem";
import verifikasilogoSvg from "../img/verifikasilogo.svg";
import uploadbeasiswalogoSvg from "../img/uploadbeasiswalogo.svg";
import TopBarAdmin from "./TopBarAdmin";

const ScholarshipDetailItemPageForAdmin = () => {
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
      <div className="scholarship-detail-admin-page">
        {/* Sidebar */}
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
          <Menu
            menuItemStyles={{
              button: {
                // Styling for the active menu item
                "&.active": {
                  backgroundColor: "#772F32",
                  color: "#FFFFFF",
                },
                // Styling for the hover state
                "&:hover": {
                  backgroundColor: "#772F32", // Dark red color
                  color: "#FFFFFF", // White color
                },
              },
            }}
          >
            <MenuItem className="menu-item">
              <img
                src={homelogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-home">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={verifikasilogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-verifikasi">
                Verifikasi
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={uploadbeasiswalogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-upload-beasiswa">
                Beasiswa
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={personlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/admin-profile">
                Profile
              </Link>
            </MenuItem>
          </Menu>
        </Sidebar>

        <div className="interview-page-container">
          

          {/*Header text "Feedback Dokumen"*/}
          <div className="container-feedback-header">
            <br />
            <br />
            <Button href="/admin-home">
              <img
                className="arrow-back-icon"
                src={arrowleftSvg}
                alt="Icon"
                width={30}
                height={30}
              />
            </Button>
          </div>
          <br />

          <div className="container-feedback-title">
            <h1 className="latihan-interview-text">Beasiswa PPTI BCA</h1>
          </div>

                  {/* Nama */}
                  <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa: </span>
              <span className="text-interview-orange">Nasional</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan: </span>
              <span className="text-interview-orange">S1</span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Penyelenggara: </span>
              <span className="text-interview-orange">
                PT. Bank Central Asia
              </span>
            </div>

            <br />

            {/* Deskripsi */}
            <div className="text-interview-container">
              <span className="text-interview">Deskripsi</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F !important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>
                      Pendaftaran Beasiswa BCA Tahun Ajaran 2025 merupakan pintu
                      gerbang bagi para lulusan SMK/SMA berprestasi untuk
                      mengakses pendidikan berkualitas tanpa biaya dan
                      mendapatkan dukungan finansial yang berkelanjutan. Para
                      penerima beasiswa akan memperoleh manfaat tambahan berupa
                      laptop dan buku pelajaran, serta kesempatan untuk magang
                      dan menerima tawaran kerja. Melalui pendidikan di BCA
                      Learning Institute, mereka akan diperlengkapi dengan
                      pengetahuan mendalam dan keterampilan praktis, termasuk
                      pelatihan soft skill yang vital untuk sukses di dunia
                      kerja.
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Manfaat */}
            <div className="text-interview-container">
              <span className="text-interview">Manfaat</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F !important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>
                      1. Laptop dan buku pelajaran selama perkuliahan (khusus
                      PPTI).
                    </span>
                  </div>
                  <div>
                    <span>
                      2. Menerima sekolah gratis dan uang saku setiap bulan.
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span>3. Menerima tawaran kerja dan peluang magang. </span>
                  </div>
                  <div>
                    <span>
                      4. Makan siang, shuttle bus, dan asrama disediakan.
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            {/* Syarat dan Keperluan */}
            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                className="checkbox-card-container"
                variant="outlined"
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <div>
                      <span>
                        1. Siswa kelas XII atau lulusan SMA baru jurusan IPA
                        atau SMK (jurusan teknik informatika)
                      </span>
                    </div>
                    <div>
                      <span>2. Warga negara Indonesia</span>
                    </div>
                    <div>
                      {" "}
                      <span>
                        3. Usia maksimal untuk mendaftar adalah 19 tahun.{" "}
                      </span>
                    </div>
                    <div>
                      <span>
                        4. Nilai rata-rata matematika untuk kelas X, XI, dan XII
                        (IPA, IPS) atau nilai produktif kelas X, XI, dan XII
                        (khusus SMK) minimal 7,50
                      </span>
                    </div>
                    <div>
                      <span>5. Selesaikan prosedur penyaringan.</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <br />

          </div>

          <hr />

          <div className="container-feedback-title">
            <h1 className="latihan-interview-text">Update Informasi Beasiswa</h1>
          </div>

          <div className="container-feedback-title">
            <div className="text-interview-container">
              <span className="text-interview">
                Nama atau Judul Program Beasiswa
              </span>
            </div>
            <div>
              <TextField
                label="Masukan Nama atau Judul Beasiswa disini..."
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "auto",
                    alignItems: "left",
                    border: "2px solid #C4084F",
                    borderRadius: "10px",
                  },
                  width: "1000px", // Adjust the width value as needed
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "auto",
                      fontSize: "1.2rem", // Increase font size to match the increased height
                      alignItems: "left",
                      border: "2px solid #CA3C4F",
                      height: "60px",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px", // Adjust the padding to position the text correctly
                      alignItems: "left",
                    },
                    width: "1000px", // Adjust the width value as needed
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "auto",
                      fontSize: "1.2rem", // Increase font size to match the increased height
                      alignItems: "left",
                      border: "2px solid #C4084F",
                      borderRadius: "10px",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px", // Adjust the padding to position the text correctly
                      alignItems: "left",
                    },
                    width: "1000px", // Adjust the width value as needed
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "auto",
                      fontSize: "1.2rem", // Increase font size to match the increased height
                      alignItems: "left",
                      border: "2px solid #C4084F",
                      borderRadius: "10px",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px", // Adjust the padding to position the text correctly
                      alignItems: "left",
                    },
                    width: "1000px", // Adjust the width value as needed
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
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      height: "auto",
                      fontSize: "1.2rem", // Increase font size to match the increased height
                      alignItems: "left",
                      border: "2px solid #C4084F",
                      borderRadius: "10px",
                    },
                    "& .MuiOutlinedInput-input": {
                      padding: "10px", // Adjust the padding to position the text correctly
                      alignItems: "left",
                    },
                    width: "1000px", // Adjust the width value as needed
                  }}
                  multiline // Add this prop to enable multiple lines
                />
              </div>
            </div>

            <br />

            {/* Daftar Sekarang! Lalu diarahkan ke website atau link pendaftarannya */}
            <div>
              <Button
                /* Jadi User nanti diarahkan ke link pendaftarannya, ini contoh aja */
                href="https://karir.bca.co.id/beasiswa-bca/daftar/program-pendidikan-teknologi-informasi-ppti"
                variant="contained"
                endIcon={<img src={arrowrightSvg} />}
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "10px", // Apply rounded edges
                  width: "200px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #009117, #121212)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #009117, #121212)",
                  },

                  justifyContent: "space-between", // Distribute space between text and icon
                  position: "absolute",
                  right: 200,
                }}
              >
                Update
              </Button>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailItemPageForAdmin;
