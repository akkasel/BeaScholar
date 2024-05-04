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
import TopBarAdmin from "./TopBarAdmin";

const ScholarshipDetailItemPage = () => {
  return (
    <div>
      <TopBar /> {/* Render the TopBar component */}
      <div className="feedback-interview-page">
        {/* Render the SideBar component */}
        <Sidebar backgroundColor="#CA3C4F" className="sidebar-container">
          <Menu
            menuItemStyles={{
              button: {
                // Styling for the active menu item
                "&.active": {
                  backgroundColor: "#772F32", // Change this to the desired color
                  color: "#FFFFFF", // Change this to the desired color
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
              <Link className="link-menu-item" to="/home">
                Dashboard
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={miclogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/interview">
                Interview
              </Link>
            </MenuItem>
            <MenuItem className="menu-item">
              <img
                src={documentlogoSvg}
                alt="Icon"
                style={{
                  marginTop: "5px",
                  marginRight: "15px",
                  width: "20px",
                  height: "18px",
                }}
              />
              <Link className="link-menu-item" to="/document">
                Dokumen
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
              <Link className="link-menu-item" to="/profile">
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
            <Button href="/home">
              <img
                className="arrow-back-icon"
                src={arrowleftSvg}
                alt="Icon"
                width={30}
                height={30}
              />
            </Button>
          </div>

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
                  background: "linear-gradient(to bottom, #C4084F, #FF6C37)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #C4084F, #FF6C37)",
                  },

                  justifyContent: "space-between", // Distribute space between text and icon
                  position: "absolute",
                  right: 200,
                }}
              >
                Daftar Sekarang!
              </Button>
            </div>

            {/* Add your input form here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailItemPage;
