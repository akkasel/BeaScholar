import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../../../App.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import arrowleftSvg from "../../../../img/arrowleft.svg";
import { TextField } from "@mui/material";
import MuiMenuItem from "@mui/material/MenuItem";
import TopBarAdmin from "../../adminMasterPage/TopBarAdmin";
import SideBarAdmin from "../../adminMasterPage/SideBarAdmin";
import { db } from "../../../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

const ScholarshipDetailItemPageForAdmin = () => {
  const { id } = useParams();
  const [scholarship, setScholarship] = useState(null);

  // untuk alertnya
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  useEffect(() => {
    const fetchScholarship = async () => {
      const docRef = doc(db, "beasiswa", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setScholarship(docSnap.data());
      } else {
        console.error("No such document!");
      }
    };

    fetchScholarship();
  }, [id]);

  // to handle UPDATE beasiswa data
  const handleUpdate = async () => {
    const docRef = doc(db, "beasiswa", id);
    await updateDoc(docRef, {
      // Add the fields to be updated here
    });
    // alert("Beasiswa berhasil diperbarui");
    // for success alert
    setAlert({
      show: true,
      type: "success",
      message: "Data Beasiswa ini berhasil diperbarui!",
    });
  };

  if (!scholarship) {
    return <div>Loading...</div>;
  }

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
      <TopBarAdmin />
      <div className="scholarship-detail-admin-page">
        <SideBarAdmin />
        <div className="interview-page-container">
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
            <h1 className="latihan-interview-text">{scholarship.nama}</h1>
          </div>

          <div className="form-input-container">
            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa: </span>
              <span className="text-interview-orange">
                {scholarship.lingkup}
              </span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan: </span>
              <span className="text-interview-orange">
                {scholarship.tingkat}
              </span>
            </div>

            <div className="text-interview-container">
              <span className="text-interview">Penyelenggara: </span>
              <span className="text-interview-orange">
                {scholarship.penyelenggara}
              </span>
            </div>

            <br />

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
                    <span>{scholarship.deskripsi}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

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
                    <span>{scholarship.manfaat}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <div className="card-feedback-interview">
              <Card
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <span>{scholarship.syarat}</span>
                  </div>
                </div>
              </Card>
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tautan Pendaftaran</span>
            </div>
            <div className="card-link-pendaftaran">
              <Card
                sx={{
                  border: "2px solid #CA3C4F!important",
                  borderColor: "#CA3C4F !important",
                  borderRadius: "10px",
                }}
              >
                <div className="text-container-feedback">
                  <div>
                    <a
                      href={scholarship.tautan}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {scholarship.tautan}
                    </a>
                  </div>
                </div>
              </Card>
            </div>
            <br />

            <hr />

            {/* DIBAWAH INI ADALAH LAYOUT UNTUK UPDATE INFORMASI BEASISWA */}

            <h1 className="latihan-interview-text">
              Update Informasi Beasiswa
            </h1>

            <div className="text-interview-container">
              <span className="text-interview">
                Nama atau Judul Program Beasiswa
              </span>
            </div>
            <div>
              <TextField
                fullWidth
                id="outlined-textfield-nama"
                variant="outlined"
                value={scholarship.nama}
                onChange={(e) =>
                  setScholarship({ ...scholarship, nama: e.target.value })
                }
                width="200px"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#C4084F",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiInputLabel-outlined": {
                    color: "#121212",
                  },
                }}
              />
            </div>

            <br />

            <div className="text-interview-container">
              <span className="text-interview">Lingkup Beasiswa</span>
            </div>
            <TextField
              fullWidth
              id="outlined-select-lingkup-beasiswa"
              select
              value={scholarship.lingkup}
              onChange={(e) =>
                setScholarship({ ...scholarship, lingkup: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
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

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tingkat Pendidikan</span>
            </div>
            <TextField
              fullWidth
              id="outlined-select-lingkup-beasiswa"
              select
              value={scholarship.tingkat}
              onChange={(e) =>
                setScholarship({ ...scholarship, tingkat: e.target.value })
              }
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
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

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Penyelenggara</span>
            </div>
            <TextField
              fullWidth
              id="outlined-textfield-nama"
              variant="outlined"
              value={scholarship.penyelenggara}
              onChange={(e) =>
                setScholarship({
                  ...scholarship,
                  penyelenggara: e.target.value,
                })
              }
              width="200px"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#121212",
                },
              }}
            />

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Deskripsi</span>
            </div>
            <TextField
              fullWidth
              id="outlined-textfield-nama"
              variant="outlined"
              value={scholarship.deskripsi}
              onChange={(e) =>
                setScholarship({ ...scholarship, deskripsi: e.target.value })
              }
              width="200px"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#121212",
                },
              }}
              multiline
            />

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Manfaat</span>
            </div>
            <TextField
              fullWidth
              id="outlined-textfield-nama"
              variant="outlined"
              value={scholarship.manfaat}
              onChange={(e) =>
                setScholarship({ ...scholarship, manfaat: e.target.value })
              }
              width="200px"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#121212",
                },
              }}
              multiline
            />

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Syarat dan Keperluan</span>
            </div>
            <TextField
              fullWidth
              id="outlined-textfield-nama"
              variant="outlined"
              value={scholarship.syarat}
              onChange={(e) =>
                setScholarship({ ...scholarship, syarat: e.target.value })
              }
              width="200px"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#121212",
                },
              }}
              multiline
            />

            <br />
            <br />

            <div className="text-interview-container">
              <span className="text-interview">Tautan Pendaftaran</span>
            </div>
            <TextField
              fullWidth
              id="outlined-textfield-nama"
              variant="outlined"
              value={scholarship.tautan}
              onChange={(e) =>
                setScholarship({ ...scholarship, tautan: e.target.value })
              }
              width="200px"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#C4084F",
                    borderWidth: "2px",
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#121212",
                },
              }}
            />

            <br />
            <br />

            <div>
              <Button
                onClick={handleUpdate}
                variant="contained"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "none",
                  borderRadius: "20px",
                  width: "120px",
                  fontWeight: "bold",
                  background: "linear-gradient(to bottom, #009117, #121212)",
                  "&:hover": {
                    background: "linear-gradient(to bottom, #009117, #121212)",
                  },
                  justifyContent: "center",
                }}
              >
                Perbaharui
              </Button>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetailItemPageForAdmin;
