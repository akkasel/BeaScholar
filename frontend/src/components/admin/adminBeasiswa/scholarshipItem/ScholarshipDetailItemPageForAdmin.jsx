import React, { useState } from "react";
import "../../../../App.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../../img/arrowleft.svg";
import { TextField } from "@mui/material";
import MuiMenuItem from "@mui/material/MenuItem";
import TopBarAdmin from "../../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../../adminMasterPage/SideBarAdmin";

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
        <SideBarAdmin /> {/* Render the SideBar component */}

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
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  // borderRadius: "10px",
                }}
              >
                {/* ga perlu pakai div sama span, harusnya tinggal <br /> aja */}
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

            {/* Link atau Website Pendaftaran */}
            <div className="text-interview-container">
              <span className="text-interview">Tautan Pendaftaran</span>
            </div>
            <div className="card-link-pendaftaran">
            <Card
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  // borderRadius: "10px",
                }}
              >
                {/* ga perlu pakai div sama span, harusnya tinggal <br /> aja */}
                <div className="text-container-feedback">
                  <div>
                    <a href="https://karir.bca.co.id/beasiswa-bca/daftar/program-pendidikan-teknologi-informasi-ppti">https://karir.bca.co.id/beasiswa-bca/daftar/program-pendidikan-teknologi-informasi-ppti</a>
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
                label="Tuliskan nama atau judul beasiswa di sini..."
                fullWidth
                id="outlined-textfield-nama"
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
                  label="Tuliskan penyelenggara beasiswa di sini..."
                  fullWidth
                  id="outlined-textfield-nama"
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

            {/* Daftar Sekarang! Lalu diarahkan ke website atau link pendaftarannya */}
            <div>
              <Button
                /* Jadi User nanti diarahkan ke link pendaftarannya, ini contoh aja */
                href="https://karir.bca.co.id/beasiswa-bca/daftar/program-pendidikan-teknologi-informasi-ppti"
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif", // Use the Poppins font
                  textTransform: "none", // Remove capitalization
                  borderRadius: "20px", // Apply rounded edges
                  width: "120px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #009117, #121212)", // Gradient background
                  "&:hover": {
                    background: "linear-gradient(to bottom, #009117, #121212)",
                  },

                  justifyContent: "center", // Centralized text and icon
                }}
              >
                Perbaharui
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
